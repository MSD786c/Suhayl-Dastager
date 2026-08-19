# Assets Needed — Suhayl Dastager Personal Site

The site is built and running. To get it from "great looking" to "production-grade and personalized," here's exactly what to send and where it goes.

Send to: <dastagersuhayl@gmail.com> (or just drop into the conversation here). For files, a Google Drive / Dropbox link is fine.

---

## 🎬 1. UGC Reels (10 videos) — **highest priority**

You mentioned you have ~10 high-view videos. This is what the showreel grid is built for.

For each video, send:

| Field | What to send | Example |
|---|---|---|
| `.mp4` file | The actual video | `voxxhire-teaser.mp4` |
| Title | One-line title | "VoxxHire — interview signal" |
| Category | Software / Automotive / AI / Consumer Tech / Founder Content / Brand Work | Software |
| Client | Whose product/service it was for | VoxxHire |
| Platform | TikTok / Instagram / YouTube Shorts / LinkedIn | Instagram |
| Original URL | Link to the actual post (so we can link to it) | https://instagram.com/p/... |
| Views | Total current view count | 1,200,000 |
| Posted at | YYYY-MM-DD | 2026-01-15 |
| Featured? | Should it be on the homepage? | yes |

### Where the files go
Drop each `.mp4` at:
```
public/ugc/{id}.mp4
```

Drop a poster (the cover frame, ideally 1080x1920px) at:
```
public/ugc/{id}.jpg
```

### Where the data goes
Edit `lib/data.ts` → `ugcReels` array. The shape is:

```ts
{
  id: "voxxhire-teaser",        // matches the file name
  title: "VoxxHire — interview signal",
  category: "Software",
  client: "VoxxHire",
  durationSec: 34,
  posterSrc: "/ugc/voxxhire-teaser.jpg",  // 1080x1920 cover frame
  videoSrc: "/ugc/voxxhire-teaser.mp4",   // 9:16 vertical, ≤ 50MB
  description: "60-second walkthrough of the recruiter dashboard.",
  platform: "Instagram",
  url: "https://instagram.com/p/...",      // original post link
  views: 1200000,
  postedAt: "2026-01-15",
  featured: true,
  tone: "light",
}
```

The showreel on `/` and `/ugc` will auto-render. Each card becomes a real `<video>` element with play/pause, mute/unmute, view count, and link-out to the original.

---

## 📸 2. More hero & editorial photos

The hero is using 7 of your 8 supplied photos. The about page and case studies can use more. If you can shoot or supply, here's what would make the biggest impact:

### Hero additions
- 2–3 more "in the workshop / building" shots (workspace, screens, code, whiteboards)
- 2 more "Dubai / automotive" shots (different cars, different lighting)
- 1–2 "speaking / presenting" shots (if you have any from panels or events)

### Project visuals
Each flagship project gets a hero image. Drop these at `public/project-pictures/` and update the `image` field in `lib/data.ts` → `projects`:

| Project | Ideal hero image |
|---|---|
| VoxxHire | App screenshot — recruiter dashboard, candidate interface |
| Document-Flow Automator | Screenshot — Zoho integration, the n8n workflow, GPT summary output |
| DPH Classifieds | App screenshot — listing page, car detail page |
| Workora | The current site (it's already linked — workora.ae) |
| Crypto Command Center | Screenshot — Streamlit dashboard with charts |
| MoneyMentor | App screenshot — chat with Gemini, budget dashboard |

The image should be ~1920x1080px, JPG or WebP, ≤ 200KB. Optimize at [tinypng.com](https://tinypng.com) or similar before sending.

---

## 🎨 3. Custom graphics for case-study pages

The case studies currently use project screenshots as the only visual. To make each case study feel like a real essay, I can generate:

- **Architecture diagrams** — generated from the actual stack (Next.js → Flask → PostgreSQL → LLMs)
- **Before/after dashboards** — the metric before vs. after
- **System flow illustrations** — for AI workflows especially

**Send me 1–2 sentence descriptions of what you'd want visualized per project** and I'll generate them. I can also just generate them as opinionated graphics if you prefer.

Examples:
- VoxxHire: "A simple diagram showing a candidate's voice → transcription → LLM scoring → recruiter dashboard, with a few key numbers (40% faster reviews, etc.)"
- Document-Flow Automator: "Three columns: Zoho intake → n8n + GPT-4 → Twilio summary. Show the time saved per doc."

---

## 🪪 4. VoxxHire data

For the VoxxHire case study to be a true flagship, I need:

- 1–2 dashboard screenshots (recruiter view, candidate view)
- 1 product photo / hero image
- Live URL (currently set to voxxhire.com — confirm this is the real domain or send the correct one)
- Number of users / companies on the platform (if safe to share)
- 1 short testimonial quote (recruiter, candidate, or hiring manager) — with permission

---

## 🌐 5. Site domain

In `lib/personal-brand.ts`, confirm:
```ts
site: {
  url: "https://suhayl-dastager.me",  // ← is this your real domain?
  ...
}
```

If you have a different one (e.g. `suhayl.com`, `dastager.io`), tell me. This affects canonical URLs, OG tags, sitemap, and the email `From` address.

---

## 📧 6. Zoho SMTP credentials

For the contact form to deliver real emails. Drop into `.env.local` (never commit):

```bash
ZOHO_SMTP_HOST=smtp.zoho.com
ZOHO_SMTP_PORT=465
ZOHO_SMTP_USER=your@zoho.com
ZOHO_SMTP_PASSWORD=your-app-password
CONTACT_TO_EMAIL=dastagersuhayl@gmail.com
```

App passwords: https://mail.zoho.com → Settings → Security → App Passwords.

Until these are set, the form still works in dev mode (it logs the payload and returns success). Once set, the form delivers to your inbox + sends a branded confirmation to the sender.

---

## ✅ What to send in priority order

1. **The 10 UGC videos** (mp4 + post URLs + view counts) — biggest impact
2. **1–2 project screenshots** (VoxxHire dashboard is the highest leverage)
3. **Zoho credentials** — so you can actually receive leads
4. **Confirm the site URL** — so SEO is correct
5. **More photos** — if you have any workshop / speaking shots, send them
6. **Custom graphics brief** — even a one-liner per project works

Everything else is a "nice to have" — the site is production-ready today without any of this. The items above turn it from production-ready to production-grade.
