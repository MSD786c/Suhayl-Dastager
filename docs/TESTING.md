# Testing Suhayl Dastager — Personal Website

How to run, test, and ship the site.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template (optional — site works without it in dev)
cp .env.example .env.local

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

The dev server uses Turbopack. It is ready in ~400ms after the first compile.

---

## What you can test

### Routes to walk through

| Route | What to check |
|---|---|
| `/` | Hero photo collage + 3 Doors + UGC + Founder + Selected Work + Hire + About strip + Contact |
| `/founder` | VoxxHire and SM Stratagem deep-dive + the founder timeline |
| `/ugc` | UGC page with 6 packages, 2 case studies, licensing section |
| `/work` | All 7 professional roles + 6 flagship projects |
| `/projects/voxxhire` | Dark case-study template (flagship) |
| `/projects/document-flow-automator` | Light case-study template |
| `/ugc/loop-media-creator-analytics` | UGC case-study template |
| `/about` | "Outside the laptop" photo essay |
| `/contact` | Adaptive form — pick each of the 6 types and see the fields change |
| `/resume` | Recruiter-friendly CV page |
| `/archive` | Older/smaller projects |
| `/sitemap.xml` | All 23 routes |
| `/robots.txt` | Should `Disallow: /api/` |

### Contact form (no Zoho required)

Without SMTP env vars, the form still works — the server logs the payload and returns `{ok: true, dev: true}`. The success state ("Message received.") renders.

To test the form end-to-end:

1. Go to `/contact`
2. Click any of the 6 enquiry type cards (Job / UGC / Automotive / Speaking / SM Stratagem / Other)
3. Fill in the form. Use a real email.
4. Click **Send message**
5. The form transforms into a "Message received" state with links to Instagram / LinkedIn / SM Stratagem
6. In the dev server log, you'll see the email subject and body printed

To trigger an error:
- Use `not-an-email` as the email → 400 "Please enter a valid email address."
- Leave a required field blank → 400 "Please complete the required fields."
- Submit 6 times within 10 minutes from the same IP → 429 "Too many requests."

To clear the rate limit during testing, restart the dev server (`Ctrl+C` and re-run `npm run dev`).

### SEO

- View source on `/` — you should see a `<title>` of `Suhayl Dastager — AI Product Engineer, Founder & Tech Creator`
- Meta description, OG tags, Twitter card meta, and the `application/ld+json` Person schema are all in the `<head>`
- `https://yourdomain.com/sitemap.xml` should list all 23 routes
- `https://yourdomain.com/robots.txt` should `Disallow: /api/`

### Performance

The site is built on Next.js 16 with Turbopack. Run a Lighthouse check from the browser's dev tools — target is 90+ on all four categories.

To test image optimization, open the homepage and check:
- Hero photos load with `loading="eager"` (priority)
- Below-the-fold photos load with `loading="lazy"`
- The Next/Image component serves modern WebP/AVIF when supported

### Accessibility

- Tab through the page — focus rings should be visible on every interactive element
- All images have descriptive `alt` text
- The hero respects `prefers-reduced-motion` (animations reduce to ~0ms)
- All buttons and links are real `<button>` / `<a>` elements
- Color contrast: navy on cream and cream on navy both clear WCAG AA

---

## Quality gates

```bash
npm run typecheck   # TypeScript: should be silent
npm run lint        # ESLint: should be silent (0 errors, 0 warnings)
npm run build       # Next.js production build: should compile 29 static pages
```

If any of these fail, the site is not ready to ship.

---

## Preview screenshots

```bash
npm run preview
# → saves 10 PNGs to docs/preview/
```

Requires the dev server to be running. Uses Puppeteer (already installed in `node_modules`). Scrolls the page first to trigger `whileInView` animations before each capture, so the screenshots show the real final state.

---

## Going to production

### 1. Set environment variables in your deploy platform

Required for the contact form to deliver real emails:

```
ZOHO_SMTP_HOST=smtp.zoho.com
ZOHO_SMTP_PORT=465
ZOHO_SMTP_USER=your-address@zoho.com
ZOHO_SMTP_PASSWORD=your-app-password
CONTACT_TO_EMAIL=you@yourdomain.com
```

Get a Zoho App Password at https://mail.zoho.com → Settings → Security → App Passwords. If you don't have 2FA enabled, use your regular Zoho password.

### 2. Verify your site URL

In `lib/personal-brand.ts`, confirm:
```ts
site: {
  url: "https://your-actual-domain.com",
  ...
}
```

This is used for canonical URLs, OG tags, sitemap, and the email `From` address.

### 3. Deploy to Vercel

```bash
# First time
npx vercel link
npx vercel env add ZOHO_SMTP_USER
npx vercel env add ZOHO_SMTP_PASSWORD
npx vercel env add CONTACT_TO_EMAIL
npx vercel --prod
```

The site is configured for Vercel out of the box. Other platforms (Netlify, Cloudflare Pages) work too — the only server requirement is Node.js for the `/api/contact` route.

### 4. Test the contact form in production

After deploy:
1. Submit a test enquiry
2. Check your Zoho inbox — you should receive a branded HTML email
3. Check the sender's inbox — they should receive a confirmation
4. Check spam if it doesn't arrive — make sure your Zoho account is verified

---

## Customization guide

### Add a new project

Edit `lib/data.ts` and add to the `projects` array:

```ts
{
  slug: "my-new-project",
  name: "My New Project",
  description: "One-sentence pitch.",
  longDescription: "Two-sentence story.",
  category: "AI & Automation",
  year: "2026",
  role: "Builder",
  problem: "What's broken?",
  architecture: "How does it work?",
  decisions: ["Key decision 1", "Key decision 2"],
  stack: ["Next.js", "TypeScript"],
  outcome: "What shipped?",
  learning: "What did you learn?",
  next: "Where does it go?",
  tech: ["Next.js", "TypeScript"],
  impact: "Headline metric",
  image: "/project-pictures/my-project.png",
  repo: "https://github.com/...",
  url: "https://myproject.com",
  flagship: true,         // shows on /work; false → goes to /archive
  tone: "light",          // or "dark" for dark surface
}
```

Then add an image to `public/project-pictures/`. A new case study page auto-generates at `/projects/my-new-project`.

### Add a new UGC case study

Edit `lib/data.ts` and add to `ugcCaseStudies`:

```ts
{
  slug: "client-name-campaign",
  client: "Client Name",
  industry: "Industry",
  year: "2026",
  role: "Creator + Strategist",
  brief: "One sentence.",
  concept: "Two sentences on the angle.",
  deliverables: ["Reel 1", "Reel 2", "Carousel"],
  results: ["1M views", "+25% CTR"],
  usage: "Organic + paid",
  testimonial: "Optional quote",
}
```

### Add a new reel to the UGC showreel

Edit `components/ugc-section.tsx` and add to `featuredReels`. Drop the `.mp4` into `public/ugc/` and reference it via a `videoSrc` field (wire the `<video>` element in the ReelCard).

### Add a new UGC package

Edit `lib/data.ts` and append to `ugcPackages`. The card and form already support any number of packages.

### Swap the hero photos

Replace the files in `public/portrait/` with your own. Keep the same filenames or update the paths in `lib/personal-brand.ts` under `files.portraits`.

---

## File map

```
app/
  page.tsx                     # Homepage (composes all sections)
  layout.tsx                   # Fonts, metadata, Person schema
  globals.css                  # Design system
  sitemap.ts                   # Auto-generated sitemap
  robots.ts                    # Auto-generated robots
  api/contact/route.ts         # Contact form backend (Zoho SMTP)
  founder/page.tsx             # /founder
  ugc/page.tsx                 # /ugc
  work/page.tsx                # /work
  about/page.tsx               # /about
  contact/page.tsx             # /contact
  resume/page.tsx              # /resume
  archive/page.tsx             # /archive
  projects/[slug]/page.tsx     # Dynamic case study
  ugc/[slug]/page.tsx          # Dynamic UGC case study

components/
  navigation.tsx               # Sticky nav, compact on scroll
  hero.tsx                     # The signature moment
  three-doors.tsx              # The 3 interactive panels
  ugc-section.tsx              # UGC showreel + packages + licensing
  founder-section.tsx          # Founder cards + timeline
  selected-work.tsx            # 6 flagship projects grid
  hire-section.tsx             # Why-hire + career arc + capabilities
  about-strip.tsx              # "Outside the laptop" photo essay
  contact-experience.tsx       # Adaptive contact form
  footer.tsx                   # "Suhayl builds." footer
  founder-deepdive.tsx         # /founder page detail
  ugc-detail.tsx               # /ugc page detail
  work-page.tsx                # /work page detail
  about-page.tsx               # /about page detail
  archive-page.tsx             # /archive page detail
  ui/                          # Shadcn primitives (button, card, badge)

lib/
  personal-brand.ts            # Identity, founder timeline, skills, copy
  data.ts                      # Experiences, projects, UGC, packages
  utils.ts                     # cn() helper

public/
  portrait/                    # The 8 supplied photos
  project-pictures/            # Project screenshots
  Suhayl_Dastager_Resume.pdf   # Downloadable CV
  favicon.svg                  # Favicon
  og/suhayl-og.svg             # OG card (consider converting to PNG)

docs/
  TESTING.md                   # This file
  preview/                     # Generated screenshots (gitignored)
```

---

## Common issues

**"The dev server won't start"** — check that port 3000 isn't in use. Try `PORT=3001 npm run dev`.

**"The form returns a 429"** — you've hit the 10-minute rate limit. Restart the dev server to reset.

**"The dark VoxxHire case study has invisible text"** — fixed in the latest build. Make sure you pull all the changes.

**"Photos in the hero don't move"** — cursor parallax is desktop-only and respects `prefers-reduced-motion`. Mobile gets a static curated strip instead.

**"Sections look blank when I screenshot"** — fixed. Content is now visible by default and animates in as a slide-up. `npm run preview` to capture fresh screenshots that scroll the page first.
