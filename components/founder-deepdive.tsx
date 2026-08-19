"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { founderCompanies } from "@/lib/data";
import { founderTimeline, suhayl } from "@/lib/personal-brand";
import { cn } from "@/lib/utils";

const FounderDeepDive = () => {
  return (
    <>
      {/* Hero — full-bleed dark with blue glow */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-ink-950 text-text-inverse overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(39,107,255,0.20) 0%, rgba(39,107,255,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-monoWide text-blue mb-5">
                Founder · 02 / Build
              </div>
              <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl md:text-display-2xl text-text-inverse text-balance">
                Two companies.
                <br />
                <span className="text-blue">One studio, one product.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 self-end">
              <p className="text-lg text-text-inverseMuted max-w-md text-pretty">
                Both built from Dubai. Both solving real problems I&apos;ve
                personally seen fail. Neither is a side project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      {founderCompanies.map((c, i) => (
        <CompanyFeature key={c.id} company={c} index={i} />
      ))}

      {/* Timeline */}
      <section className="relative py-8 md:py-12 bg-ink-950 text-text-inverse">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted mb-5">
            Founder story
          </div>
          <h2 className="font-display font-bold tracking-tighter text-display-lg text-text-inverse max-w-3xl text-balance">
            A sequence of decisions, not a corporate timeline.
          </h2>
          <div className="mt-16 relative">
            <div
              className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-ink-500"
              aria-hidden
            />
            <div className="space-y-10 md:space-y-12">
              {founderTimeline.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-12 gap-6"
                >
                  <div
                    className="absolute left-0 md:left-32 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-ink-950 border-2 border-blue"
                    aria-hidden
                  />
                  <div className="col-span-12 md:col-span-3 pl-8 md:pl-0">
                    <div
                      className="font-mono text-xs uppercase tracking-monoWide text-blue"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {step.year}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 pl-8 md:pl-0">
                    <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-text-inverse">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-inverseMuted max-w-2xl text-pretty">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CompanyFeature = ({
  company,
  index,
}: {
  company: (typeof founderCompanies)[number];
  index: number;
}) => {
  return (
    <section
      className={cn(
        "relative py-8 md:py-12",
        index % 2 === 0 ? "bg-canvas" : "bg-white"
      )}
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="chapter mb-4">
              <span>0{index + 1}</span>
              <span className="text-text-muted/60">·</span>
              <span>{company.year}</span>
            </div>
            <h2 className="font-display font-bold tracking-tightest text-display-md text-ink text-balance">
              {company.name}
            </h2>
            <p className="mt-4 text-lg text-ink/65 text-pretty">
              {company.summary}
            </p>
            <Link
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-blue hover:gap-3 transition-all"
            >
              Visit {company.name}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7 space-y-4">
            {company.body.map((b, i) => (
              <p
                key={i}
                className="text-lg text-ink/80 leading-relaxed text-pretty"
              >
                {b}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-2">
              {company.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-border text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDeepDive;
