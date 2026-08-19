import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import UGCDetail from "@/components/ugc-detail";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "UGC — Tech content that doesn't feel like an ad",
  description:
    "Suhayl Dastager's creator portfolio. Automotive, technology, AI, and SaaS UGC plus packages, licensing, and case studies.",
  alternates: { canonical: `${suhayl.site.url}/ugc` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/ugc`,
    title: "Suhayl Dastager — UGC creator portfolio",
    description:
      "Automotive, technology, AI, and SaaS UGC. 3.3M+ views across live showreel.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — UGC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — UGC creator portfolio",
    description:
      "Automotive, technology, AI, and SaaS UGC. 3.3M+ views across live showreel.",
    images: [suhayl.site.ogImage],
  },
};

export default function UGCPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />
      <UGCDetail />
      <Footer />
    </main>
  );
}
