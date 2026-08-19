import type { Metadata } from "next";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import ContactExperience from "@/components/contact-experience";
import { suhayl } from "@/lib/personal-brand";

export const metadata: Metadata = {
  title: "Contact — What can we create together?",
  description:
    "Get in touch with Suhayl Dastager for jobs, UGC, automotive, speaking, SM Stratagem work, or anything else.",
  alternates: { canonical: `${suhayl.site.url}/contact` },
  openGraph: {
    type: "website",
    url: `${suhayl.site.url}/contact`,
    title: "Suhayl Dastager — Contact",
    description:
      "Get in touch for jobs, UGC, automotive, speaking, SM Stratagem work, or anything else.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — Contact",
    description:
      "Get in touch for jobs, UGC, automotive, speaking, SM Stratagem work, or anything else.",
    images: [suhayl.site.ogImage],
  },
};

export default function ContactRoute() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />
      <ContactExperience />
      <Footer />
    </main>
  );
}
