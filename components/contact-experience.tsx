"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Briefcase,
  Video,
  Car,
  Mic2,
  Building2,
  Sparkles,
} from "lucide-react";
import { suhayl } from "@/lib/data";
import { cn } from "@/lib/utils";

type EnquiryType =
  | "job"
  | "ugc"
  | "automotive"
  | "speaking"
  | "sm-stratagem"
  | "other";

const enquiryTypes: {
  id: EnquiryType;
  label: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "job",
    label: "Job opportunity",
    description: "AI · Product · Automation · Engineering · Data",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    id: "ugc",
    label: "UGC / Brand partnership",
    description: "Campaigns, organic, paid, software, automotive",
    icon: <Video className="h-4 w-4" />,
  },
  {
    id: "automotive",
    label: "Automotive collaboration",
    description: "Hero shoots, content days, launch films",
    icon: <Car className="h-4 w-4" />,
  },
  {
    id: "speaking",
    label: "Speaking / Event",
    description: "Panels, keynotes, podcasts, workshops",
    icon: <Mic2 className="h-4 w-4" />,
  },
  {
    id: "sm-stratagem",
    label: "SM Stratagem / Business",
    description: "Studio work, partnerships, hiring",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    id: "other",
    label: "Something else",
    description: "Tell me what you have in mind",
    icon: <Sparkles className="h-4 w-4" />,
  },
];

const campaignTypes = [
  "UGC",
  "Paid Social Creative",
  "Organic Social Content",
  "Automotive",
  "SaaS / Software",
  "Creator Partnership",
  "Retainer",
  "Other",
] as const;

const usageTypes = [
  "Organic only",
  "Paid media",
  "Creator / partnership ads",
  "Mix",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const ContactExperience = () => {
  const [enquiryType, setEnquiryType] = React.useState<EnquiryType | null>(null);
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [formValues, setFormValues] = React.useState<Record<string, string>>({});

  // Read URL params (e.g. /contact?type=ugc&package=sprint)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type");
    if (t && enquiryTypes.some((e) => e.id === t)) {
      setEnquiryType(t as EnquiryType);
    }
  }, []);

  const update = (k: string, v: string) =>
    setFormValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enquiryType) return;
    setStatus("submitting");
    setErrorMsg(null);

    // Honeypot
    if (formValues["company_name_hp"]) {
      setStatus("success"); // pretend
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enquiryType, ...formValues }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return <SuccessState />;
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-canvas-warm"
      aria-label="Get in touch"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">What can we create together?</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-display-lg text-ink-900 text-balance">
              The faster you tell me
              <br />
              <span className="text-electric">why you&apos;re here,</span> the
              tighter my reply.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-ink-900/70 text-pretty">
              Pick the path that matches your intent. The form adapts.
            </p>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500">
              Or email{" "}
              <Link
                href={`mailto:${suhayl.email}`}
                className="text-ink-900 hover:text-electric transition-colors"
              >
                {suhayl.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Step 1 — type */}
        <div className="mb-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-4">
            01 — What brings you here?
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {enquiryTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setEnquiryType(t.id)}
                className={cn(
                  "text-left rounded-2xl border p-4 transition-all duration-300",
                  enquiryType === t.id
                    ? "bg-ink-900 text-cream border-ink-900"
                    : "bg-white border-navy-900/10 hover:border-ink-900/30"
                )}
              >
                <div
                  className={cn(
                    "grid place-items-center h-8 w-8 rounded-full mb-3",
                    enquiryType === t.id
                      ? "bg-cream/15 text-cream"
                      : "bg-navy-900/8 text-navy-500"
                  )}
                >
                  {t.icon}
                </div>
                <div className="font-display font-semibold text-sm tracking-tight leading-tight">
                  {t.label}
                </div>
                <div
                  className={cn(
                    "mt-1.5 text-[11px] leading-snug",
                    enquiryType === t.id ? "text-cream/65" : "text-navy-500"
                  )}
                >
                  {t.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — form */}
        <AnimatePresence mode="wait">
          {enquiryType ? (
            <motion.form
              key={enquiryType}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <div className="md:col-span-12 mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                02 — The details
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="company_name_hp"
                value={formValues["company_name_hp"] || ""}
                onChange={(e) => update("company_name_hp", e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden
                className="absolute opacity-0 pointer-events-none h-0 w-0"
              />

              <FormFields
                enquiryType={enquiryType}
                values={formValues}
                update={update}
              />

              {status === "error" && (
                <div className="md:col-span-12 flex items-start gap-3 rounded-2xl border border-coral/40 bg-coral/10 p-4 text-coral-deep">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    {errorMsg}
                    <div className="mt-1 text-coral-deep/80 text-xs">
                      Your inputs are still in the form. Just hit submit again.
                    </div>
                  </div>
                </div>
              )}

              <div className="md:col-span-12 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-navy-900/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500/70">
                  Replies usually within 24–48h.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-dashed border-navy-900/15 bg-white/40 p-12 text-center"
            >
              <p className="text-ink-900/60">
                Pick a category above to unlock the right form.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const FormFields = ({
  enquiryType,
  values,
  update,
}: {
  enquiryType: EnquiryType;
  values: Record<string, string>;
  update: (k: string, v: string) => void;
}) => {
  const shared = {
    name: (
      <Field
        label="Name"
        required
        value={values["name"] || ""}
        onChange={(v) => update("name", v)}
      />
    ),
    company: (
      <Field
        label="Company / Brand"
        value={values["company"] || ""}
        onChange={(v) => update("company", v)}
      />
    ),
    email: (
      <Field
        label="Email"
        type="email"
        required
        value={values["email"] || ""}
        onChange={(v) => update("email", v)}
      />
    ),
    message: (
      <Field
        label="Message"
        textarea
        value={values["message"] || ""}
        onChange={(v) => update("message", v)}
      />
    ),
  };

  if (enquiryType === "job") {
    return (
      <>
        <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.company}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.email}</FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Role / Opportunity"
            required
            value={values["role"] || ""}
            onChange={(v) => update("role", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-12">
          <Field
            label="Optional LinkedIn / Job description URL"
            value={values["link"] || ""}
            onChange={(v) => update("link", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-12">{shared.message}</FieldWrap>
      </>
    );
  }

  if (enquiryType === "ugc") {
    return (
      <>
        <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.company}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.email}</FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Website"
            value={values["website"] || ""}
            onChange={(v) => update("website", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Select
            label="Campaign type"
            value={values["campaignType"] || ""}
            onChange={(v) => update("campaignType", v)}
            options={[...campaignTypes]}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Requested package"
            value={values["package"] || ""}
            onChange={(v) => update("package", v)}
            placeholder="UGC Core · Performance · Sprint · Retainer · Auto Hero · Auto Day"
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Select
            label="Usage type"
            value={values["usage"] || ""}
            onChange={(v) => update("usage", v)}
            options={[...usageTypes]}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Expected timeline"
            value={values["timeline"] || ""}
            onChange={(v) => update("timeline", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-12">
          <Field
            label="Campaign description / required deliverables"
            textarea
            required
            value={values["brief"] || ""}
            onChange={(v) => update("brief", v)}
          />
        </FieldWrap>
      </>
    );
  }

  if (enquiryType === "automotive") {
    return (
      <>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Brand / Agency"
            required
            value={values["brand"] || ""}
            onChange={(v) => update("brand", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.email}</FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Vehicle / Campaign"
            value={values["vehicle"] || ""}
            onChange={(v) => update("vehicle", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Deliverables"
            value={values["deliverables"] || ""}
            onChange={(v) => update("deliverables", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Location"
            value={values["location"] || ""}
            onChange={(v) => update("location", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Required dates"
            value={values["dates"] || ""}
            onChange={(v) => update("dates", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Usage"
            value={values["usage"] || ""}
            onChange={(v) => update("usage", v)}
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-12">
          <Field
            label="Campaign notes"
            textarea
            value={values["notes"] || ""}
            onChange={(v) => update("notes", v)}
          />
        </FieldWrap>
      </>
    );
  }

  if (enquiryType === "speaking") {
    return (
      <>
        <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.company}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.email}</FieldWrap>
        <FieldWrap className="md:col-span-6">
          <Field
            label="Event / Format"
            value={values["event"] || ""}
            onChange={(v) => update("event", v)}
            placeholder="Panel · Keynote · Podcast · Workshop"
          />
        </FieldWrap>
        <FieldWrap className="md:col-span-12">
          <Field
            label="Topic, audience, date"
            textarea
            value={values["topic"] || ""}
            onChange={(v) => update("topic", v)}
          />
        </FieldWrap>
      </>
    );
  }

  if (enquiryType === "sm-stratagem") {
    return (
      <>
        <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
        <FieldWrap className="md:col-span-6">{shared.company}</FieldWrap>
        <FieldWrap className="md:col-span-12">{shared.email}</FieldWrap>
        <FieldWrap className="md:col-span-12">
          <Field
            label="What are you looking to build or talk about?"
            textarea
            required
            value={values["brief"] || ""}
            onChange={(v) => update("brief", v)}
          />
        </FieldWrap>
      </>
    );
  }

  // other
  return (
    <>
      <FieldWrap className="md:col-span-6">{shared.name}</FieldWrap>
      <FieldWrap className="md:col-span-6">{shared.email}</FieldWrap>
      <FieldWrap className="md:col-span-12">
        <Field
          label="Tell me what you have in mind"
          textarea
          required
          value={values["brief"] || ""}
          onChange={(v) => update("brief", v)}
        />
      </FieldWrap>
    </>
  );
};

const FieldWrap = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("flex flex-col gap-2", className)}>{children}</div>;

const Field = ({
  label,
  type = "text",
  required,
  textarea,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500"
      >
        {label}
        {required ? <span className="text-coral"> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={label}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="w-full rounded-2xl border border-navy-900/10 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-navy-500/50 focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition-colors"
        />
      ) : (
        <input
          id={id}
          name={label}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-navy-900/10 bg-white px-5 py-3 text-base text-ink-900 placeholder:text-navy-500/50 focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition-colors"
        />
      )}
    </div>
  );
};

const Select = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) => {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-navy-900/10 bg-white px-5 py-3 text-base text-ink-900 focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition-colors appearance-none"
      >
        <option value="">Choose…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

const SuccessState = () => {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-canvas-warm"
      aria-label="Message received"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          className="mx-auto grid place-items-center h-20 w-20 rounded-full bg-electric text-white"
        >
          <CheckCircle2 className="h-9 w-9" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 font-display font-bold tracking-tightest text-display-md text-ink-900"
        >
          Message received.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg text-ink-900/70 text-pretty"
        >
          I&apos;ll be in touch. In the meantime, see what I&apos;m building.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href={suhayl.social.instagram} className="btn-ghost">
            Instagram
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href={suhayl.social.linkedin} className="btn-ghost">
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href={suhayl.social.smStratagem} className="btn-ghost">
            SM Stratagem
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactExperience;
