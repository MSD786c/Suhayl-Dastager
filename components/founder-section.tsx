"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { founderCompanies, suhayl } from "@/lib/data";
import { cn } from "@/lib/utils";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="relative bg-ink-950 text-text-inverse"
      aria-label="Founder - what am I building?"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-10 md:py-14">
        {/* Top eyebrow + headline */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted mb-5">
              02 / Build
            </div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-lg text-text-inverse text-balance">
              What am I
              <br />
              building?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-lg text-text-inverseMuted max-w-md text-pretty">
              Two companies. One studio, one product. Both built from Dubai, both
              solving real problems I&apos;ve personally seen fail.
            </p>
          </div>
        </div>

        {/* Companies - editorial split layout, no decorative SVGs, no fake metrics */}
        <div className="border-t border-ink-500">
          {founderCompanies.map((c, i) => {
            const isVoxx = c.id === "voxxhire";
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-ink-500"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-6 py-12 md:py-16">
                  {/* Left - meta + visual */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted">
                      <span style={{ fontVariantNumeric: "tabular-nums" }}>
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-ink-500" />
                      <span style={{ fontVariantNumeric: "tabular-nums" }}>
                        {c.year}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] text-text-inverse">
                      {c.name}
                    </h3>

                    <p className="mt-5 text-text-inverseMuted text-lg max-w-md text-pretty">
                      {c.summary}
                    </p>

                    {/* Inline image of the product if we have one - logo for SM Stratagem, portrait for VoxxHire */}
                    <div
                      className={cn(
                        "mt-6 relative rounded-xl overflow-hidden bg-ink-800",
                        isVoxx ? "aspect-[4/3]" : "aspect-square"
                      )}
                    >
                      <Image
                        src={
                          isVoxx
                            ? suhayl.files.portraits.workspace
                            : suhayl.files.brands.smStratagem
                        }
                        alt={c.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className={isVoxx ? "object-cover opacity-90" : "object-contain p-6 md:p-8"}
                      />
                    </div>
                  </div>

                  {/* Right - what it does + CTAs */}
                  <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col">
                    <div className="font-mono text-[10px] uppercase tracking-monoWide text-blue mb-4">
                      What it does
                    </div>

                    <ul className="space-y-3 max-w-lg">
                      {c.body.map((b, j) => (
                        <li
                          key={j}
                          className="text-base md:text-lg text-text-inverse leading-relaxed flex gap-3"
                        >
                          <span
                            className="font-mono text-xs text-blue mt-1.5 shrink-0"
                            style={{ fontVariantNumeric: "tabular-nums" }}
                          >
                            0{j + 1}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted">
                      {c.tech.slice(0, 5).map((t) => (
                        <span key={t} className="text-text-inverseMuted">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-10 flex flex-wrap items-center gap-4">
                      <Link
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arrow-link-light"
                      >
                        Visit {c.name}
                        <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                      </Link>
                      {c.id === "voxxhire" && (
                        <span className="text-text-inverseMuted/30">/</span>
                      )}
                      {c.id === "voxxhire" && (
                        <Link
                          href="/projects/voxxhire"
                          className="arrow-link-light"
                        >
                          Case study
                          <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom - short founder commentary */}
        <div className="mt-8 md:mt-12 grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted mb-4">
              The arc
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter leading-[1.05] text-text-inverse text-balance">
              Not a corporate timeline. A sequence of decisions.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="space-y-0 border-t border-ink-500">
              {[
                {
                  year: "2019",
                  title: "First taste of enterprise",
                  body: "SAP IT Summer Intern - early exposure to system configuration, virtualization, and infrastructure uptime.",
                },
                {
                  year: "2020",
                  title: "The Tutoring Center",
                  body: "System Specialist - supporting IT rollouts, documentation, daily ops. Where process clarity started.",
                },
                {
                  year: "2021",
                  title: "Chicking",
                  body: "Digital Marketing - 40% engagement lift, +18% CTR via Reels and community. The creative muscle wakes up.",
                },
                {
                  year: "2022",
                  title: "University of Birmingham",
                  body: "AI & Computer Science. Chancellor's Academic Merit Scholarship. The technical foundation gets formalized.",
                },
                {
                  year: "2024",
                  title: "RelphaCare + Halliday",
                  body: "A/B testing drops CPA 12%. AI document-flow automator cuts QA cycles 40%. Real systems, real metrics.",
                },
                {
                  year: "2025",
                  title: "Loop Media · SM Stratagem",
                  body: "Seven 1M+ view videos. Founder mode begins. SM Stratagem formalizes the studio; VoxxHire becomes a product.",
                },
                {
                  year: "Now",
                  title: "Building, learning, selling, shipping.",
                  body: "AI product engineering, founder of two companies, and creator partnerships that respect the audience.",
                },
                {
                  year: "Next",
                  title: "→",
                  body: "Intentionally open. More products. Sharper systems. Larger collaborations.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-ink-500"
                >
                  <div
                    className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-monoWide text-blue"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {step.year}
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <h4 className="font-display font-semibold text-lg md:text-xl tracking-tight text-text-inverse">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-text-inverseMuted max-w-2xl text-pretty">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-ink-500 pt-10">
          <p className="font-display text-2xl md:text-3xl tracking-tight text-text-inverse max-w-xl text-balance">
            Want the long-form version? It lives on the founder page.
          </p>
          <Link
            href="/founder"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg bg-text-inverse text-ink font-medium px-5 py-3 text-sm hover:bg-blue hover:text-text-inverse transition-colors duration-300"
          >
            Read the founder page
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
