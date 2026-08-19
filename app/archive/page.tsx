import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import ArchivePage from "@/components/archive-page";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "Archive — Older projects",
  description:
    "The full archive of Suhayl Dastager's older and smaller projects. Still real, just not the headline work anymore.",
  alternates: { canonical: `${suhayl.site.url}/archive` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/archive`,
    title: "Suhayl Dastager — Archive",
    description: "Older and smaller projects. Still real, just not the headline work anymore.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — Archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — Archive",
    description: "Older and smaller projects. Still real, just not the headline work anymore.",
    images: [suhayl.site.ogImage],
  },
};

export default function ArchiveRoute() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <ArchivePage />
      <Footer />
    </main>
  );
}
