"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building, Calendar, MapPin } from "lucide-react";
import { experiences, flagshipProjects, suhayl } from "@/lib/data";

const WorkPage = () => {
  return (
    <>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="chapter mb-6">Work · 03 / Ship</div>
          <h1 className="font-display font-bold tracking-tightest leading-[0.94] text-display-xl text-ink-900 text-balance">
            I scope, design, build,
            <br />
            <span className="text-electric">and ship.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-ink-900/70 text-pretty">
            Two sides of the same work: the professional roles that built the
            foundation, and the products that came from it.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Professional experience</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Every role sharpened the next.
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {experiences.map((e, i) => (
              <motion.article
                key={`${e.company}-${e.role}`}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-6 pb-12 border-b border-navy-900/10 last:border-b-0"
              >
                <div className="col-span-12 md:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                    {e.duration}
                  </div>
                  <div className="mt-2 font-display font-semibold text-lg text-ink-900">
                    {e.company}
                  </div>
                  <div className="mt-1 text-sm text-navy-500 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {e.location}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className="font-display font-semibold text-xl text-ink-900">
                    {e.role}
                  </h3>
                  <p className="mt-2 text-ink-900/75 text-pretty">
                    {e.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-ink-900/70 flex gap-3"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-electric flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {e.metrics && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.metrics.map((m) => (
                        <span
                          key={m}
                          className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full border border-navy-900/15 text-navy-500"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected projects summary */}
      <section className="py-20 md:py-32 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Selected work</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Six flagship builds.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500 hover:text-ink-900 transition-colors"
              >
                Older projects
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flagshipProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-navy-900/10 bg-white p-6 md:p-8 hover:border-electric/40 transition-all"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-4 font-display font-bold text-2xl tracking-tight text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-900/70 text-pretty">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full bg-navy-50 text-navy-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-electric">
                  <span>{p.impact}</span>
                  <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
