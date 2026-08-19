import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { suhayl } from "@/lib/personal-brand";
import { ugcReels } from "@/lib/data";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const editorial = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(suhayl.site.url),
  title: {
    default: suhayl.site.title,
    template: "%s · Suhayl Dastager",
  },
  description: suhayl.site.description,
  keywords: [...suhayl.keywords],
  authors: [{ name: suhayl.fullName, url: suhayl.site.url }],
  creator: suhayl.fullName,
  publisher: suhayl.fullName,
  applicationName: suhayl.site.name,
  category: "Personal Brand",
  alternates: {
    canonical: suhayl.site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: suhayl.site.url,
    title: suhayl.site.title,
    description: suhayl.site.description,
    siteName: suhayl.site.name,
    images: [
      {
        url: suhayl.site.ogImage,
        width: 1200,
        height: 630,
        alt: suhayl.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: suhayl.site.title,
    description: suhayl.site.description,
    images: [suhayl.site.ogImage],
    creator: "@suhaylsm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─────────────────────────────────────────────────────────────────
// JSON-LD: comprehensive AEO/GEO/SEO structured data
// ─────────────────────────────────────────────────────────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${suhayl.site.url}/#person`,
  name: suhayl.fullName,
  givenName: "Suhayl",
  familyName: "Dastager",
  alternateName: ["Suhayl", "Suhayl Dastager", "Mohammed Suhayl Dastager"],
  url: suhayl.site.url,
  jobTitle: ["AI Product Engineer", "Founder", "Tech Creator"],
  description: suhayl.site.description,
  image: `${suhayl.site.url}${suhayl.files.portraits.headshot}`,
  email: suhayl.email,
  telephone: undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Product Engineering",
    "Next.js",
    "TypeScript",
    "Python",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "Data Engineering",
    "Workflow Automation",
    "n8n",
    "Zoho",
    "User-Generated Content",
    "Automotive Content",
    "SaaS",
    "Founder Leadership",
    "Flutter",
    "TensorFlow",
    "Tableau",
    "ETL",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Arabic" },
  ],
  sameAs: [
    suhayl.social.linkedin,
    suhayl.social.instagram,
    suhayl.social.github,
    suhayl.social.voxxhire,
    suhayl.social.smStratagem,
  ],
  worksFor: [
    { "@id": `${suhayl.site.url}/#sm-stratagem` },
    { "@id": `${suhayl.site.url}/#voxxhire` },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Birmingham Dubai",
      sameAs: "https://www.birmingham.ac.uk/dubai",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Birmingham",
      sameAs: "https://www.birmingham.ac.uk/",
    },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Chancellor's Academic Merit Scholarship", credentialCategory: "Scholarship" },
    { "@type": "EducationalOccupationalCredential", name: "The Birmingham Award", credentialCategory: "Award" },
    { "@type": "EducationalOccupationalCredential", name: "Oracle Cloud Infrastructure Data Science Professional", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "Microsoft Azure AI Fundamentals", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "NVIDIA Deep Learning", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "SAP LLM Fundamentals", credentialCategory: "certification" },
  ],
  award: [
    "Nationally recognized by HH Sheikh Hamdan Bin Mohammed Bin Rashid Al Maktoum and HE Mattar Al Tayer for advanced mathematics challenges",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Suhayl Dastager — services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Founder Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UGC Content Creation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automotive Content Production" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${suhayl.site.url}/#website`,
  url: suhayl.site.url,
  name: suhayl.site.name,
  alternateName: ["Suhayl Dastager", "Suhayl", "suhayl-dastager.me"],
  description: suhayl.site.description,
  inLanguage: "en-US",
  publisher: { "@id": `${suhayl.site.url}/#person` },
  copyrightHolder: { "@id": `${suhayl.site.url}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${suhayl.site.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Site-wide ProfilePage for the home route — gives AI crawlers a single
// canonical "this is who Suhayl is" entry, and surfaces in Google's
// knowledge panel signals.
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${suhayl.site.url}/#profile`,
  url: suhayl.site.url,
  name: suhayl.site.name,
  description: suhayl.site.description,
  inLanguage: "en-US",
  isPartOf: { "@id": `${suhayl.site.url}/#website` },
  about: { "@id": `${suhayl.site.url}/#person` },
  mainEntity: { "@id": `${suhayl.site.url}/#person` },
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().slice(0, 10),
};

// Site navigation as schema — exposes the primary nav to AI crawlers
// and to Google's sitelinks generator.
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${suhayl.site.url}/#navigation`,
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Home", url: suhayl.site.url },
    { "@type": "SiteNavigationElement", position: 2, name: "Founder", url: `${suhayl.site.url}/founder` },
    { "@type": "SiteNavigationElement", position: 3, name: "UGC", url: `${suhayl.site.url}/ugc` },
    { "@type": "SiteNavigationElement", position: 4, name: "Work", url: `${suhayl.site.url}/work` },
    { "@type": "SiteNavigationElement", position: 5, name: "About", url: `${suhayl.site.url}/about` },
    { "@type": "SiteNavigationElement", position: 6, name: "Contact", url: `${suhayl.site.url}/contact` },
  ],
};

// BreadcrumbList for the home — keeps breadcrumb-rich-results eligibility.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${suhayl.site.url}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: suhayl.site.url },
  ],
};

const smStratagemSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${suhayl.site.url}/#sm-stratagem`,
  name: "SM Stratagem",
  alternateName: "SM Stratagem Digital Product Studio",
  url: suhayl.social.smStratagem,
  logo: `${suhayl.site.url}/favicon.svg`,
  description:
    "SM Stratagem is a Dubai-based digital product studio. AI that ships, software that scales. Houses VoxxHire and takes on selected client work in AI, custom software, and product builds.",
  foundingDate: "2025",
  founder: { "@id": `${suhayl.site.url}/#person` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "AdministrativeArea", name: "Dubai" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Custom Software",
    "Web Applications",
    "Product Engineering",
  ],
  sameAs: [suhayl.social.smStratagem],
};

const voxxhireSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${suhayl.site.url}/#voxxhire`,
  name: "VoxxHire",
  url: suhayl.social.voxxhire,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Recruitment & Talent Assessment",
  description:
    "An AI interview platform that helps graduates land roles and gives recruiters enterprise-grade signal. Voice-first candidate experience, structured rubric-based scoring, recruiter analytics dashboard.",
  operatingSystem: "Web",
  creator: { "@id": `${suhayl.site.url}/#sm-stratagem` },
  author: { "@id": `${suhayl.site.url}/#person` },
  offers: {
    "@type": "Offer",
    category: "Recruitment Software",
    availability: "https://schema.org/PreOrder",
  },
  featureList: [
    "Voice-first candidate interview",
    "AI rubric-based scoring",
    "Real-time transcription",
    "Structured recruiter analytics",
    "Graduate-friendly interface",
    "Enterprise recruiter dashboard",
  ],
};

// VideoObject schema for each live UGC reel — surfaces videos in
// Google video search, Bing video tab, and AI-citation contexts.
const videoObjects = {
  "@context": "https://schema.org",
  "@graph": ugcReels
    .filter((r) => r.views > 0)
    .map((r) => ({
      "@type": "VideoObject",
      "@id": `${suhayl.site.url}/ugc#${r.id}`,
      name: r.title,
      description: r.description,
      uploadDate: r.postedAt,
      duration: `PT${r.durationSec}S`,
      contentUrl: `${suhayl.site.url}${r.videoSrc}`,
      thumbnailUrl: `${suhayl.site.url}${r.posterSrc}`,
      encodingFormat: "video/mp4",
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: { "@type": "WatchAction" },
        userInteractionCount: r.views,
      },
      creator: { "@id": `${suhayl.site.url}/#person` },
      publisher: { "@id": `${suhayl.site.url}/#person` },
      isAccessibleForFree: true,
    })),
};

// FAQPage schema — surfaces the Quick Answers in Google's
// "People also ask" / FAQ rich results.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${suhayl.site.url}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Suhayl Dastager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suhayl Dastager is a Dubai-based AI Product Engineer, founder of SM Stratagem, and co-founder of VoxxHire. He graduated with a BSc (Hons) in Artificial Intelligence & Computer Science from the University of Birmingham Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "What does Suhayl actually build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things: products (VoxxHire, Document-Flow Automator, DPH Classifieds, MoneyMentor, Workora, Crypto Market Command Center), companies (SM Stratagem, VoxxHire), and content (short-form UGC at the intersection of cars, technology, AI, and founder life).",
      },
    },
    {
      "@type": "Question",
      name: "What is SM Stratagem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SM Stratagem is a Dubai digital product studio founded by Suhayl Dastager in 2025. It houses VoxxHire and takes on selected client work in AI, custom software, and product builds.",
      },
    },
    {
      "@type": "Question",
      name: "What is VoxxHire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VoxxHire is an AI interview platform co-founded by Suhayl Dastager in 2024. It helps graduates land roles by giving them a voice-first interview experience, and gives recruiters enterprise-grade signal through structured rubric-based scoring.",
      },
    },
    {
      "@type": "Question",
      name: "How can brands work with Suhayl as a UGC creator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suhayl offers six UGC packages: UGC Core, Performance Creative, Content Sprint, Monthly Tech Partner, Automotive Hero, and Automotive Content Day. Live showreel includes a 3.3M-view perfume brand piece.",
      },
    },
    {
      "@type": "Question",
      name: "What are Suhayl's technical capabilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grouped: Applied AI (LLMs, RAG, AI workflows, model integration); Product Engineering (React, Next.js, TypeScript, Node, Flask, FastAPI); Data & Automation (Python, SQL, analytics, ETL, n8n, Zoho); Product & Strategy (product architecture, experimentation, stakeholder management, discovery, execution).",
      },
    },
    {
      "@type": "Question",
      name: "Where is Suhayl based and is he open to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based in Dubai, United Arab Emirates. Open to senior AI product engineering roles, technical co-founder conversations, and selected UGC partnerships through 2026.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${editorial.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(smStratagemSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(voxxhireSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjects) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-canvas-warm text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
