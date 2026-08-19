"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { identity } from "@/lib/personal-brand";
import { brandVisuals } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  create: "coral",
  build: "electric",
  ship: "indigo",
} as const;

// Brand visuals mapped to each door — replaces the "random portrait" feel
// with the actual work the user came to see.
const imageMap = {
  driver: brandVisuals.Parfumix?.wide ?? "/ugc/visual-parfumix-wide.jpg",
  workspace: brandVisuals.VoxxHire?.wide ?? "/ugc/visual-voxxhire-wide.jpg",
  headshot: brandVisuals.Wrapsters?.wide ?? "/ugc/visual-wrapsters-wide.jpg",
} as const;

const bgMap = {
  create: "bg-[#FFEDE8]",
  build: "bg-[#E5EEFC]",
  ship: "bg-[#E9EAF6]",
} as const;

const ThreeDoors = () => {
  const [hover, setHover] = React.useState<string | null>(null);

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
                  {/* Image — only visible when hovered or always on mobile */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700",
                      isHover ? "opacity-100" : "opacity-0 md:opacity-0",
                      "md:group-hover:opacity-100"
                    )}
                  >
                    <Image
                      src={imageMap[pillar.imageKey as keyof typeof imageMap]}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
                  </div>

                  {/* Top label */}
                  <div
                    className={cn(
                      "relative flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-500",
                      isHover ? "text-white" : "text-navy-500"
                    )}
                  >
                    <span>{pillar.number}</span>
                    <span>{pillar.label}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Headline */}
                  <div className="relative">
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
                  <div className="relative mt-8 flex items-end justify-between">
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
