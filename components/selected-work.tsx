"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { flagshipProjects, suhayl } from "@/lib/data";
import { cn } from "@/lib/utils";

const SelectedWork = () => {
  // Show 5 flagship - the rest live in /archive per brief.
  const featured = flagshipProjects.slice(0, 5);
  const [hero, ...rest] = featured;

  return (
    <section
      id="work"
      className="relative bg-canvas border-t border-border"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-10 md:py-14">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">Selected work</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-lg text-ink text-balance">
              Five projects,
              <br />
              chosen on impact.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-text-secondary text-pretty">
              Everything else lives in the archive - still real, just not the
              point anymore.
            </p>
            <Link href="/archive" className="arrow-link mt-5">
              Open the archive
              <ArrowUpRight className="h-3.5 w-3.5 arrow" />
            </Link>
          </div>
        </div>

        {/* Hero project */}
        <FeaturedHero project={hero} />

        {/* 4 medium projects - 2x2 grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedHero = ({
  project,
}: {
  project: (typeof flagshipProjects)[number];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
      >
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end pb-6 border-b border-border">
          {/* Meta column */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
              <span style={{ fontVariantNumeric: "tabular-nums" }}>01</span>
              <span className="h-px w-8 bg-border" />
              <span>{project.category}</span>
              <span className="h-px w-8 bg-border" />
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {project.year}
              </span>
            </div>

            <h3 className="mt-6 font-display font-bold text-5xl md:text-7xl tracking-tighter leading-[0.95] text-ink text-balance group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
              {project.name}
            </h3>

            <p className="mt-5 text-lg text-text-secondary max-w-md text-pretty">
              {project.problem}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md font-mono text-[10px] uppercase tracking-monoWide">
              <div className="text-text-muted">Role</div>
              <div className="text-ink">{project.role}</div>
              <div className="text-text-muted">Outcome</div>
              <div className="text-ink">{project.outcome}</div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="arrow-link">
                Read case study
                <ArrowUpRight className="h-4 w-4 arrow" />
              </span>
              {project.url && (
                <>
                  <span className="text-text-muted/30">/</span>
                  <span className="arrow-link text-text-secondary">
                    Visit
                    <ExternalLink className="h-3.5 w-3.5 arrow" />
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Visual column */}
          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-canvas-muted">
              {project.slug === "document-flow-automator" ? (
                <Image
                  src={suhayl.files.brands.documentFlowAutomator}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={project.image ?? suhayl.files.portraits.workspace}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedCard = ({
  project,
  index,
}: {
  project: (typeof flagshipProjects)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block pb-6 border-b border-border"
      >
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                0{index + 2}
              </span>
              <span className="h-px w-8 bg-border" />
              <span>{project.category}</span>
            </div>

            <h3 className="mt-4 font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[0.95] text-ink group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
              {project.name}
            </h3>

            <p className="mt-3 text-text-secondary max-w-md text-pretty">
              {project.problem}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 max-w-md font-mono text-[10px] uppercase tracking-monoWide">
              <div className="text-text-muted">Role</div>
              <div className="text-ink truncate">{project.role}</div>
              <div className="text-text-muted">Outcome</div>
              <div className="text-ink truncate">{project.outcome}</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="arrow-link">
                Read
                <ArrowUpRight className="h-3.5 w-3.5 arrow" />
              </span>
              {project.repo && (
                <>
                  <span className="text-text-muted/30">/</span>
                  <span className="arrow-link text-text-secondary">
                    Source
                    <Github className="h-3.5 w-3.5 arrow" />
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 order-first md:order-last">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-canvas-muted">
              {project.slug === "document-flow-automator" ? (
                <Image
                  src={suhayl.files.brands.documentFlowAutomator}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={project.image ?? suhayl.files.portraits.workspace}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SelectedWork;
