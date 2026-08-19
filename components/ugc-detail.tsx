"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ugcPackages, ugcCaseStudies, suhayl } from "@/lib/data";

const UGCDetail = () => {
  return (
    <>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500 hover:text-ink-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" />
            Suhayl Dastager
          </Link>
          <div className="chapter mb-6">Creator · 01 / Create</div>
          <h1 className="font-display font-bold tracking-tightest leading-[0.94] text-display-xl text-ink-900 text-balance">
            Tech content that
            <br />
            <span className="text-coral quote-mark">doesn&apos;t feel like an ad.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-ink-900/70 text-pretty">
            I create at the intersection of cars, technology, and founder life.
            The differentiator is simple: I don&apos;t just talk about software —
            I build it.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 border-y border-navy-900/10 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {[
              "Software",
              "Automotive",
              "AI",
              "Consumer Tech",
              "Founder Content",
              "Brand Work",
            ].map((cat) => (
              <div
                key={cat}
                className="rounded-2xl border border-navy-900/10 p-4 text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                  Category
                </div>
                <div className="mt-2 font-display font-semibold text-ink-900">
                  {cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 md:py-32 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Selected work</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Brand work, with receipts.
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {ugcCaseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="rounded-3xl border border-navy-900/10 bg-white p-8 md:p-10"
              >
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                      {cs.client} · {cs.industry}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500/60">
                      {cs.year}
                    </div>
                    <h3 className="mt-4 font-display font-bold text-2xl tracking-tight text-ink-900">
                      {cs.brief}
                    </h3>
                    <p className="mt-3 text-sm text-navy-500">{cs.role}</p>
                  </div>
                  <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-2">
                        Concept
                      </div>
                      <p className="text-ink-900/75 text-pretty">
                        {cs.concept}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-2">
                        Deliverables
                      </div>
                      <ul className="space-y-1.5">
                        {cs.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-sm text-ink-900/75 flex gap-2"
                          >
                            <span className="mt-2 h-1 w-1 rounded-full bg-coral flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-2">
                        Results
                      </div>
                      <ul className="space-y-1.5">
                        {cs.results.map((r, i) => (
                          <li
                            key={i}
                            className="text-sm text-ink-900 font-medium"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-2">
                        Usage
                      </div>
                      <p className="text-ink-900/75">{cs.usage}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Packages</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Pick a shape, scope against the brief.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ugcPackages.map((p, i) => (
              <div
                key={p.id}
                className="rounded-2xl border border-navy-900/10 p-6 md:p-8 hover:border-coral/40 hover:shadow-[0_30px_60px_-30px_rgba(255,107,91,0.4)] transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                    Package 0{i + 1}
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-900/65">{p.best}</p>
                <ul className="mt-5 space-y-1.5">
                  {p.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-ink-900/75 flex gap-2"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-coral flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?type=ugc&package=${p.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-coral hover:gap-3 transition-all"
                >
                  {p.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UGCDetail;
