// Suhayl Dastager — Content data layer.
// Single source of truth for experiences, projects, UGC work, and packages.

import { suhayl } from "./personal-brand";

export { suhayl };

// ─────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────

export const experiences = [
  {
    company: "Loop Media",
    role: "Content Management Specialist (Freelance)",
    duration: "Jan 2025 – Oct 2025",
    location: "Dubai, UAE",
    tag: "Creator + Analytics",
    summary:
      "Combined creative direction with data engineering to ship short-form content that the algorithm actually rewarded.",
    bullets: [
      "Engineered trend-detection pipelines and analytics dashboards to identify viral opportunities within 24 hours — driving 7 videos >1M views and a 60% share-rate increase across TikTok & Instagram.",
      "Improved average video view rate by 50% via data-driven pacing, hook, and posting-window optimization — outperforming platform benchmarks by 2.3×.",
      "Increased combined follower base by 30% in 90 days through automated calendar scheduling and engagement analysis (Python · Google Analytics · Tableau).",
    ],
    metrics: ["7 videos >1M views", "50% view-rate lift", "30% follower growth", "60% share-rate increase"],
    color: "coral",
  },
  {
    company: "Halliday Forfaiting Services",
    role: "Data Automation Lead",
    duration: "Mar 2025 – Sep 2025",
    location: "Dubai, UAE",
    tag: "AI · Automation",
    summary:
      "Led the build of AI-native onboarding and reporting systems that became the daily backbone of ops.",
    bullets: [
      "Automated Zoho–Twilio workflows using n8n + Flask, cutting manual reporting time by 35%.",
      "Built Document-Flow Automator, an AI onboarding system (Flask · Gemini · GPT-4) for document validation & summary generation — 40% faster reviews and zero QA backlog.",
      "Unified financial data across departments with REST APIs + PostgreSQL, improving reporting latency and cross-team accuracy by 25%.",
    ],
    metrics: ["35% faster reporting", "40% quicker reviews", "25% reporting accuracy"],
    color: "electric",
  },
  {
    company: "Halliday Forfaiting Services",
    role: "Data Collection Officer",
    duration: "Oct 2024 – Jun 2025",
    location: "Dubai, UAE",
    tag: "Data Operations",
    summary:
      "Owned data acquisition, verification, and reporting pipelines for the financial operations team.",
    bullets: [
      "Built and maintained data acquisition and verification workflows across surveys, interviews, online databases, and internal systems.",
      "Generated detailed reporting outputs that informed strategy and operations across the wider org.",
      "Coordinated with project managers and stakeholders to scope data requirements and deliver against tight timelines.",
    ],
    metrics: ["9 months · daily ops", "Cross-team reliability"],
    color: "indigo",
  },
  {
    company: "RelphaCare Technologies",
    role: "Marketing Intern",
    duration: "Jul 2024 – Sep 2024",
    location: "Dubai, UAE",
    tag: "Growth Experiments",
    summary:
      "Ran A/B tests and built dashboards that shortened reporting cycles and improved targeting.",
    bullets: [
      "Designed A/B tests across digital campaigns to optimize spend — 12% CPA reduction and 20% lift in impressions.",
      "Automated weekly funnel & performance dashboards (Excel), shortening reporting cycles from 2 days → 2 hours.",
      "Partnered with marketing and product teams to translate data into actionable recommendations that improved audience targeting.",
    ],
    metrics: ["12% CPA reduction", "20% impressions lift", "2 days → 2 hours reporting"],
    color: "electric",
  },
  {
    company: "Chicking Global",
    role: "Digital Marketing Specialist",
    duration: "Dec 2022 – Jun 2023",
    location: "Dubai, UAE",
    tag: "Content & GTM",
    summary:
      "The start of the creative muscle. Reels, TikToks, community, and analytics that turned attention into engagement.",
    bullets: [
      "Increased overall audience engagement by 40% through consistent content calendars, interactive posts, and real-time community engagement (comments + DMs).",
      "Produced high-impact Reels and TikToks using CapCut / Premiere Pro, boosting brand awareness and repeat impressions across UAE-based audiences.",
      "Executed targeted advertising campaigns and influencer partnerships that drove a measurable lift in reach and conversion (CTR +18%).",
    ],
    metrics: ["40% engagement lift", "CTR +18%", "CapCut · Premiere Pro"],
    color: "coral",
  },
  {
    company: "The Tutoring Center",
    role: "System Specialist",
    duration: "Jan 2020 – Apr 2020",
    location: "Dubai, UAE",
    tag: "IT · Ops",
    summary:
      "Early IT systems exposure — documentation, reliability, and the discipline of process clarity.",
    bullets: [
      "Supported rollout & documentation of IT system configurations, enhancing reliability and process clarity.",
      "Maintained databases and internal systems, resolving technical issues and ensuring smooth daily operations.",
    ],
    metrics: ["Process documentation", "Daily ops reliability"],
    color: "indigo",
  },
  {
    company: "SAP",
    role: "IT Summer Intern",
    duration: "Jun 2019 – Aug 2019",
    location: "Dubai, UAE",
    tag: "Enterprise IT",
    summary:
      "First exposure to enterprise software — virtualization, configuration, secure data management.",
    bullets: [
      "Assisted IT teams with system configuration, virtualization setup, and user support, improving infrastructure uptime and efficiency.",
      "Gained early exposure to enterprise software environments and secure data management workflows.",
    ],
    metrics: ["3-month enterprise immersion"],
    color: "indigo",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// FOUNDER COMPANIES
// ─────────────────────────────────────────────────────────────────

export const founderCompanies = [
  {
    id: "voxxhire",
    name: "VoxxHire",
    url: suhayl.social.voxxhire,
    year: "2024 – Present",
    role: "Co-founder · Product & Engineering",
    summary:
      "An AI interview platform helping graduates land roles and giving recruiters enterprise-grade signal.",
    body: [
      "We saw the same problem repeatedly: brilliant graduates going unnoticed while recruiters drown in resumes. VoxxHire turns both sides of that equation into a structured, AI-mediated conversation.",
      "My work spanned product architecture, AI workflows (LLM scoring, voice-to-text analysis, structured rubrics), the candidate-side experience, and the recruiter dashboard that surfaces enterprise-grade signal.",
    ],
    tech: ["Next.js", "TypeScript", "Flask", "PostgreSQL", "LLMs", "Voice AI"],
    metric: "AI interview platform · live in beta",
  },
  {
    id: "sm-stratagem",
    name: "SM Stratagem",
    url: suhayl.social.smStratagem,
    year: "2025 – Present",
    role: "Founder",
    summary:
      "A Dubai digital product studio. AI that ships, software that scales.",
    body: [
      "SM Stratagem is the studio that houses VoxxHire and takes on selected client work in AI, custom software, and product builds.",
      "The studio is built on the same principle as the personal brand: outcomes over output, systems over silos.",
    ],
    tech: ["AI product engineering", "Custom software", "Web & apps"],
    metric: "Studio · Dubai · UAE",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// UGC PACKAGES
// ─────────────────────────────────────────────────────────────────

export const ugcPackages = [
  {
    id: "starter",
    name: "UGC Starter",
    best: "A single, organic-ready short-form video to get a brand live",
    deliverables: [
      "1 short-form video",
      "Concept + script",
      "Filming + editing",
      "Captions",
      "1 revision",
      "Organic social usage",
    ],
    cta: "Request Quote",
  },
  {
    id: "performance",
    name: "UGC Performance",
    best: "Paid ad creative engineered for CTR with hook and CTA variants",
    deliverables: [
      "1 ad-focused video",
      "3 hook variations",
      "2 CTA variations",
      "Performance-style editing",
      "Captions",
      "2 revisions",
      "Ad-ready exports",
    ],
    cta: "Request Quote",
  },
  {
    id: "sprint",
    name: "Content Sprint",
    best: "A coordinated batch of three distinct short-form videos",
    deliverables: [
      "3 short-form videos",
      "3 different concepts",
      "Scripting",
      "Filming + editing",
      "Captions",
      "1 revision per video",
      "Batch delivery",
    ],
    cta: "Plan a Sprint",
  },
  {
    id: "retainer",
    name: "Monthly Creator",
    best: "Recurring monthly production for brands that ship weekly",
    deliverables: [
      "6 short-form videos per month",
      "Monthly content planning",
      "Multiple concepts and hooks",
      "Filming + editing",
      "Captions",
      "Batch delivery",
      "Ongoing creative support",
    ],
    cta: "Discuss Retainer",
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// UGC REELS — data-driven; ready for the 10 social videos.
// To add a new video: append to this array, drop the .mp4 at
// public/ugc/{id}.mp4, and place a poster at public/ugc/{id}.jpg
// ─────────────────────────────────────────────────────────────────

export type UgcReel = {
  id: string;
  title: string;
  category:
    | "Software"
    | "Automotive"
    | "AI"
    | "Consumer Tech"
    | "Founder Content"
    | "Brand Work";
  client: string;
  brandCategory: "Home" | "Automotive" | "Perfumes" | "Software";
  durationSec: number;
  posterSrc: string;
  imageSrc?: string; // 16:9 wide visual for featured/cards
  videoSrc: string;
  description: string;
  platform: "TikTok" | "Instagram" | "YouTube Shorts" | "LinkedIn";
  url: string;
  views: number;
  postedAt: string; // YYYY-MM-DD
  featured: boolean;
  tone: "dark" | "light";
};

// Brand visuals — campaign-style images generated for each brand. They
// double as poster images for the video embeds and as standalone cards
// in the brand strip.
export const brandVisuals: Record<string, { card: string; wide: string }> = {
  Parfumix: {
    card: "/ugc/visual-parfumix.jpg",
    wide: "/ugc/visual-parfumix-wide.jpg",
  },
  "Al Amoudi Auto Spare Parts": {
    card: "/ugc/visual-alamoudi.jpg",
    wide: "/ugc/visual-alamoudi-wide.jpg",
  },
  "Milano Italy SRL": {
    card: "/ugc/visual-milano.jpg",
    wide: "/ugc/visual-milano-wide.jpg",
  },
  Wrapsters: {
    card: "/ugc/visual-wrapsters.jpg",
    wide: "/ugc/visual-wrapsters-wide.jpg",
  },
  VoxxHire: {
    card: "/ugc/visual-voxxhire.jpg",
    wide: "/ugc/visual-voxxhire-wide.jpg",
  },
};

// Note: All current entries use brand visuals (campaign imagery) as the
// poster. The card itself embeds the live TikTok/Instagram iframe, so the
// user sees the actual brand video without a click.
export const ugcReels: UgcReel[] = [
  {
    id: "perfume-brand-3-3m",
    title: "Parfumix hero — 3.3M view piece",
    category: "Brand Work",
    client: "Parfumix",
    brandCategory: "Perfumes",
    durationSec: 28,
    posterSrc: "/ugc/visual-parfumix.jpg",
    imageSrc: "/ugc/visual-parfumix-wide.jpg",
    videoSrc: "/ugc/parfumix-3-3m.mp4",
    description:
      "Hero performance piece for Parfumix. Hooked the algorithm, held the frame, closed with intent — the flagship brand video of the showreel.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@parfumixofficial/video/7434949332173884680",
    views: 3_300_000,
    postedAt: "2025-09-15",
    featured: true,
    tone: "dark",
  },
  {
    id: "al-amoudi-14-1k",
    title: "Al Amoudi Spare Parts — 14.1K views",
    category: "Automotive",
    client: "Al Amoudi Auto Spare Parts",
    brandCategory: "Automotive",
    durationSec: 34,
    posterSrc: brandVisuals["Al Amoudi Auto Spare Parts"].card,
    imageSrc: brandVisuals["Al Amoudi Auto Spare Parts"].wide,
    videoSrc: "/ugc/alamoudi-14-1k.mp4",
    description:
      "Auto spare parts brand work for Al Amoudi. A-roll, parts B-roll, and a hook that pulled above the channel baseline.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@al.amoudi.spare.parts/video/7468691796558679314",
    views: 14_100,
    postedAt: "2025-10-18",
    featured: true,
    tone: "light",
  },
  {
    id: "al-amoudi-10-5k",
    title: "Al Amoudi Spare Parts — 10.5K views",
    category: "Automotive",
    client: "Al Amoudi Auto Spare Parts",
    brandCategory: "Automotive",
    durationSec: 32,
    posterSrc: brandVisuals["Al Amoudi Auto Spare Parts"].card,
    imageSrc: brandVisuals["Al Amoudi Auto Spare Parts"].wide,
    videoSrc: "/ugc/alamoudi-10-5k.mp4",
    description:
      "Second Al Amoudi piece — detail shots of inventory + A-roll, cut for the parts-shop audience in the UAE.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@al.amoudi.spare.parts/video/7487658719782669575",
    views: 10_500,
    postedAt: "2025-10-25",
    featured: true,
    tone: "light",
  },
  {
    id: "parfumix-21-5k",
    title: "Parfumix — 21.5K views",
    category: "Brand Work",
    client: "Parfumix",
    brandCategory: "Perfumes",
    durationSec: 24,
    posterSrc: brandVisuals.Parfumix.card,
    imageSrc: brandVisuals.Parfumix.wide,
    videoSrc: "/ugc/parfumix-21-5k.mp4",
    description:
      "Second Parfumix piece — product-led with a fragrance-note hook. Clean CTA at the close.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@parfumixofficial/video/7497638622372400402",
    views: 21_500,
    postedAt: "2025-08-22",
    featured: true,
    tone: "dark",
  },
  {
    id: "wrapsters-15-2k",
    title: "Wrapsters edit — 15.2K views",
    category: "Automotive",
    client: "Wrapsters",
    brandCategory: "Automotive",
    durationSec: 38,
    posterSrc: brandVisuals.Wrapsters.card,
    imageSrc: brandVisuals.Wrapsters.wide,
    videoSrc: "/ugc/wrapsters-15-2k.mp4",
    description:
      "Wrapsters (UAE vehicle wrap studio) edit. Cinematic B-roll of a freshly wrapped SUV with founder-led hook.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@wrapsters.ae/video/7464148645886168327",
    views: 15_200,
    postedAt: "2025-11-12",
    featured: true,
    tone: "light",
  },
  {
    id: "voxxhire-ugc-7k",
    title: "VoxxHire UGC — 7K views",
    category: "Software",
    client: "VoxxHire",
    brandCategory: "Software",
    durationSec: 28,
    posterSrc: brandVisuals.VoxxHire.card,
    imageSrc: brandVisuals.VoxxHire.wide,
    videoSrc: "/ugc/voxxhire-7k.mp4",
    description:
      "VoxxHire UGC — founder-led walkthrough of the recruiter dashboard, hook on enterprise signal.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DbqRz2yNBWE/?hl=en",
    views: 7_000,
    postedAt: "2026-01-15",
    featured: true,
    tone: "light",
  },
  {
    id: "parfumix-7-5k",
    title: "Parfumix — 7.5K views",
    category: "Brand Work",
    client: "Parfumix",
    brandCategory: "Perfumes",
    durationSec: 32,
    posterSrc: brandVisuals.Parfumix.card,
    imageSrc: brandVisuals.Parfumix.wide,
    videoSrc: "/ugc/parfumix-7-5k.mp4",
    description:
      "Third Parfumix piece — scent-of-the-day carousel cut into a vertical short.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@parfumixofficial/video/7505074578704682247",
    views: 7_500,
    postedAt: "2025-10-04",
    featured: true,
    tone: "light",
  },
  {
    id: "milano-8-2k",
    title: "Milano Italy — 8.2K views",
    category: "Brand Work",
    client: "Milano Italy SRL",
    brandCategory: "Home",
    durationSec: 30,
    posterSrc: brandVisuals["Milano Italy SRL"].card,
    imageSrc: brandVisuals["Milano Italy SRL"].wide,
    videoSrc: "/ugc/milano-8-2k.mp4",
    description:
      "Milano Italy SRL — wholesale supplier content. A-roll + product showcase for the UAE distributor audience.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@milanoitalysrl/video/7529861645598756103",
    views: 8_272,
    postedAt: "2025-11-04",
    featured: true,
    tone: "light",
  },
  {
    id: "milano-7-5k",
    title: "Milano Italy — 7.5K views",
    category: "Brand Work",
    client: "Milano Italy SRL",
    brandCategory: "Home",
    durationSec: 28,
    posterSrc: brandVisuals["Milano Italy SRL"].card,
    imageSrc: brandVisuals["Milano Italy SRL"].wide,
    videoSrc: "/ugc/milano-7-5k.mp4",
    description:
      "Second Milano piece — fleet B-roll with founder-led hook on wholesale availability.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@milanoitalysrl/video/7519937261069176082",
    views: 7_523,
    postedAt: "2025-10-20",
    featured: true,
    tone: "light",
  },
  {
    id: "voxxhire-ugc-2-2k",
    title: "VoxxHire UGC — 2.2K views",
    category: "Software",
    client: "VoxxHire",
    brandCategory: "Software",
    durationSec: 25,
    posterSrc: brandVisuals.VoxxHire.card,
    imageSrc: brandVisuals.VoxxHire.wide,
    videoSrc: "/ugc/voxxhire-2-2k.mp4",
    description:
      "Second VoxxHire UGC reel — graduate-side POV, hook on the interview format.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DcBurxkxoml/?hl=en",
    views: 2_200,
    postedAt: "2026-02-01",
    featured: true,
    tone: "light",
  },
  {
    id: "wrapsters-3-3k",
    title: "Wrapsters — 3.3K views",
    category: "Automotive",
    client: "Wrapsters",
    brandCategory: "Automotive",
    durationSec: 30,
    posterSrc: brandVisuals.Wrapsters.card,
    imageSrc: brandVisuals.Wrapsters.wide,
    videoSrc: "/ugc/wrapsters-3-3k.mp4",
    description:
      "Second Wrapsters piece — wrap process B-roll with a fast-cut hook on colour-shift reveal.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@wrapsters.ae/video/7510603170440088840",
    views: 3_363,
    postedAt: "2025-12-05",
    featured: true,
    tone: "light",
  },
  {
    id: "milano-2-3k",
    title: "Milano Italy — 2.3K views",
    category: "Brand Work",
    client: "Milano Italy SRL",
    brandCategory: "Home",
    durationSec: 26,
    posterSrc: brandVisuals["Milano Italy SRL"].card,
    imageSrc: brandVisuals["Milano Italy SRL"].wide,
    videoSrc: "/ugc/milano-2-3k.mp4",
    description:
      "Third Milano piece — product detail shots with overlay copy on stock and shipping.",
    platform: "TikTok",
    url: "https://www.tiktok.com/@milanoitalysrl/video/7465320234841345298",
    views: 2_357,
    postedAt: "2025-09-02",
    featured: true,
    tone: "light",
  },
];

export const ugcReelCategories = [
  "All",
  "Software",
  "Automotive",
  "AI",
  "Consumer Tech",
  "Founder Content",
  "Brand Work",
] as const;

// ─────────────────────────────────────────────────────────────────
// UGC CASE STUDIES — use manual data; add new entries here.
// ─────────────────────────────────────────────────────────────────

export const ugcCaseStudies = [
  {
    slug: "loop-media-creator-analytics",
    client: "Loop Media",
    industry: "Creator-Led Media",
    year: "2025",
    role: "Content Management Specialist (Freelance)",
    brief: "Engineer content that the algorithm and audience reward — at scale, weekly.",
    concept:
      "Treat every short-form video like a small product: hook, pacing, posting window, and analytics loop.",
    deliverables: [
      "Trend-detection pipelines (Python · GA · Tableau)",
      "Cohort trackers and creative testing dashboards",
      "Weekly data stories that informed hooks and pacing",
      "Calendar automation for posting windows",
    ],
    results: [
      "7 videos >1M views",
      "50% view-rate lift vs. baseline",
      "30% follower base growth in 90 days",
      "60% share-rate increase",
    ],
    usage: "Organic + paid",
    testimonial: undefined as string | undefined,
  },
  {
    slug: "chicking-brand-launch",
    client: "Chicking Global",
    industry: "QSR · Franchise",
    year: "2023",
    role: "Digital Marketing Specialist",
    brief: "Grow UAE brand awareness and engagement with limited paid spend.",
    concept:
      "Authentic, fast-turnaround Reels and TikToks that put the food and the customer at the center.",
    deliverables: [
      "Reels + TikToks (CapCut · Premiere Pro)",
      "Targeted ad campaigns and influencer partnerships",
      "Weekly analytics reviews in Excel",
      "Cross-team creative coordination",
    ],
    results: [
      "40% engagement lift",
      "CTR +18%",
      "Repeat impressions across UAE",
    ],
    usage: "Organic + paid",
    testimonial: undefined as string | undefined,
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// FOUNDER / PROJECTS — flagship + archive split.
// ─────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category:
    | "AI & Automation"
    | "Product & Platforms"
    | "Analytics & BI"
    | "Founder";
  year: string;
  role: string;
  problem: string;
  architecture: string;
  decisions: string[];
  stack: string[];
  outcome: string;
  learning: string;
  next: string;
  tech: string[];
  impact: string;
  image?: string;
  url?: string;
  repo?: string;
  flagship: boolean;
  tone: "dark" | "light";
};

export const projects: Project[] = [
  {
    slug: "voxxhire",
    name: "VoxxHire",
    description:
      "AI interview platform that helps graduates land roles and gives recruiters enterprise-grade signal.",
    longDescription:
      "VoxxHire turns the broken graduate-hire funnel into a structured, AI-mediated conversation — voice-to-text, structured rubrics, and a recruiter dashboard that surfaces real signal instead of resume noise.",
    category: "Founder",
    year: "2024 – Present",
    role: "Co-founder · Product & Engineering",
    problem:
      "Brilliant graduates go unnoticed while recruiters drown in resumes. Both sides waste time on signal-free processes.",
    architecture:
      "Next.js frontend · Flask API · PostgreSQL · LLM evaluation pipeline · voice transcription · structured rubric engine · recruiter analytics dashboard.",
    decisions: [
      "AI scoring with a transparent rubric — every score is auditable.",
      "Voice-first candidate experience to capture how someone actually thinks.",
      "Recruiter dashboard that ranks by structured signal, not self-reported claims.",
    ],
    stack: ["Next.js", "TypeScript", "Flask", "PostgreSQL", "LLMs", "Voice AI"],
    outcome:
      "Live beta with graduates and recruiters in active feedback loops.",
    learning:
      "The hardest part of AI products is trust — every model output needs to be explainable to a non-technical stakeholder.",
    next: "Pilot programmes with UAE universities and enterprise recruiters.",
    tech: ["Next.js", "TypeScript", "Flask", "PostgreSQL", "LLMs"],
    impact: "Live beta · structured interview AI · UAE market",
    image: undefined,
    url: suhayl.social.voxxhire,
    flagship: true,
    tone: "dark",
  },
  {
    slug: "document-flow-automator",
    name: "Document-Flow Automator",
    description:
      "AI onboarding platform for financial ops — document validation and summary generation.",
    longDescription:
      "Built for Halliday Forfaiting Services to turn a manual, multi-team onboarding workflow into a self-serve, AI-validated system.",
    category: "AI & Automation",
    year: "2025",
    role: "Builder (internal)",
    problem:
      "Multi-team document onboarding was a manual bottleneck — slow reviews, no QA backlog visibility, and inconsistent handoffs.",
    architecture:
      "Flask backend · n8n orchestration · GPT-4 + Gemini for validation and summary · Zoho + Twilio integration · PostgreSQL audit log.",
    decisions: [
      "Pair LLM summarization with rule-based validation so the system never blindly trusts an AI output.",
      "Build the audit log first — compliance was a hard requirement, not an afterthought.",
      "Make the human handoff explicit instead of hiding it behind the AI.",
    ],
    stack: ["Flask", "Python", "n8n", "GPT-4", "Gemini", "PostgreSQL", "Twilio", "Zoho"],
    outcome:
      "40% faster reviews · zero QA backlog · 35% less manual reporting time.",
    learning:
      "AI workflows land or die based on the seams between model and human — get the seams right first.",
    next: "Template the system for adjacent onboarding flows.",
    tech: ["Flask", "GPT-4", "Gemini", "n8n", "Zoho"],
    impact: "40% faster reviews · 35% less manual reporting",
    flagship: true,
    tone: "light",
  },
  {
    slug: "dph-classifieds",
    name: "DPH Classifieds",
    description:
      "UAE car marketplace with behavioural analytics and smarter ad targeting.",
    longDescription:
      "A full-stack UAE car marketplace with dynamic search, automated data sync, and dashboards that monitor funnels, ad performance, and user behaviour in real time.",
    category: "Product & Platforms",
    year: "2025",
    role: "Full-stack engineer",
    problem:
      "Generic car marketplaces lose both buyers and sellers in the conversion funnel. Behavioural data is the unlock.",
    architecture:
      "React frontend · Flask API · Supabase auth + DB · Vercel · Railway · analytics event pipeline.",
    decisions: [
      "Behavioural analytics as a first-class product surface — not a marketing add-on.",
      "Smarter ad targeting tied to behavioural cohorts, not demographics.",
      "Lightweight listing flow tuned for UAE mobile usage patterns.",
    ],
    stack: ["React", "Flask", "Python", "Supabase", "Vercel", "Railway"],
    outcome: "16% lift in inquiry conversion rate via behavioural optimization.",
    learning:
      "In marketplaces, the data layer IS the product. The UI is the surface that exposes it.",
    next: "Expand cohort-based ad products and seller analytics.",
    tech: ["React", "Flask", "Supabase", "Python"],
    impact: "16% lift in inquiry conversion",
    image: "/project-pictures/DPH-Classifieds.png",
    flagship: true,
    tone: "light",
  },
  {
    slug: "workora",
    name: "Workora",
    description:
      "Mobile-first manpower services site with bold hero and lead-capture.",
    longDescription:
      "Built a mobile-first React site with bold hero messaging, industry service tiles, contact + newsletter capture, and live deployment at workora.ae to validate manpower demand.",
    category: "Product & Platforms",
    year: "2025",
    role: "Builder",
    problem:
      "Manpower services needed a credible digital presence to capture inbound interest quickly.",
    architecture:
      "React · TypeScript · Tailwind · Vercel.",
    decisions: [
      "Mobile-first by default — the audience is on phones.",
      "Lead capture first, design polish second.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Vercel"],
    outcome: "Production-ready site at workora.ae.",
    learning:
      "Speed of shipping matters more than feature completeness for a validation phase.",
    next: "Expand into a full booking flow.",
    tech: ["React", "TypeScript", "Tailwind"],
    impact: "Live at workora.ae · lead-capture ready",
    image: "/project-pictures/Workora.png",
    url: "https://www.workora.ae",
    flagship: true,
    tone: "light",
  },
  {
    slug: "crypto-market-command-center",
    name: "Crypto Market Health & Sentiment Command Center",
    description:
      "Concurrent ETL pipeline, ACL-grade audit layer, and Streamlit dashboard.",
    longDescription:
      "Full crypto intelligence workspace combining a concurrent ETL pipeline, ACL-grade audit layer, and Streamlit dashboard so risk and trading teams can see how volatility, liquidity, and sentiment shape investor confidence in real time.",
    category: "Analytics & BI",
    year: "2025",
    role: "Builder",
    problem:
      "Trading and risk teams had no single control room for market health, momentum, and audit alerts.",
    architecture:
      "Python · Streamlit · SQLite · yfinance · Alt.me API · concurrent ETL · data quality checks.",
    decisions: [
      "Concurrent ETL from the start — sequential jobs would have died under load.",
      "ACL-grade audit layer because regulated stakeholders would eventually ask.",
      "Streamlit for the dashboard because the data scientists owned the iteration loop.",
    ],
    stack: ["Python", "Streamlit", "SQLite", "yfinance", "Alt.me API"],
    outcome:
      "Single control room for market health, momentum, and audit alerts.",
    learning:
      "Data quality is a product surface, not a checklist.",
    next: "Multi-asset support and an event-stream upgrade.",
    tech: ["Python", "Streamlit", "ETL"],
    impact: "Single control room · audit-ready",
    image: "/project-pictures/Crypto-ETL.png",
    repo: "https://github.com/MSD786c/Crypto-Analysis-Dashboard",
    flagship: true,
    tone: "dark",
  },
  {
    slug: "moneymentor",
    name: "MoneyMentor",
    description:
      "Cross-platform Flutter + Flask finance app with AI literacy and forecasting.",
    longDescription:
      "Cross-platform Flutter + Flask personal finance app combining budgeting, AI literacy content, Gemini 1.5 RAG chat, and TensorFlow/Prophet forecasting with GDPR-compliant Firebase storage.",
    category: "AI & Automation",
    year: "2025",
    role: "Builder",
    problem:
      "Most personal finance apps are dumb spreadsheets. Users want guidance, not just tracking.",
    architecture:
      "Flutter · Flask · Firebase · TensorFlow · Prophet · Gemini 1.5 RAG.",
    decisions: [
      "RAG over generic LLM so guidance is grounded in personal data.",
      "GDPR compliance baked in from day one, not patched on later.",
    ],
    stack: ["Flutter", "Flask", "Firebase", "TensorFlow", "Prophet", "Gemini 1.5"],
    outcome: "87%+ prediction accuracy on budgeting signals.",
    learning:
      "Personal AI only works when it explains itself. Black-box advice is rejected by users.",
    next: "Coaching loops and shared household budgets.",
    tech: ["Flutter", "Flask", "Gemini 1.5", "TensorFlow"],
    impact: "87%+ prediction accuracy",
    image: "/project-pictures/MoneyMentor.png",
    repo: "https://github.com/MSD786c/MoneyMentor",
    flagship: true,
    tone: "light",
  },
  {
    slug: "reliyant-consulting",
    name: "Reliyant Consulting Website",
    description:
      "Modern consulting site with services grid and SEO-ready architecture.",
    longDescription:
      "Modern consulting site with glassmorphism hero, services grid, industries marquee, dark mode, SEO, and deploy-ready Next.js architecture tailored for a strategy and operations firm.",
    category: "Product & Platforms",
    year: "2025",
    role: "Builder",
    problem: "Strategy firm needed a credible digital presence to win mid-market leads.",
    architecture: "Next.js 14 · TypeScript · Tailwind · Framer Motion · Lucide · Vercel.",
    decisions: [
      "Production-grade patterns over novel interaction — credibility matters more than novelty.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    outcome: "Shipped a production-grade digital presence with lead-ready CTAs.",
    learning: "B2B sites win on trust, not delight.",
    next: "Add case-study CMS.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    impact: "Production deploy · lead-ready",
    image: "/project-pictures/reliyant.png",
    url: "https://reliyant.vercel.app/",
    repo: "https://github.com/MSD786c/Reliyant",
    flagship: false,
    tone: "light",
  },
  {
    slug: "olist-ecom-analytics",
    name: "Olist E-Commerce Analytics Dashboard",
    description:
      "Interactive Tableau dashboards for 100K+ Olist orders after Python data prep.",
    longDescription:
      "Designed interactive Tableau dashboards for 100K+ Olist orders (2016–2018) after cleaning/modeling data in Python to surface GMV, AOV, delivery SLAs, payment mix, and review trends.",
    category: "Analytics & BI",
    year: "2025",
    role: "Builder",
    problem: "Exec stakeholders lacked a single source of truth for sales, delivery, and payment.",
    architecture: "Python · Pandas · Google Colab · Tableau.",
    decisions: ["Clean first, visualize second."],
    stack: ["Python", "Pandas", "Tableau"],
    outcome: "Exec dashboards for sales growth, delivery, and payment mix.",
    learning: "Stakeholder trust starts with data hygiene.",
    next: "Forecast layer.",
    tech: ["Python", "Tableau"],
    impact: "100K+ orders · exec dashboard",
    image: "/project-pictures/Olist-ecom-dash.png",
    repo: "https://github.com/MSD786c/Olist-Ecommerce-Analytics-Dashboard",
    flagship: false,
    tone: "light",
  },
  {
    slug: "femmeventure",
    name: "FemmeVenture",
    description:
      "Women-focused travel platform with safety indices and community tools.",
    longDescription:
      "Women-focused travel platform featuring destination safety indices, solo traveler community tooling, and itinerary helpers to make trips safer and more social.",
    category: "Product & Platforms",
    year: "2024",
    role: "Builder",
    problem: "Solo female travelers lack structured tools to evaluate destinations and find companions.",
    architecture: "Django REST · React · Azure SQL · GitLab · AI services.",
    decisions: ["Safety as a first-class product surface."],
    stack: ["Django REST", "React", "Azure SQL"],
    outcome: "Working prototype with safety scoring and community tooling.",
    learning: "Community + safety products require careful moderation design.",
    next: "Verified companion matching.",
    tech: ["Django REST", "React", "Azure"],
    impact: "Safety scoring prototype",
    image: "/project-pictures/FemmeVenture.png",
    flagship: false,
    tone: "light",
  },
  {
    slug: "virtual-ed",
    name: "VirtualED",
    description:
      "VR-first education platform for universities.",
    longDescription:
      "VR-first education platform that lets universities deliver immersive lectures, 3D collaboration, and instructor-led workshops in persistent virtual classrooms.",
    category: "Product & Platforms",
    year: "2023",
    role: "Builder",
    problem: "Remote learning was flat. Universities wanted engagement.",
    architecture: "Unity · VR development · collaboration tools.",
    decisions: ["Persistent classrooms over per-session resets."],
    stack: ["Unity", "VR", "Collaboration tools"],
    outcome: "Working VR classroom prototype.",
    learning: "VR/AR is a UX problem first, an engineering problem second.",
    next: "Multi-classroom orchestration.",
    tech: ["Unity", "VR"],
    impact: "VR classroom prototype",
    image: "/project-pictures/Virtual-ED.png",
    flagship: false,
    tone: "dark",
  },
  {
    slug: "semantic-embedding",
    name: "Semantic Embedding QA",
    description:
      "QA system on a Distributional Semantic Model file.",
    longDescription:
      "Built a question-answering system on top of a Distributional Semantic Model (DSM) file, powering semantic retrieval and response ranking.",
    category: "AI & Automation",
    year: "2022",
    role: "Builder",
    problem: "Academic QA experiments needed high-recall semantic retrieval.",
    architecture: "Python · TensorFlow · vector search.",
    decisions: ["Pre-LLM era — semantic embeddings were the right primitive."],
    stack: ["Python", "TensorFlow"],
    outcome: "High-recall knowledge lookups for academic QA.",
    learning: "Embeddings are still the right hammer for many nails.",
    next: "Hybrid retrieval with LLM reranking.",
    tech: ["Python", "TensorFlow"],
    impact: "Academic QA prototype",
    image: "/project-pictures/semantic.png",
    flagship: false,
    tone: "light",
  },
  {
    slug: "web-stock-predictor",
    name: "Web Stock Predictor",
    description:
      "Web app for Yahoo Finance data with ML classifiers/regressors.",
    longDescription:
      "Created a web app that ingests Yahoo Finance data, visualizes price trends, and runs ML classifiers/regressors to predict directional movement.",
    category: "Analytics & BI",
    year: "2022",
    role: "Builder",
    problem: "Retail traders needed interpretable charts + ML signals on demand.",
    architecture: "Python · Flask · TensorFlow · scikit-learn · Plotly.",
    decisions: ["Interpretability first."],
    stack: ["Python", "Flask", "TensorFlow", "scikit-learn", "Plotly"],
    outcome: "On-demand charts + ML signals.",
    learning: "Predictive products live or die on UI clarity, not model accuracy.",
    next: "Backtesting engine.",
    tech: ["Python", "Flask", "Plotly"],
    impact: "On-demand ML signals",
    image: "/project-pictures/Web-Stock-Predictor.png",
    flagship: false,
    tone: "light",
  },
  {
    slug: "nutrition-eda",
    name: "Nutrition Analysis EDA",
    description:
      "EDA on 551 foods with 35+ nutrients using Python.",
    longDescription:
      "Analyzed 551 foods with 35+ nutrients using Python notebooks, highlighting calorie bands, protein density leaders, sugar-heavy outliers, and a nutrient correlation heatmap.",
    category: "Analytics & BI",
    year: "2025",
    role: "Builder",
    problem: "Nutrition teams needed fast, reproducible exploration.",
    architecture: "Python · Pandas · Seaborn · Matplotlib · Jupyter.",
    decisions: ["Reproducibility over ad-hoc scripts."],
    stack: ["Python", "Pandas", "Seaborn"],
    outcome: "Reproducible EDA with key swap signals.",
    learning: "EDA work compounds when it's reproducible.",
    next: "Recommender layer.",
    tech: ["Python", "Pandas"],
    impact: "551 foods · 35+ nutrients",
    image: "/project-pictures/Nutrition-EDA.png",
    repo: "https://github.com/MSD786c/Mini-Project-Nutrition-Analysis",
    flagship: false,
    tone: "light",
  },
  {
    slug: "coffee-eda",
    name: "Coffee Ratings EDA",
    description:
      "Coffee Quality Institute dataset exploration for sourcing teams.",
    longDescription:
      "Explored the Coffee Quality Institute dataset to benchmark Arabica beans, correlating sensory scores, surfacing top-producing countries, and spotting distribution outliers.",
    category: "Analytics & BI",
    year: "2025",
    role: "Builder",
    problem: "Sourcing teams needed clear sensory benchmarking.",
    architecture: "Python · Pandas · Seaborn.",
    decisions: ["Pair rankings with distribution outliers."],
    stack: ["Python", "Pandas", "Seaborn"],
    outcome: "Actionable visuals for sourcing.",
    learning: "Outliers are usually the most interesting part of the data.",
    next: "Sourcing recommendation engine.",
    tech: ["Python", "Pandas"],
    impact: "CQI benchmark study",
    image: "/project-pictures/Coffee-EDA.png",
    repo: "https://github.com/MSD786c/Coffee-Ratings-Mini-Project",
    flagship: false,
    tone: "light",
  },
  {
    slug: "penguin-eda",
    name: "Penguin Attribute Analysis",
    description:
      "Auto chart-selection scripts for feature-relationship exploration.",
    longDescription:
      "Developed scripts that auto-select bar or scatter charts based on dataset schema to highlight feature relationships in penguin studies.",
    category: "Analytics & BI",
    year: "2021",
    role: "Builder",
    problem: "Exploratory work was slowed by manual chart picking.",
    architecture: "Python · visualization automation.",
    decisions: ["Automate the boring first step."],
    stack: ["Python"],
    outcome: "Auto-generated charts for attribute pairs.",
    learning: "Small automations compound.",
    next: "Multi-dataset generalization.",
    tech: ["Python"],
    impact: "Chart auto-selection prototype",
    image: "/project-pictures/Penguin.png",
    flagship: false,
    tone: "light",
  },
];

export const flagshipProjects = projects.filter((p) => p.flagship);
export const archivedProjects = projects.filter((p) => !p.flagship);

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────

export const primaryNav = [
  { label: "Suhayl", href: "/" },
  { label: "Founder", href: "/founder" },
  { label: "UGC", href: "/ugc" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
