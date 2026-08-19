// Zoho SMTP contact form — server-side only.
// NEVER expose credentials to the client. Use env vars:
//   ZOHO_SMTP_HOST, ZOHO_SMTP_PORT, ZOHO_SMTP_USER, ZOHO_SMTP_PASSWORD,
//   CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional)

import { NextRequest, NextResponse } from "next/server";
import { suhayl } from "@/lib/personal-brand";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// In-memory rate-limit map. For production-grade limits, use Redis/Upstash.
const buckets = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000; // 10 min
const MAX_REQ = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || b.reset < now) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQ - 1 };
  }
  if (b.count >= MAX_REQ) return { ok: false, remaining: 0 };
  b.count += 1;
  return { ok: true, remaining: MAX_REQ - b.count };
}

// Basic sanitisation — strip HTML and trim.
function clean(v: unknown) {
  if (typeof v !== "string") return "";
  return v
    .replace(/<[^>]*>?/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim();
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const enquiryLabels: Record<string, string> = {
  job: "Job Opportunity",
  ugc: "UGC Enquiry",
  automotive: "Automotive Collaboration",
  speaking: "Speaking / Event",
  "sm-stratagem": "SM Stratagem / Business",
  other: "General Enquiry",
};

const fieldOrder: Record<string, string[]> = {
  job: ["name", "company", "email", "role", "link", "message"],
  ugc: [
    "name",
    "company",
    "email",
    "website",
    "campaignType",
    "package",
    "usage",
    "timeline",
    "brief",
  ],
  automotive: [
    "brand",
    "name",
    "email",
    "vehicle",
    "deliverables",
    "location",
    "dates",
    "usage",
    "notes",
  ],
  speaking: ["name", "company", "email", "event", "topic"],
  "sm-stratagem": ["name", "company", "email", "brief"],
  other: ["name", "email", "brief"],
};

function buildHtml(label: string, body: Record<string, string>) {
  const rows = Object.entries(body)
    .filter(([_, v]) => v && v.length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;font:500 12px/1.4 ui-monospace,JetBrains Mono,monospace;text-transform:uppercase;letter-spacing:0.18em;color:#5A6B84;background:#F5F8FC;width:160px;vertical-align:top;">${k}</td><td style="padding:10px 14px;font:400 14px/1.5 Inter,system-ui,sans-serif;color:#0A0A0C;">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  return `<!doctype html><html><body style="margin:0;background:#FBF7F1;padding:32px;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid rgba(11,31,58,0.08);">
    <div style="background:#0B1F3A;padding:24px 28px;color:#FBF7F1;">
      <div style="font:500 10px/1.4 'JetBrains Mono',monospace;letter-spacing:0.28em;text-transform:uppercase;color:#A9C7FF;">[Suhayl Website] New message</div>
      <div style="font:700 22px/1.2 'Plus Jakarta Sans',sans-serif;margin-top:8px;">${label}</div>
    </div>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="padding:18px 24px;background:#F5F8FC;font:400 11px/1.4 Inter,system-ui,sans-serif;color:#5A6B84;">
      Sent automatically from suhayl-dastager.me · ${new Date().toUTCString()}
    </div>
  </div>
</body></html>`;
}

function buildConfirmation(name: string) {
  return `<!doctype html><html><body style="margin:0;background:#FBF7F1;padding:32px;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid rgba(11,31,58,0.08);">
    <div style="background:#0B1F3A;padding:24px 28px;color:#FBF7F1;">
      <div style="font:500 10px/1.4 'JetBrains Mono',monospace;letter-spacing:0.28em;text-transform:uppercase;color:#A9C7FF;">Suhayl Dastager</div>
      <div style="font:700 22px/1.2 'Plus Jakarta Sans',sans-serif;margin-top:8px;">Thanks${name ? `, ${escapeHtml(name)}` : ""}.</div>
    </div>
    <div style="padding:24px 28px;color:#0A0A0C;font:400 15px/1.55 Inter,system-ui,sans-serif;">
      I received your message and will get back to you as soon as possible.
    </div>
    <div style="padding:18px 24px;background:#F5F8FC;font:400 11px/1.4 Inter,system-ui,sans-serif;color:#5A6B84;">
      — Suhayl · Dubai, UAE
    </div>
  </div>
</body></html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendViaZoho({
  to,
  from,
  replyTo,
  subject,
  html,
}: {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
}) {
  const host = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
  const port = parseInt(process.env.ZOHO_SMTP_PORT || "465", 10);
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Zoho SMTP credentials are not configured.");
  }

  // Dynamic import keeps edge bundle clean.
  const nodemailer = await import("nodemailer").catch(() => null);
  if (!nodemailer) {
    throw new Error(
      "nodemailer is not installed. Run `npm install nodemailer`."
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
  });
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json().catch(() => ({}));
    const enquiryType = clean(data?.enquiryType).toLowerCase();
    if (!enquiryType || !enquiryLabels[enquiryType]) {
      return NextResponse.json(
        { error: "Invalid enquiry type." },
        { status: 400 }
      );
    }

    // Honeypot
    if (typeof data?.company_name_hp === "string" && data.company_name_hp.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Build cleaned body from expected fields
    const body: Record<string, string> = {};
    for (const key of fieldOrder[enquiryType] || []) {
      body[key] = clean(data?.[key]).slice(0, 5000);
    }

    // Required field validation
    if (enquiryType === "job" && (!body.name || !body.email || !body.role)) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }
    if (
      enquiryType === "ugc" &&
      (!body.name || !body.email || !body.brief)
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }
    if (
      enquiryType === "automotive" &&
      (!body.brand || !body.name || !body.email)
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }
    if (
      (enquiryType === "speaking" || enquiryType === "sm-stratagem") &&
      (!body.name || !body.email)
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }
    if (enquiryType === "other" && (!body.name || !body.email || !body.brief)) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (body.email && !isEmail(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const to =
      process.env.CONTACT_TO_EMAIL || suhayl.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      `Suhayl Dastager Website <noreply@${
        suhayl.site.url.replace(/^https?:\/\//, "").split("/")[0]
      }>`;
    const subject = `[Suhayl Website] ${enquiryLabels[enquiryType]} — ${
      body.company || body.brand || body.name || "Anonymous"
    }`;

    // If Zoho isn't configured in dev, log + still return success so the UX works.
    if (
      !process.env.ZOHO_SMTP_USER ||
      !process.env.ZOHO_SMTP_PASSWORD
    ) {
      console.warn(
        "[contact] ZOHO_SMTP_USER/PASSWORD not set — logging payload instead."
      );
      console.log("[contact] subject:", subject);
      console.log("[contact] body:", body);
      return NextResponse.json({ ok: true, dev: true });
    }

    try {
      await sendViaZoho({
        to,
        from,
        replyTo: body.email || undefined,
        subject,
        html: buildHtml(enquiryLabels[enquiryType], body),
      });
    } catch (err) {
      console.error("[contact] send failed", err);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or email me directly." },
        { status: 502 }
      );
    }

    // Confirmation email to the sender
    if (body.email && isEmail(body.email)) {
      try {
        await sendViaZoho({
          to: body.email,
          from,
          subject: "Thanks — I received your message",
          html: buildConfirmation(body.name?.split(" ")[0] || ""),
        });
      } catch (err) {
        // Confirmation failure shouldn't fail the main submission
        console.error("[contact] confirmation failed", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
