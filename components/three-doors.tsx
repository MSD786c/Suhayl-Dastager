"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { identity } from "@/lib/personal-brand";
import { cn } from "@/lib/utils";

const ThreeDoors = () => {
  return (
    <section
      id="three-doors"
      className="relative bg-canvas border-t border-border"
      aria-label="Choose your path"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-10 md:py-14">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">The three doors</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-lg text-ink text-balance">
              Why are you
              <br />
              here?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-lg text-text-secondary max-w-md text-pretty">
              One person. Three entry points. Pick the side that brought you
              in - the rest of the site will still be here.
            </p>
          </div>
        </div>

        {/* Doors - editorial text-led rows */}
        <div className="border-t border-border">
          {identity.pillars.map((pillar, i) => {
            const isCoral = pillar.accent === "coral";
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-border"
              >
                <Link
                  href={pillar.href}
                  className="group relative block py-10 md:py-14"
                >
                  <div className="grid grid-cols-12 gap-6 items-baseline">
                    {/* Marker column */}
                    <div className="col-span-2 md:col-span-1 flex items-baseline gap-2">
                      <span
                        className="font-mono text-xs tracking-mono text-text-muted"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {pillar.number}
                      </span>
                      {/* Accent dot - brief: "small coral or blue indicator" */}
                      <span
                        aria-hidden
                        className={cn(
                          "h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150",
                          isCoral ? "bg-coral" : "bg-blue"
                        )}
                      />
                    </div>

                    {/* Label column */}
                    <div className="col-span-10 md:col-span-3">
                      <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[0.95] text-ink group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
                        {pillar.label}
                      </h3>
                      <div
                        className={cn(
                          "mt-2 font-mono text-[10px] uppercase tracking-monoWide",
                          isCoral ? "text-coral" : "text-blue"
                        )}
                      >
                        {pillar.tagline}
                      </div>
                    </div>

                    {/* Description column */}
                    <div className="col-span-12 md:col-span-6">
                      <p className="text-text-secondary text-base md:text-lg max-w-2xl text-pretty leading-relaxed">
                        {pillar.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                        {pillar.focus.map((f, fi) => (
                          <span key={f}>
                            {f}
                            {fi < pillar.focus.length - 1 && (
                              <span className="ml-4 text-text-muted/40">
                                /
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA column */}
                    <div className="col-span-12 md:col-span-2 flex md:justify-end items-baseline">
                      <span className="arrow-link">
                        {pillar.cta}
                        <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-monoWide text-text-muted md:hidden">
          Tap a row to enter.
        </p>
      </div>
    </section>
  );
};

export default ThreeDoors;
