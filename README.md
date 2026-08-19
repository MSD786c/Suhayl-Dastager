# Suhayl Dastager — Personal Website

A world-class personal-brand website that unifies Suhayl's three identities — **Creator** (UGC), **Builder** (Founder), **Shipper** (Hiring). Built with Next.js 16, TypeScript, Tailwind, and framer-motion.

> The design system is a synthesis of **SM Stratagem** (navy + electric blue + Geist family) and **VoxxHire** (indigo + coral + Plus Jakarta Sans). Together they form a single Suhayl system: warm cream surfaces, navy depth, electric-blue primary, coral warmth.

**→ For run, test, and deploy instructions, see [`docs/TESTING.md`](./docs/TESTING.md).**

## What's here

- **One coherent personal brand**, not three microsites
- 13 routes, 29 statically generated pages
- Six adaptive enquiry types with Zoho SMTP delivery
- Editorial display typography (Plus Jakarta Sans + Fraunces italic)
- Cursor-parallax hero photo collage (uses 7 supplied portraits)
- Three-Door pathway system that flex-grows on hover
- Dark founder timeline on navy, light capability grid, asymmetric project grid
- Per-page SEO, Person schema, sitemap, robots
- WCAG-friendly focus states, reduced-motion support, semantic HTML

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Quality gates

```bash
npm run typecheck   # 0 errors
npm run lint        # 0 errors, 0 warnings
npm run build       # 29 static pages, 0 errors
```

## Project status

- [x] Audit complete
- [x] New design system (tokens, fonts, base CSS)
- [x] All 13 routes built and returning 200
- [x] Contact form: validation, rate limit, honeypot, 6 enquiry types
- [x] SEO metadata + Person schema + sitemap + robots
- [x] Build, typecheck, lint all pass
- [x] TESTING.md written
- [x] Independent verifier audit passed
- [ ] **Add real UGC video files** to `public/ugc/` and update `components/ugc-section.tsx`
- [ ] **Set Zoho SMTP env vars** in deploy platform
- [ ] **Convert `og/suhayl-og.svg` → PNG** for max social-platform compatibility
- [ ] Deploy to Vercel (or your platform of choice)

---

© 2026 Suhayl Dastager · Built with Next.js + Tailwind + framer-motion
