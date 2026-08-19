"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { experiences, flagshipProjects } from "@/lib/data";

const WorkPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-canvas">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="eyebrow mb-6">03 / Work</div>
          <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl text-ink text-balance">
            I scope, design, build,
            <br />
            <span className="text-blue">and ship.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-text-secondary text-pretty">
            Two sides of the same work: the professional roles that built the
            foundation, and the products that came from it.
          </p>
        </div>
      </section>

      {/* Experience — editorial rows */}
      <section className="py-24 md:py-32 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">Professional experience</div>
              <h2 className="font-display font-bold tracking-tighter text-display-md text-ink text-balance">
                Every role sharpened the next.
              </h2>
            </div>
          </div>

          <div className="border-t border-border">
            {experiences.map((e, i) => (
              <motion.article
                key={`${e.company}-${e.role}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-6 py-6 md:py-8 border-b border-border"
              >
                <div className="col-span-12 md:col-span-4">
                  <div
                    className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {e.duration}
                  </div>
                  <div className="mt-2 font-display font-semibold text-lg text-ink">
                    {e.company}
                  </div>
                  <div className="mt-1 text-sm text-text-muted flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {e.location}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    {e.role}
                  </h3>
                  <p className="mt-2 text-text-secondary text-pretty">
                    {e.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-secondary flex gap-3"
                      >
                        <span
                          className="font-mono text-[10px] text-blue mt-1.5 shrink-0"
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          ·
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {e.metrics && (
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                      {e.metrics.join(" · ")}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected projects — editorial rows */}
      <section className="py-24 md:py-32 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">Selected work</div>
              <h2 className="font-display font-bold tracking-tighter text-display-md text-ink text-balance">
                Six flagship builds.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <Link href="/archive" className="arrow-link">
                Older projects
                <ArrowUpRight className="h-3.5 w-3.5 arrow" />
              </Link>
            </div>
          </div>

          <div className="border-t border-border">
            {flagshipProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-border"
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block py-6 md:py-8"
                >
                  <div className="grid grid-cols-12 gap-4 items-baseline">
                    <div
                      className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-blue"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      0{i + 1}
                    </div>
                    <div className="col-span-10 md:col-span-4">
                      <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-ink group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
                        {p.name}
                      </h3>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                        {p.category} · {p.year}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 text-text-secondary text-pretty">
                      {p.description}
                    </div>
                    <div className="col-span-12 md:col-span-2 flex md:justify-end">
                      <span className="arrow-link">
                        Read
                        <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
