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
import { CountUp, GradientFlow } from "@/components/motion-graphics";
import { cn } from "@/lib/utils";

const hireMetrics = [
  { label: "Faster onboarding reviews", value: 40, suffix: "%", source: "Halliday Forfaiting" },
  { label: "Lift in view rate", value: 50, suffix: "%", source: "Loop Media" },
  { label: "Follower growth in 90 days", value: 30, suffix: "%", source: "Loop Media" },
  { label: "Reduction in manual reporting", value: 35, suffix: "%", source: "Halliday Forfaiting" },
];

const HireSection = () => {
  return (
    <section
      id="hire"
      className="relative py-28 md:py-40 bg-canvas-warm overflow-hidden"
      aria-label="Why hire me"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">Section · 03 / Ship</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-display-lg text-ink-900 text-balance">
              I don&apos;t just have a tech stack.
              <br />
              <span className="text-electric">I know how to ship.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 self-end">
            <p className="text-lg text-ink-900/70 text-pretty">
              Engineering that connects to business. AI, product, automation,
              analytics, marketing, and the creativity to wire them together.
            </p>
          </div>
        </div>

        {/* Metrics bar with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-900/10 border border-navy-900/10 rounded-2xl overflow-hidden mb-28 md:mb-40">
          {hireMetrics.map((m) => (
            <div key={m.label} className="bg-canvas-warm p-6 md:p-8 relative overflow-hidden">
              <GradientFlow
                from="rgba(45,108,246,0.0)"
                via="rgba(45,108,246,0.06)"
                to="rgba(45,108,246,0.0)"
              />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                  {m.label}
                </div>
                <div className="mt-2 font-display font-bold text-5xl md:text-6xl tracking-tighter text-ink-900">
                  +<CountUp to={m.value} format={(n) => n.toString()} />
                  <span className="text-electric">{m.suffix}</span>
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500/70">
                  {m.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why-hire reveal */}
        <WhyHireReveal />

        {/* Career progression — narrative arc */}
        <div className="mt-28 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Career arc</div>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-ink-900 text-balance">
              One role at a time — every chapter built on the last.
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ol className="space-y-0">
              {careerProgression.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative grid grid-cols-12 gap-4 py-6 border-b border-navy-900/10"
                >
                  <div className="col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                    0{i + 1}
                  </div>
                  <div className="col-span-10">
                    <div className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-ink-900">
                      {c.label}
                    </div>
                    <div className="mt-1 text-ink-900/65 max-w-xl text-pretty">
                      {c.body}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Skills — grouped, no percentages */}
        <div className="mt-28 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Capabilities</div>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-ink-900 text-balance">
              What I can bring to a team, by capability.
            </h3>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillGroups.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-navy-900/10 bg-white p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-electric">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-navy-900/10" />
                  </div>
                  <h4 className="font-display font-semibold text-lg tracking-tight text-ink-900 mb-3">
                    {g.title}
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full bg-navy-50 text-navy-500"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <details className="mt-6 group rounded-2xl border border-navy-900/10 bg-white/60 p-6">
              <summary className="cursor-pointer flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500 list-none">
                <span>Full technical stack</span>
                <Plus className="h-3.5 w-3.5 transition-transform group-open:rotate-45" />
              </summary>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {fullStack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-full border border-navy-900/10 text-navy-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </details>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-24 md:mt-32 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-navy-900/10 pt-12">
          <p className="font-display text-2xl md:text-3xl tracking-tight text-ink-900 max-w-xl">
            See the full picture on the résumé page.
          </p>
          <div className="flex flex-wrap gap-3">
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

const WhyHireReveal = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-1">
          {whyHireStatements.map((line, i) => (
            <StatementRow key={line} line={line} index={i} />
          ))}
          <StatementRow
            line="And I can ship it."
            index={whyHireStatements.length - 1}
            highlight
          />
        </div>

        <div className="space-y-3">
          <motion.blockquote
            initial={{ y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-navy-900/10 bg-white p-8 md:p-10"
          >
            <span className="quote-mark text-5xl text-electric leading-none">
              &ldquo;
            </span>
            <p className="mt-4 text-2xl md:text-3xl leading-snug font-display font-medium text-ink-900 text-balance">
              The reason you can hand Suhayl a vague problem and get a shipped
              system is because he&apos;s done every job between the user and
              the model.
            </p>
            <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500">
              A note from his own website — but the evidence is below
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </div>
  );
};

const StatementRow = ({
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
      initial={{ y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={cn(
        "group flex items-baseline gap-4 py-1",
        highlight && "pt-3"
      )}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 w-6 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={cn(
          "font-display font-medium tracking-tight leading-[1.05] text-ink-900",
          highlight ? "text-3xl md:text-5xl text-electric" : "text-2xl md:text-4xl"
        )}
      >
        {line}
      </span>
    </motion.div>
  );
};

export default HireSection;
