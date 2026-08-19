"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { suhayl } from "@/lib/personal-brand";

type PracticeCard = {
  id: "founder" | "ugc";
  label: string;
  href: string;
  src: string;
  alt: string;
  dotClass: string;
};

const practiceCards: PracticeCard[] = [
  {
    id: "founder",
    label: "Founder",
    href: "/founder",
    src: suhayl.files.portraits.driver,
    alt: "Suhayl behind the wheel — building from the driver's seat",
    dotClass: "bg-blue",
  },
  {
    id: "ugc",
    label: "UGC",
    href: "/ugc",
    src: suhayl.files.portraits.vSign,
    alt: "Suhayl creating content at the intersection of cars and tech",
    dotClass: "bg-coral",
  },
];

const metricItems = [
  { num: "01", k: "Founder", v: "SM Stratagem · VoxxHire", dot: "bg-blue" },
  { num: "02", k: "Work", v: "AI · Product · Automation", dot: "bg-blue" },
  { num: "03", k: "UGC", v: "Cars · Tech · Software", dot: "bg-coral" },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

const Hero = () => {
  const reduceMotion = useReducedMotion();
  // When reduced motion is on, snap decorative motion to instant.
  // State-change visuals (opacity ending at 1) still resolve correctly.
  const mDur = reduceMotion ? 0 : undefined;

  return (
    <section
      className="relative overflow-hidden bg-canvas-hero pt-20 md:pt-24 pb-8 md:pb-10"
      aria-label="Suhayl Dastager — personal brand introduction"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Eyebrow — mono, full-width, sits above the row */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: mDur ?? 0.6, ease: EASE }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-monoWide text-text-muted"
        >
          <span>Dubai · UAE</span>
          <span aria-hidden className="text-text-muted/70 select-none">
            ─────
          </span>
          <span>Available for select 2026 engagements</span>
        </motion.div>

        {/* Main row: type on the left, photo + 2 practice cards on the right */}
        <div className="mt-5 md:mt-7 grid grid-cols-12 gap-4 md:gap-6 items-end">
          {/* LEFT — massive editorial type */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="font-display font-bold tracking-tighter leading-[0.94] text-ink text-balance">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: mDur ?? 0.9, ease: EASE }}
                  className="block text-display-xl"
                >
                  One person.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: mDur ?? 0.9, ease: EASE, delay: reduceMotion ? 0 : 0.08 }}
                  className="block text-display-xl"
                >
                  Three practices.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: mDur ?? 0.7, delay: reduceMotion ? 0 : 0.4, ease: EASE }}
              className="mt-5 md:mt-6 max-w-md text-base md:text-lg text-text-secondary leading-snug text-balance"
            >
              I build technology, companies &amp; content around both.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: mDur ?? 0.6, delay: reduceMotion ? 0 : 0.55, ease: EASE }}
              className="mt-2 font-mono text-[10.5px] uppercase tracking-monoWide text-text-muted"
            >
              Founder · AI Product Engineer · Tech Creator — Dubai
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: mDur ?? 0.7, delay: reduceMotion ? 0 : 0.7, ease: EASE }}
              className="mt-5 md:mt-6 flex flex-wrap items-center gap-3"
            >
              <Link href="#three-doors" className="btn-primary">
                Explore My Work
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Work With Me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — one big photo + 2 small practice cards stacked on the right of it */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-5 gap-3 md:gap-4">
              {/* Big portrait — headshot, 3/5 of the right column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: mDur ?? 1.0, delay: reduceMotion ? 0 : 0.3, ease: EASE }}
                className={cn(
                  "col-span-3 relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink"
                )}
              >
                <Image
                  src={suhayl.files.portraits.headshot}
                  alt="Suhayl Dastager — Founder, AI Product Engineer, Tech Creator"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-14 text-white">
                  <p className="font-mono text-[9.5px] uppercase tracking-monoWide text-white/60">
                    One person
                  </p>
                  <p className="mt-1 text-sm font-medium leading-tight">
                    Suhayl Dastager
                  </p>
                </div>
              </motion.div>

              {/* Stack of 2 practice cards — 2/5 of the right column, stacked vertically */}
              <div className="col-span-2 flex flex-col gap-3 md:gap-4">
                {practiceCards.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: mDur ?? 0.8, delay: reduceMotion ? 0 : 0.45 + i * 0.1, ease: EASE }}
                    className="relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1024px) 33vw, 17vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3 pb-3 pt-10 text-white">
                      <span
                        aria-hidden
                        className={cn(
                          "h-1.5 w-1.5 shrink-0 rounded-full",
                          p.dotClass
                        )}
                      />
                      <span className="text-[11px] font-medium uppercase tracking-mono">
                        {p.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip — hairline divider + tight 3-col metric strip with smaller numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: mDur ?? 0.7, delay: reduceMotion ? 0 : 0.9 }}
          className="mt-8 md:mt-10 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-3"
        >
          {metricItems.map((m) => (
            <div key={m.k} className="flex items-start gap-2.5">
              <span
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                  m.dot
                )}
                aria-hidden
              />
              <div className="min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                    {m.num}
                  </span>
                  <span className="font-display text-sm font-semibold tracking-tight text-ink leading-tight">
                    {m.k}
                  </span>
                </div>
                <p className="mt-0.5 text-xs leading-tight text-text-secondary">
                  {m.v}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
