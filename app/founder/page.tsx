import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import FounderDeepDive from "@/components/founder-deepdive";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "Founder — SM Stratagem & VoxxHire",
  description:
    "Suhayl Dastager is the founder of SM Stratagem and co-founder of VoxxHire. The long-form story of how those companies came to be.",
  alternates: { canonical: `${suhayl.site.url}/founder` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/founder`,
    title: "Suhayl Dastager — Founder of SM Stratagem & VoxxHire",
    description:
      "Founder story: SM Stratagem (Dubai digital product studio) and VoxxHire (AI interview platform).",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — Founder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — Founder of SM Stratagem & VoxxHire",
    description:
      "Founder story: SM Stratagem (Dubai digital product studio) and VoxxHire (AI interview platform).",
    images: [suhayl.site.ogImage],
  },
};

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />
      <FounderDeepDive />
      <Footer />
    </main>
  );
}
