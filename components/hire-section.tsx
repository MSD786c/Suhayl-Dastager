"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  skillGroups,
  fullStack,
  whyHireStatements,
  careerProgression,
} from "@/lib/personal-brand";
import { cn } from "@/lib/utils";

const hireProof = [
  { label: "Faster onboarding reviews", value: "40%", source: "Halliday" },
  { label: "Lift in view rate", value: "50%", source: "Loop Media" },
  { label: "Follower growth in 90 days", value: "30%", source: "Loop Media" },
  { label: "Reduction in manual reporting", value: "35%", source: "Halliday" },
];

const HireSection = () => {
  return (
    <section
      id="hire"
      className="relative bg-canvas border-t border-border"
      aria-label="Why hire me"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-24 md:py-36">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">03 / Work</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-lg text-ink text-balance">
              I don&apos;t just have a tech stack.
              <br />
              <span className="text-blue">I know how to ship.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-lg text-text-secondary text-pretty">
              Engineering that connects to business. AI, product, automation,
              analytics, marketing, and the creativity to wire them together.
            </p>
          </div>
        </div>

        {/* Proof — typography row, not card grid */}
        <div className="border-y border-border">
          {hireProof.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-4 items-baseline py-6 border-b border-border last:border-b-0 md:py-8"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                0{i + 1}
              </div>
              <div className="col-span-7 md:col-span-7 font-display font-semibold text-lg md:text-xl text-ink">
                {m.label}
              </div>
              <div className="col-span-3 md:col-span-2 font-display font-bold text-2xl md:text-3xl tracking-tighter text-blue text-right" style={{ fontVariantNumeric: "tabular-nums" }}>
                {m.value}
              </div>
              <div className="hidden md:block md:col-span-2 font-mono text-[10px] uppercase tracking-monoWide text-text-muted text-right">
                {m.source}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why hire — large editorial reveal */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">Why hire me</div>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[1.02] text-ink text-balance">
              Because I&apos;ve done every job between the user and the model.
            </h3>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-0 border-t border-border">
              {whyHireStatements.map((line, i) => (
                <WhyHireLine
                  key={line}
                  line={line}
                  index={i}
                  highlight={i === whyHireStatements.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Career arc — large editorial text, per brief */}
        <div className="mt-24 md:mt-32">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-5">The arc</div>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter leading-[1.02] text-ink text-balance">
                One role at a time — every chapter built on the last.
              </h3>
            </div>
          </div>

          <div className="border-t border-border">
            {careerProgression.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-border"
              >
                <div
                  className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-blue"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  0{i + 1}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <div className="font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-ink uppercase">
                    {c.label}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7 text-text-secondary text-lg md:text-xl text-pretty">
                  {c.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills — grouped, no percentages, no pill cloud */}
        <div className="mt-24 md:mt-32">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12">
            <div className="md:col-span-4">
              <div className="eyebrow mb-5">Capabilities</div>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter leading-[1.02] text-ink text-balance">
                What I bring to a team, grouped by capability.
              </h3>
            </div>
          </div>

          <div className="border-t border-border">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-border"
              >
                <div
                  className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-blue"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  0{i + 1}
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h4 className="font-display font-semibold text-lg md:text-xl tracking-tight text-ink">
                    {g.title}
                  </h4>
                </div>
                <div className="col-span-12 md:col-span-8 text-text-secondary text-pretty leading-relaxed">
                  {g.items.join(" · ")}
                </div>
              </motion.div>
            ))}
          </div>

          <details className="mt-4 group border-b border-border">
            <summary className="cursor-pointer flex items-center justify-between py-6 font-mono text-[11px] uppercase tracking-monoWide text-text-muted list-none hover:text-ink transition-colors">
              <span>Full technical stack</span>
              <Plus className="h-3.5 w-3.5 transition-transform group-open:rotate-45" />
            </summary>
            <div className="pb-8 text-sm text-text-secondary leading-relaxed">
              {fullStack.join(" · ")}
            </div>
          </details>
        </div>

        {/* CTAs */}
        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 items-center border-t border-border pt-12">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-2xl md:text-4xl tracking-tighter leading-[1.05] text-ink max-w-xl text-balance">
              See the full picture on the résumé page.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <Link href="/resume" className="btn-primary">
              View Résumé
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact?type=job" className="btn-ghost">
              Talk About a Role
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyHireLine = ({
  line,
  index,
  highlight = false,
}: {
  line: string;
  index: number;
  highlight?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-12 gap-4 items-baseline py-4 border-b border-border"
    >
      <div
        className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div
        className={cn(
          "col-span-10 md:col-span-11 font-display font-medium tracking-tighter leading-[1.05] text-ink",
          highlight
            ? "text-3xl md:text-5xl text-blue"
            : "text-2xl md:text-3xl"
        )}
      >
        {line}
      </div>
    </motion.div>
  );
};

export default HireSection;
