"use client";

import React from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import SectionDivider from '@/components/section-divider';
import FloatingCTA from '@/components/floating-cta';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <SectionDivider variant="teal" />
      <ProjectsSection />
      <SectionDivider variant="coral" flip />
      <EducationSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
