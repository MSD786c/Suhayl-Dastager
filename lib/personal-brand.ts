// Suhayl Dastager — Personal Brand Data Layer
// Source of truth for every section, route, and content surface.

export const suhayl = {
  fullName: "Suhayl Dastager",
  preferredName: "Suhayl",
  initials: "SD",
  positioning: "Founder. AI Product Engineer. Tech Creator.",
  statement: "I build technology, companies & content around both.",
  roles: ["AI Product Engineer", "Founder", "Tech Creator"],
  location: "Dubai, United Arab Emirates",
  email: "dastagersuhayl@gmail.com",
  emailPublic: "dastagersuhayl@gmail.com",
  phone: undefined as string | undefined,

  // External profiles
  social: {
    linkedin: "https://www.linkedin.com/in/suhayl-dastager/",
    instagram: "https://www.instagram.com/suhayl.sm",
    github: "https://github.com/MSD786c",
    voxxhire: "https://voxxhire.com",
    smStratagem: "https://sm-stratagem.com",
  },

  // Canonical site URL
  site: {
    url: "https://suhayl-dastager.me",
    name: "Suhayl Dastager",
    title:
      "Suhayl Dastager — Founder, AI Product Engineer & Tech Creator",
    description:
      "Dubai-based founder, AI product engineer and technology creator. Explore what Suhayl is building, his professional work, creator portfolio and collaborations.",
    ogImage: "/og/suhayl-og.svg",
  },

  // Files served from /public
  files: {
    resume: "/Suhayl_Dastager_Resume.pdf",
    // The supplied portrait set (headshot has a 2x version for hero use)
    portraits: {
      face: "/portrait/face-square.jpg",
      suitFull: "/portrait/suit-full.jpg",
      headshot: "/portrait/headshot-2x.jpg",
      aerial: "/portrait/aerial.jpg",
      vSign: "/portrait/v-sign.jpg",
      driver: "/portrait/driver.jpg",
      suv: "/portrait/suv.jpg",
      suvSeated: "/portrait/suv-seated.jpg",
      workspace: "/portrait/workspace.jpg",
    },
    // Brand logos (premium, used in editorial contexts)
    brands: {
      smStratagem: "/brand/sm-stratagem-logo.svg",
      documentFlowAutomator: "/brand/document-flow-automator.svg",
    },
  },

  // SEO keywords
  keywords: [
    "Suhayl Dastager",
    "AI Product Engineer Dubai",
    "Founder SM Stratagem",
    "VoxxHire founder",
    "Tech creator Dubai",
    "UGC automotive technology",
    "AI engineer UAE",
    "data automation consultant",
    "Next.js engineer Dubai",
  ],
} as const;

export const identity = {
  concept: "Three doors. One person.",
  pillars: [
    {
      id: "build",
      label: "Build",
      number: "01",
      tagline: "What I'm building",
      description:
        "SM Stratagem, VoxxHire and the products I'm working on.",
      focus: ["SM Stratagem", "VoxxHire", "Applied AI", "Custom Software"],
      href: "/founder",
      cta: "Founder Story",
      accent: "blue",
      imageKey: "workspace",
    },
    {
      id: "create",
      label: "Create",
      number: "02",
      tagline: "UGC & content",
      description:
        "Cars, technology, software and content that doesn't feel like an ad.",
      focus: ["Automotive", "Software", "AI", "Consumer Tech", "Founder Life"],
      href: "/ugc",
      cta: "Creator Portfolio",
      accent: "coral",
      imageKey: "driver",
    },
    {
      id: "work",
      label: "Work",
      number: "03",
      tagline: "Why hire me",
      description:
        "AI, product engineering, automation, analytics and execution.",
      focus: ["AI", "Product Engineering", "Automation", "Data", "Strategy"],
      href: "/work",
      cta: "See Why",
      accent: "blue",
      imageKey: "headshot",
    },
  ],
} as const;

// Editorial founder timeline — open-ended by design.
export const founderTimeline = [
  {
    year: "2019",
    title: "First taste of enterprise",
    body: "SAP IT Summer Intern — early exposure to system configuration, virtualization, and infrastructure uptime.",
  },
  {
    year: "2020",
    title: "The Tutoring Center",
    body: "System Specialist — supporting IT rollouts, documentation, and daily ops. Where the discipline of process clarity started.",
  },
  {
    year: "2021",
    title: "Chicking",
    body: "Digital Marketing Specialist — 40% engagement lift, +18% CTR via Reels, TikToks, and community. The creative muscle wakes up.",
  },
  {
    year: "2022",
    title: "University of Birmingham",
    body: "AI & Computer Science. Chancellor's Academic Merit Scholarship. The technical foundation gets formalized.",
  },
  {
    year: "2024",
    title: "RelphaCare + Halliday",
    body: "A/B testing drops CPA 12%, AI document-flow automator cuts QA cycles 40%. Real systems, real metrics.",
  },
  {
    year: "2025",
    title: "Loop Media · SM Stratagem",
    body: "Seven 1M+ view videos. Founder mode begins. SM Stratagem formalizes the studio; VoxxHire goes from idea to product.",
  },
  {
    year: "Now",
    title: "Building, learning, selling, shipping.",
    body: "AI product engineering, founder of two companies, and creator partnerships with brands that want real signal.",
  },
  {
    year: "Next",
    title: "→",
    body: "Intentionally open. More products. Sharper systems. Larger collaborations.",
  },
] as const;

export const skillGroups = [
  {
    title: "Applied AI",
    items: [
      "LLMs",
      "RAG",
      "AI workflows",
      "Model integration",
      "Realtime AI",
      "Evaluation",
      "Automation",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node",
      "Flask",
      "FastAPI",
      "APIs",
      "Databases",
    ],
  },
  {
    title: "Data & Automation",
    items: [
      "Python",
      "SQL",
      "Analytics",
      "ETL",
      "BI",
      "Workflow automation",
      "n8n",
      "Zoho",
    ],
  },
  {
    title: "Product & Strategy",
    items: [
      "Product architecture",
      "Experimentation",
      "Stakeholder management",
      "Discovery",
      "Process design",
      "Execution",
    ],
  },
] as const;

export const fullStack = [
  "Python",
  "SQL",
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Flask",
  "FastAPI",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Power BI",
  "Tableau",
  "TensorFlow",
  "scikit-learn",
  "XGBoost",
  "LLMs (GPT-4, Gemini, Claude)",
  "LangChain",
  "Docker",
  "CI/CD",
  "n8n",
  "Twilio",
  "Zoho",
  "Oracle Cloud",
  "Azure",
  "Data storytelling",
  "CapCut",
  "Premiere Pro",
];

export const whyHireStatements = [
  "I understand the user.",
  "I understand the business.",
  "I can analyse the data.",
  "I can design the system.",
  "I can build it.",
  "I can explain it.",
  "And I can ship it.",
] as const;

export const education = [
  {
    degree: "BSc (Hons) Artificial Intelligence & Computer Science",
    institution: "University of Birmingham Dubai",
    duration: "Sep 2022 – Jul 2025",
    status: "Completed",
    highlights: [
      "Chancellor's Academic Merit Scholarship",
      "The Birmingham Award",
    ],
  },
  {
    degree: "Engineering & Physical Sciences Foundation",
    institution: "University of Birmingham",
    duration: "Sep 2021 – May 2022",
    status: "Completed",
  },
] as const;

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle",
    date: "2025",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
  },
  {
    name: "NVIDIA Deep Learning",
    issuer: "NVIDIA",
    date: "2024",
  },
  {
    name: "SAP LLM Fundamentals",
    issuer: "SAP",
    date: "2024",
  },
  {
    name: "Kaggle Badges: Python · Pandas · Advanced SQL · Visualization",
    issuer: "Kaggle",
    date: "2025",
  },
  {
    name: "Dubai Police Cybersecurity Workshop",
    issuer: "Dubai Police",
    date: "2025",
  },
] as const;

// Career narrative used in the Hire section
export const careerProgression = [
  {
    label: "Marketing",
    body: "Learning what gets attention.",
  },
  {
    label: "Data",
    body: "Learning how to measure it.",
  },
  {
    label: "Automation",
    body: "Removing repetitive work.",
  },
  {
    label: "AI + Product",
    body: "Building the system.",
  },
  {
    label: "Founder",
    body: "Owning the whole problem.",
  },
] as const;
