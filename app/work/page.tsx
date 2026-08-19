import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import WorkPage from "@/components/work-page";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "Work — Professional experience & selected projects",
  description:
    "Suhayl Dastager's professional experience across AI, automation, analytics, and product engineering, plus his six flagship projects.",
  alternates: { canonical: `${suhayl.site.url}/work` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/work`,
    title: "Suhayl Dastager — Work, experience & projects",
    description:
      "AI, automation, analytics, and product engineering experience plus six flagship projects.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — Work, experience & projects",
    description:
      "AI, automation, analytics, and product engineering experience plus six flagship projects.",
    images: [suhayl.site.ogImage],
  },
};

export default function WorkPageRoute() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />
      <WorkPage />
      <Footer />
    </main>
  );
}
