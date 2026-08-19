"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { founderCompanies } from "@/lib/data";
import { founderTimeline, suhayl } from "@/lib/personal-brand";
import { cn } from "@/lib/utils";

const FounderSection = () => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="founder"
      className="relative py-28 md:py-40 bg-ink-900 text-cream overflow-hidden"
      aria-label="Founder — what am I building?"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-100" aria-hidden />
      {/* Subtle blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(45,108,246,0.18) 0%, rgba(45,108,246,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Top eyebrow + headline */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="mono-eyebrow mb-4">Section · 02 / Build</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-display-lg text-cream text-balance">
              What am I
              <br />
              <span className="text-electric-bright">building?</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-lg text-cream/70 max-w-md text-pretty">
              Two companies. One studio, one product. Both built from Dubai, both
              solving real problems I&apos;ve personally seen fail.
            </p>
          </div>
        </div>

        {/* Company feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {founderCompanies.map((c, i) => (
            <CompanyCard key={c.id} company={c} index={i} />
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-28 md:mt-40">
          <div className="mono-eyebrow mb-4">Founder story</div>
          <h3 className="font-display font-bold tracking-tighter leading-[1.02] text-display-md text-cream max-w-3xl text-balance">
            Not a corporate timeline — a sequence of decisions.
          </h3>

          <div className="mt-16 relative">
            {/* The connecting line */}
            <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-cream-100/15" aria-hidden />

            <div className="space-y-12 md:space-y-16">
              {founderTimeline.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative grid grid-cols-12 gap-6 group"
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-32 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-ink-900 border-2 border-electric" aria-hidden />

                  {/* Year */}
                  <div className="col-span-12 md:col-span-3 md:col-start-1 md:pl-0 pl-8">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-electric-bright">
                      {step.year}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="col-span-12 md:col-span-8 pl-8 md:pl-0">
                    <h4 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-cream">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-cream/70 max-w-2xl text-pretty">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 md:mt-32 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-cream-100/10 pt-12">
          <p className="font-display text-2xl md:text-3xl tracking-tight max-w-xl text-cream">
            Want the long-form version? It lives on the founder page.
          </p>
          <Link
            href="/founder"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-cream text-ink-900 font-medium px-5 py-3 text-sm hover:bg-electric-bright hover:text-ink-900 transition-colors"
          >
            Read the founder page
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const CompanyCard = ({
  company,
  index,
}: {
  company: (typeof founderCompanies)[number];
  index: number;
}) => {
  const isVoxx = company.id === "voxxhire";
  return (
    <motion.div
      initial={{ y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        className="group relative h-full overflow-hidden rounded-3xl border border-cream-100/10 bg-ink-800 hover:border-electric/30 transition-colors duration-500"
      >
        {/* Background mark */}
        <div
          className={cn(
            "absolute -right-12 -top-12 opacity-10 transition-opacity duration-700 group-hover:opacity-25"
          )}
          aria-hidden
        >
          {isVoxx ? (
            <svg width="320" height="320" viewBox="0 0 64 64" fill="none">
              {[0.95, 0.78, 0.58, 0.40, 0.28, 0.40, 0.58, 0.78, 0.95].map(
                (h, i) => {
                  const barH = h * 56;
                  const y = 32 - barH / 2;
                  const x = i * 7.5;
                  return (
                    <rect
                      key={i}
                      x={x}
                      y={y}
                      width={5.5}
                      height={barH}
                      rx={2.75}
                      fill={i === 4 ? "#FF6B5B" : "#FBF7F1"}
                    />
                  );
                }
              )}
            </svg>
          ) : (
            <svg width="320" height="320" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="96" fill="none" stroke="#2D6CF6" strokeWidth="0.7" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="#2D6CF6" strokeWidth="0.7" />
              <circle cx="100" cy="100" r="20" fill="#2D6CF6" />
              <circle cx="100" cy="22" r="2.5" fill="#2D6CF6" />
              <circle cx="178" cy="100" r="2.5" fill="#2D6CF6" />
              <circle cx="100" cy="178" r="2.5" fill="#2D6CF6" />
              <circle cx="22" cy="100" r="2.5" fill="#2D6CF6" />
            </svg>
          )}
        </div>

        <div className="relative p-8 md:p-12 flex flex-col h-full">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
            <span>0{index + 1}</span>
            <span className="h-px w-8 bg-cream/20" />
            <span>{company.year}</span>
          </div>

          <h3 className="mt-6 font-display font-bold tracking-tightest text-display-md text-cream">
            {company.name}
          </h3>

          <p className="mt-4 text-cream/70 max-w-md text-pretty">
            {company.summary}
          </p>

          <ul className="mt-6 space-y-2 max-w-md">
            {company.body.map((b, j) => (
              <li
                key={j}
                className="text-sm text-cream/65 leading-relaxed flex gap-3"
              >
                <span className="text-electric-bright mt-1.5">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {company.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-cream-100/15 text-cream/65"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Spacer pushes the footer to the bottom so cards align */}
          <div className="flex-1 min-h-[1.5rem]" />

          <div className="mt-8 pt-6 border-t border-cream-100/10 flex items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-bright">
              {company.metric}
            </span>
            <div className="flex items-center gap-3">
              {company.id === "voxxhire" && (
                <Link
                  href="/projects/voxxhire"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cream hover:text-electric-bright transition-colors"
                >
                  Case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cream group-hover:text-electric-bright transition-colors"
              >
                Visit
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderSection;
