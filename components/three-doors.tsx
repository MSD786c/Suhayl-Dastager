"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { identity, suhayl } from "@/lib/personal-brand";
import { cn } from "@/lib/utils";

const accentMap = {
  create: "coral",
  build: "electric",
  ship: "indigo",
} as const;

// Portrait per door — different photos of Suhayl, cycled on hover.
// Each door also gets a small "alt" gallery that swaps on hover so visitors
// get to see more than one photo per identity.
const doorPortraits: Record<
  string,
  { primary: string; cycle: string[]; alt: string }
> = {
  create: {
    primary: suhayl.files.portraits.driver,
    cycle: [
      suhayl.files.portraits.driver,
      suhayl.files.portraits.vSign,
      suhayl.files.portraits.suv,
    ],
    alt: "Suhayl in the city — creator mode",
  },
  build: {
    primary: suhayl.files.portraits.suitFull,
    cycle: [
      suhayl.files.portraits.suitFull,
      suhayl.files.portraits.headshot,
      suhayl.files.portraits.aerial,
    ],
    alt: "Suhayl in founder mode — suit and skyline",
  },
  ship: {
    primary: suhayl.files.portraits.workspace,
    cycle: [
      suhayl.files.portraits.workspace,
      suhayl.files.portraits.suvSeated,
      suhayl.files.portraits.driver,
    ],
    alt: "Suhayl at work — engineering mode",
  },
};

const bgMap = {
  create: "bg-[#FFEDE8]",
  build: "bg-[#E5EEFC]",
  ship: "bg-[#E9EAF6]",
} as const;

const ThreeDoors = () => {
  const [hover, setHover] = React.useState<string | null>(null);
  // Per-door cycle index — advances every `cycleMs` while hovered.
  const [cycleIdx, setCycleIdx] = React.useState<Record<string, number>>({});
  const cycleMs = 1400;

  React.useEffect(() => {
    if (!hover) return;
    const id = setInterval(() => {
      setCycleIdx((prev) => {
        const current = prev[hover] ?? 0;
        const next = (current + 1) % doorPortraits[hover].cycle.length;
        return { ...prev, [hover]: next };
      });
    }, cycleMs);
    return () => clearInterval(id);
  }, [hover]);

  // Reset cycle on hover change
  React.useEffect(() => {
    if (hover) {
      setCycleIdx((prev) => ({ ...prev, [hover]: 0 }));
    }
  }, [hover]);

  return (
    <section
      id="three-doors"
      className="relative py-24 md:py-36 bg-canvas-warm"
      aria-label="Choose your path"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-4">The three doors</div>
            <h2 className="font-display font-bold tracking-tighter leading-[1.02] text-display-md text-ink-900 text-balance">
              Why are you here?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-lg text-ink-900/70 max-w-md text-pretty">
              Suhayl is one person. Three entry points. Pick the side that
              brought you in — the rest of the site will still be here.
            </p>
          </div>
        </div>

        {/* Doors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 h-[680px] md:h-[560px]">
          {identity.pillars.map((pillar, i) => {
            const isHover = hover === pillar.id;
            const anyHover = hover !== null;
            const portraits = doorPortraits[pillar.id];
            const idx = cycleIdx[pillar.id] ?? 0;
            const currentPhoto = portraits.cycle[idx] ?? portraits.primary;
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                onMouseEnter={() => setHover(pillar.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(pillar.id)}
                onBlur={() => setHover(null)}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-navy-900/10 transition-all duration-700 ease-editorial",
                  bgMap[pillar.id as keyof typeof bgMap],
                  "h-full"
                )}
                style={{
                  flex: anyHover ? (isHover ? 1.6 : 0.7) : 1,
                }}
              >
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 p-7 md:p-8 flex flex-col"
                >
                  {/* Portrait — visible on hover, cycles through photos of Suhayl */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700",
                      isHover ? "opacity-100" : "opacity-0 md:opacity-0",
                      "md:group-hover:opacity-100"
                    )}
                  >
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={`${pillar.id}-${idx}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentPhoto}
                          alt={portraits.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
                      </motion.div>
                    </AnimatePresence>
                    {/* Cycle indicator dots */}
                    {isHover && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-1.5">
                        {portraits.cycle.map((_, di) => (
                          <span
                            key={di}
                            aria-hidden
                            className={cn(
                              "h-1 rounded-full transition-all duration-500",
                              di === idx ? "w-5 bg-white" : "w-1.5 bg-white/40"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Top label */}
                  <div
                    className={cn(
                      "relative flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 z-[4]",
                      isHover ? "text-white" : "text-navy-500"
                    )}
                  >
                    <span>{pillar.number}</span>
                    <span>{pillar.label}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Headline */}
                  <div className="relative z-[4]">
                    <h3
                      className={cn(
                        "font-display font-bold leading-[1.05] tracking-tighter transition-colors duration-500",
                        "text-3xl md:text-4xl lg:text-[2.6rem]",
                        isHover ? "text-white" : "text-ink-900"
                      )}
                    >
                      {pillar.tagline}
                    </h3>
                    <AnimatePresence>
                      {isHover && (
                        <motion.p
                          initial={{ y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 text-sm text-white/85 max-w-sm text-pretty"
                        >
                          {pillar.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer row */}
                  <div className="relative mt-8 flex items-end justify-between z-[4]">
                    <div
                      className={cn(
                        "flex flex-wrap gap-2 transition-colors duration-500",
                        isHover ? "text-white" : "text-navy-500"
                      )}
                    >
                      {pillar.focus.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border",
                            isHover
                              ? "border-white/30 text-white/85"
                              : "border-navy-900/15 text-navy-500"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className={cn(
                        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-500",
                        isHover ? "text-white" : "text-ink-900"
                      )}
                    >
                      {pillar.cta}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500/70 md:hidden">
          Tap a panel to enter.
        </p>
      </div>
    </section>
  );
};

export default ThreeDoors;
