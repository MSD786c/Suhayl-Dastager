import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import AboutPage from "@/components/about-page";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "About — Outside the laptop",
  description:
    "Suhayl Dastager outside the laptop. Dubai, cars, technology, and the founder life behind the projects.",
  alternates: { canonical: `${suhayl.site.url}/about` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/about`,
    title: "Suhayl Dastager — About",
    description: "Dubai, cars, technology, and the founder life behind the projects.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — About",
    description: "Dubai, cars, technology, and the founder life behind the projects.",
    images: [suhayl.site.ogImage],
  },
};

export default function AboutRoute() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />
      <AboutPage />
      <Footer />
    </main>
  );
}
