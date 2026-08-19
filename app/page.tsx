import Nav from "@/components/navigation";
import Hero from "@/components/hero";
import { HeroMetrics } from "@/components/hero-metrics";
import ThreeDoors from "@/components/three-doors";
import UGCSection from "@/components/ugc-section";
import FounderSection from "@/components/founder-section";
import SelectedWork from "@/components/selected-work";
import HireSection from "@/components/hire-section";
import AboutStrip from "@/components/about-strip";
import QuickAnswers from "@/components/quick-answers";
import ContactExperience from "@/components/contact-experience";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />
      <Hero />
      <HeroMetrics />
      <ThreeDoors />
      <UGCSection />
      <FounderSection />
      <SelectedWork />
      <HireSection />
      <AboutStrip />
      <QuickAnswers />
      <ContactExperience />
      <Footer />
    </main>
  );
}
