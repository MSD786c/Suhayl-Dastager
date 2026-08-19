"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { archivedProjects } from "@/lib/data";

const ArchivePage = () => {
  return (
    <>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-canvas">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="chapter mb-6">Archive</div>
          <h1 className="font-display font-bold tracking-tightest leading-[0.94] text-display-xl text-ink text-balance">
            Older projects,
            <br />
            <span className="quote-mark text-blue">still real.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-ink/70 text-pretty">
            Smaller builds, student-era experiments, and analytics work that
            taught me the craft. The headline projects live on the homepage and
            work page.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {archivedProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block rounded-2xl border border-border bg-white p-5 hover:border-blue/30 transition-all"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display font-bold text-lg tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/65 line-clamp-2 text-pretty">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-[0.16em] px-1.5 py-0.5 rounded-full border border-border text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted group-hover:text-blue transition-colors">
                    <span>{p.impact}</span>
                    <ArrowUpRight className="h-3 w-3" />
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

export default ArchivePage;
