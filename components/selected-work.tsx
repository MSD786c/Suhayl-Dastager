"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { flagshipProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

const SelectedWork = () => {
  return (
    <section
      id="work"
      className="relative py-28 md:py-40 bg-canvas-warm"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">Selected work</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-display-lg text-ink-900 text-balance">
              Six projects, chosen
              <br />
              <span className="quote-mark text-electric">on impact.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-ink-900/70 text-pretty">
              Everything else lives in the archive — still real, just not the
              point anymore.
            </p>
            <Link
              href="/archive"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500 hover:text-ink-900 transition-colors"
            >
              Open the archive
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* The grid — editorial, 2-col with featured hero cards.
            We use auto-rows-fr so pair cards stretch to match the tallest
            sibling and items-stretch so the cards fill the row. */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-fr items-stretch">
          {/* Hero: VoxxHire — full width */}
          <ProjectCard project={flagshipProjects[0]} index={0} hero />

          {/* Pair 1 */}
          <ProjectCard project={flagshipProjects[1]} index={1} />
          <ProjectCard project={flagshipProjects[2]} index={2} />

          {/* Pair 2 */}
          <ProjectCard project={flagshipProjects[3]} index={3} />
          <ProjectCard project={flagshipProjects[4]} index={4} />

          {/* Hero: MoneyMentor — full width */}
          {flagshipProjects[5] && (
            <ProjectCard project={flagshipProjects[5]} index={5} hero />
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  hero = false,
}: {
  project: (typeof flagshipProjects)[number];
  index: number;
  hero?: boolean;
}) => {
  // Two layouts: hero (full width, larger visual) or standard (half width, compact)
  const layout = hero ? "col-span-1 md:col-span-12" : "col-span-1 md:col-span-6";
  // Fixed visual heights so cards line up across rows regardless of text length.
  const visualHeight = hero ? "h-[260px] md:h-[420px]" : "h-[220px] md:h-[300px]";

  return (
    <motion.div
      initial={{ y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className={cn("group h-full flex", layout)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "relative block overflow-hidden rounded-3xl border transition-colors duration-500 h-full w-full flex flex-col",
          project.tone === "dark"
            ? "bg-ink-900 border-cream-100/10 text-cream"
            : "bg-white border-navy-900/10 text-ink-900"
        )}
      >
        {/* Top metadata bar */}
        <div
          className={cn(
            "flex items-center justify-between px-6 md:px-8 py-5 border-b font-mono text-[10px] uppercase tracking-[0.22em] flex-shrink-0",
            project.tone === "dark"
              ? "border-cream-100/10 text-cream/55"
              : "border-navy-900/10 text-navy-500"
          )}
        >
          <span>
            {String(index + 1).padStart(2, "0")} · {project.category}
          </span>
          <span>{project.year}</span>
        </div>

        {/* Visual area — fixed height for consistent alignment */}
        <div
          className={cn(
            "relative overflow-hidden flex-shrink-0",
            visualHeight,
            project.tone === "dark" ? "bg-ink-800" : "bg-canvas-muted"
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <ProjectPlaceholder project={project} />
          )}
          <div
            className={cn(
              "absolute inset-0",
              project.tone === "dark"
                ? "bg-gradient-to-b from-transparent to-ink-900/40"
                : "bg-gradient-to-b from-transparent to-white/0"
            )}
          />
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.url && (
              <span
                className={cn(
                  "grid place-items-center h-9 w-9 rounded-full backdrop-blur-sm",
                  project.tone === "dark"
                    ? "bg-cream/15 text-cream"
                    : "bg-ink-900/85 text-cream"
                )}
              >
                <ExternalLink className="h-4 w-4" />
              </span>
            )}
            {project.repo && (
              <span
                className={cn(
                  "grid place-items-center h-9 w-9 rounded-full backdrop-blur-sm",
                  project.tone === "dark"
                    ? "bg-cream/15 text-cream"
                    : "bg-ink-900/85 text-cream"
                )}
              >
                <Github className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>

        {/* Body — grows to fill remaining height so pair cards stretch to match */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <h3 className="font-display font-bold tracking-tightest text-2xl md:text-3xl leading-[1.05] text-balance">
            {project.name}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm md:text-base max-w-xl text-pretty",
              project.tone === "dark" ? "text-cream/70" : "text-ink-900/70"
            )}
          >
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.stack.slice(0, 4).map((t) => (
              <span
                key={t}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full border",
                  project.tone === "dark"
                    ? "border-cream-100/15 text-cream/65"
                    : "border-navy-900/15 text-navy-500"
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            className={cn(
              "mt-auto pt-6 border-t flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em]",
              project.tone === "dark"
                ? "border-cream-100/10 text-cream/55"
                : "border-navy-900/10 text-navy-500"
            )}
          >
            <span>{project.impact}</span>
            <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Read case study
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectPlaceholder = ({
  project,
}: {
  project: (typeof flagshipProjects)[number];
}) => {
  // For VoxxHire, render a recruiter dashboard mockup.
  if (project.slug === "voxxhire") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-ink-900 to-navy-900 p-5 md:p-8 flex flex-col">
        {/* Window chrome */}
        <div className="flex items-center justify-between text-cream/55">
          <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.18em]">
            Recruiter · Dashboard
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream-100/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream-100/20" />
          </div>
        </div>

        {/* Top stats row */}
        <div className="mt-4 md:mt-5 grid grid-cols-3 gap-2 md:gap-3">
          {[
            { label: "Candidates", value: "247" },
            { label: "Avg score", value: "8.4" },
            { label: "Shortlisted", value: "32" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-md bg-cream/[0.06] border border-cream/10 px-2.5 py-2"
            >
              <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-cream/55">
                {s.label}
              </div>
              <div className="mt-0.5 font-display font-bold text-base md:text-xl text-cream">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Candidate list — fills the rest */}
        <div className="flex-1 mt-3 md:mt-4 space-y-1.5 md:space-y-2">
          {[
            { name: "Aisha M.", role: "CS · NYUAD", score: 9.2, color: "#FF6B5B" },
            { name: "Daniel R.", role: "EE · KAIST", score: 8.9, color: "#A9C7FF" },
            { name: "Priya S.", role: "AI · BITS", score: 8.7, color: "#A9C7FF" },
            { name: "Yusuf K.", role: "ME · AUC", score: 8.5, color: "#A9C7FF" },
            { name: "Lina H.", role: "DS · UBC", score: 8.3, color: "#A9C7FF" },
            { name: "Omar F.", role: "CS · AUS", score: 8.1, color: "#A9C7FF" },
          ].map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-2.5 rounded-md bg-cream/[0.05] border border-cream/[0.08] px-2.5 py-1.5"
            >
              <div
                className="h-5 w-5 rounded-full flex-shrink-0 grid place-items-center font-mono text-[8px] font-bold text-ink-900"
                style={{ background: c.color }}
              >
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] md:text-[11px] text-cream truncate leading-tight">
                  {c.name}
                </div>
                <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.14em] text-cream/45 truncate leading-tight">
                  {c.role}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="h-1 w-10 md:w-14 rounded-full bg-cream/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(c.score / 10) * 100}%`, background: c.color }}
                  />
                </div>
                <div className="font-mono text-[10px] md:text-[11px] font-semibold text-cream w-6 text-right">
                  {c.score.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2.5 border-t border-cream/10 flex items-center justify-between font-mono text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-cream/55">
          <span>247 candidates · rubric v3</span>
          <span className="text-electric-bright">AI scored · live</span>
        </div>
      </div>
    );
  }
  // Document-Flow Automator — n8n pipeline mockup
  if (project.slug === "document-flow-automator") {
    return (
      <div className="absolute inset-0 grid grid-cols-3 gap-3 p-6">
        <div className="col-span-2 rounded-xl bg-ink-900 p-4 text-cream">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream/55">
            n8n pipeline
          </div>
          <div className="mt-3 space-y-1.5">
            {["Zoho intake", "GPT-4 validation", "Twilio → summary"].map(
              (n) => (
                <div
                  key={n}
                  className="rounded-md bg-cream/10 px-2.5 py-1.5 text-[10px] font-mono"
                >
                  {n}
                </div>
              )
            )}
          </div>
        </div>
        <div className="rounded-xl bg-ink-900 grid place-items-center text-cream">
          <div className="font-display font-bold text-3xl">40%</div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream/55">
            faster reviews
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden />
  );
};

export default SelectedWork;
