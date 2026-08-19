"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Eye, Camera, Rocket, Wrench } from "lucide-react";
import { brandVisuals, ugcReels, suhayl } from "@/lib/data";
import { formatViews } from "@/components/motion-graphics";
import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating";

// 3 quick-link buttons — one per identity. Minimal, color-coded,
// filled with the accent color on hover. Coral / SM Stratagem blue / Navy.
const quickLinks = [
  {
    id: "create",
    label: "Creator",
    sub: "Tech, cars, AI",
    href: "/ugc",
    icon: Camera,
    accent: "coral",
    cta: "See portfolio",
  },
  {
    id: "build",
    label: "Founder",
    sub: "SM Stratagem",
    href: "/founder",
    icon: Rocket,
    accent: "electric",
    cta: "Read the story",
  },
  {
    id: "ship",
    label: "Shipper",
    sub: "AI · Product · Eng",
    href: "/work",
    icon: Wrench,
    accent: "navy",
    cta: "See the work",
  },
] as const;

// Map accent key → text/bg classes for the default + hover states.
// `hoverBg` is the LINK's own hover (use `hover:`, not `group-hover:` —
// the Link is itself the group, so group-hover wouldn't target it).
// `hoverText` / `hoverIcon` target children, so `group-hover:` is correct.
const accentStyles = {
  coral: {
    text: "text-coral",
    hoverBg: "hover:bg-coral-deep",
    hoverText: "group-hover:text-white",
    hoverIcon: "group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/30",
    ctaDot: "bg-coral",
  },
  electric: {
    text: "text-electric",
    hoverBg: "hover:bg-electric-deep",
    hoverText: "group-hover:text-white",
    hoverIcon: "group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/30",
    ctaDot: "bg-electric",
  },
  navy: {
    text: "text-navy",
    hoverBg: "hover:bg-navy",
    hoverText: "group-hover:text-white",
    hoverIcon: "group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/25",
    ctaDot: "bg-navy",
  },
} as const;

// 8-portrait spread — same positions as the original hero. Brings back the
// contact-sheet feel while the brand strip on the left keeps the brand story
// front-and-center.
const photos = [
  {
    src: suhayl.files.portraits.aerial,
    alt: "Dubai aerial — city of the work",
    className:
      "top-[72%] left-[58%] w-[140px] h-[180px] md:w-[170px] md:h-[220px]",
    depth: 0.6,
    rotate: -5,
  },
  {
    src: suhayl.files.portraits.vSign,
    alt: "Casual portrait",
    className:
      "top-[18%] left-[48%] w-[84px] h-[84px] md:w-[118px] md:h-[118px]",
    depth: 1,
    rotate: 3,
  },
  {
    src: suhayl.files.portraits.driver,
    alt: "Focused driver in city traffic",
    className:
      "top-[12%] left-[72%] w-[101px] h-[134px] md:w-[134px] md:h-[185px]",
    depth: 1.5,
    rotate: 4,
  },
  {
    src: suhayl.files.portraits.suv,
    alt: "SUV with Dubai skyline",
    className:
      "top-[20%] left-[92%] w-[67px] h-[67px] md:w-[101px] md:h-[101px]",
    depth: 1,
    rotate: -3,
  },
  {
    src: suhayl.files.portraits.suitFull,
    alt: "Full-length suit portrait",
    className:
      "top-[44%] left-[86%] w-[100px] h-[140px] md:w-[140px] md:h-[200px]",
    depth: 0.8,
    rotate: 3,
  },
  {
    src: suhayl.files.portraits.workspace,
    alt: "Modern workspace with laptop and plant",
    className:
      "top-[44%] left-[48%] w-[110px] h-[82px] md:w-[165px] md:h-[120px]",
    depth: 0.8,
    rotate: -2,
  },
  {
    src: suhayl.files.portraits.headshot,
    alt: "Suhayl Dastager — professional headshot",
    className:
      "top-[34%] left-[64%] w-[168px] h-[218px] md:w-[235px] md:h-[302px]",
    depth: 1,
    rotate: -2.5,
    priority: true,
  },
  {
    src: suhayl.files.portraits.suvSeated,
    alt: "Seated on SUV with Dubai skyline",
    className:
      "top-[76%] left-[78%] w-[150px] h-[112px] md:w-[185px] md:h-[140px]",
    depth: 1.5,
    rotate: 2.5,
  },
];

const Hero = () => {
  const reduce = useReducedMotion() ?? false;
  const totalViews = ugcReels.reduce((s, r) => s + r.views, 0);
  const brands = new Set(ugcReels.map((r) => r.client)).size;

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-canvas-warm pt-24 md:pt-28"
      aria-label="Suhayl Dastager — personal brand introduction"
    >
      {/* Background grid + soft gradient halo */}
      <div className="absolute inset-0 grid-overlay-light opacity-60" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 35%, rgba(45,108,246,0.10) 0%, rgba(45,108,246,0) 60%), radial-gradient(40% 30% at 20% 70%, rgba(255,107,91,0.08) 0%, rgba(255,107,91,0) 60%)",
        }}
        aria-hidden
      />

      {/* Floating 8-portrait spread — full-bleed, the contact-sheet look. */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <Floating
          sensitivity={-0.6}
          easingFactor={0.05}
          className="pointer-events-none"
        >
          {photos.map((p) => (
            <FloatingElement
              key={p.src}
              depth={p.depth}
              className={p.className}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: (p.rotate ?? 0) * 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: reduce ? 0 : p.rotate }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + (p.depth ?? 0) * 0.08,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_70px_-15px_rgba(11,31,58,0.55)] ring-1 ring-white/15 gpu no-select group pointer-events-auto"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  priority={"priority" in p ? p.priority : false}
                  sizes="(max-width: 768px) 25vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </motion.div>
            </FloatingElement>
          ))}
        </Floating>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 pt-6 md:pt-10 pb-20 md:pb-24 z-20">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="chapter mb-6 md:mb-8"
        >
          <span>Dubai · UAE</span>
          <span className="text-navy-500/60">·</span>
          <span>Available for select 2026 engagements</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          {/* LEFT — typography column (7 cols) */}
          <div className="col-span-12 md:col-span-7 relative z-20">
            <h1 className="font-display font-bold tracking-tighter leading-[1.02] pb-2 text-ink-900">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(2.5rem,7.5vw,6.5rem)]"
                >
                  Suhayl
                </motion.span>
              </span>
              <span className="block overflow-visible">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08,
                  }}
                  className="block text-[clamp(2.5rem,7.5vw,6.5rem)]"
                >
                  <span className="inline-block text-electric align-baseline -mr-1 font-display font-light translate-y-[-0.08em]">/</span>
                  Dastager
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 md:mt-8 max-w-xl text-xl md:text-2xl text-ink-900/75 leading-snug text-balance"
            >
              I build technology, companies, and content around both.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-3 max-w-lg font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-navy-500"
            >
              AI Product Engineer · Founder · Tech Creator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="#three-doors" className="btn-primary">
                Explore My World
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Work With Me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* 3 quick-link buttons — one per identity, minimal + color-on-hover */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-10 md:mt-12"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div className="h-px flex-1 bg-navy-900/10" />
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-navy-500">
                  Where do you want to go?
                </div>
                <div className="h-px flex-1 bg-navy-900/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {quickLinks.map((q, i) => {
                  const Icon = q.icon;
                  const a = accentStyles[q.accent];
                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + i * 0.08 }}
                    >
                      <Link
                        href={q.href}
                        aria-label={`${q.label} — ${q.sub}. ${q.cta}.`}
                        className={`group relative flex items-center gap-3 rounded-lg bg-canvas ring-1 ring-navy-900/8 px-3.5 py-3 transition-all duration-500 ease-editorial hover:ring-transparent ${a.hoverBg}`}
                      >
                        <span
                          className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy-900/[0.04] ring-1 ring-navy-900/8 transition-all duration-500 ease-editorial ${a.text} ${a.hoverIcon}`}
                        >
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block font-display font-semibold text-[15px] leading-tight text-ink-900 transition-colors duration-500 ease-editorial ${a.hoverText}`}
                          >
                            {q.label}
                          </span>
                          <span
                            className={`mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.18em] text-navy-500/80 transition-colors duration-500 ease-editorial ${a.hoverText} opacity-80 leading-tight`}
                          >
                            {q.sub}
                          </span>
                        </span>
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 shrink-0 ${a.text} opacity-50 transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-0 ${a.hoverText}`}
                          strokeWidth={2}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-coral"
            >
              <span>03 — Identities</span>
              <span className="hidden sm:inline text-coral/40">/</span>
              <span>06 — Projects</span>
              <span className="hidden sm:inline text-coral/40">/</span>
              <span>02 — Companies</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Editorial caption — pinned to the bottom-right of the hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="hidden md:block absolute right-6 sm:right-8 bottom-6 md:bottom-8 z-20 max-w-[280px] text-right"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-navy-500/80">
          Contact sheet · 2026 · 8 frames
        </div>
        <p className="mt-2 text-sm text-navy-500/80 italic quote-mark">
          Three sides. One person.
        </p>
      </motion.div>

      {/* Mobile photo strip — single brand visual on small screens */}
      <div className="md:hidden mt-6 -mx-6 px-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 w-max pb-2">
          {[
            { src: suhayl.files.portraits.headshot, alt: suhayl.fullName, label: "Founder" },
            ...Object.entries(brandVisuals)
              .filter(([k]) => k !== "VoxxHire")
              .map(([k, v]) => ({ src: v.card, alt: `${k} brand work`, label: k })),
          ].map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative flex-shrink-0 rounded-2xl overflow-hidden ring-1 ring-navy-900/8",
                i === 0 ? "w-56 h-72" : "w-40 h-52"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 224px, 160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/70">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 hairline z-20" />
    </section>
  );
};

const cn = (...args: (string | undefined | false | null)[]) =>
  args.filter(Boolean).join(" ");

export default Hero;
