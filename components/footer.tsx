"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { suhayl } from "@/lib/personal-brand";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
} from "@/components/ui/hover-footer";

const CYCLING_VERBS = [
  "FOUNDS.",
  "BUILDS.",
  "ORCHESTRATES.",
  "CREATES.",
  "DESIGNS.",
  "CODES.",
] as const;

const CyclingVerb = () => {
  const [index, setIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CYCLING_VERBS.length);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="relative inline-grid whitespace-nowrap align-baseline"
      style={{ minWidth: "12ch" }}
    >
      <AnimatePresence initial={false}>
        <motion.span
          key={CYCLING_VERBS[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="col-start-1 row-start-1 text-coral"
        >
          {CYCLING_VERBS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-ink-950 text-text-inverse overflow-hidden">
      {/* ── DUBAI HERO — FULL-WIDTH ─────────────────────────────────────
          Full-width background image spanning the entire component.
          Burj Khalifa + Dubai skyline dominates the frame. Dark cinematic
          gradients ensure all text reads cleanly on top.
          SUHAYL title drops lower and turns coral on hover.
      ─────────────────────────────────────────────────────────────── */}
      <section className="group relative w-full aspect-[16/9] max-h-[78vh] overflow-hidden bg-ink-950">
        {/* Full-width background image */}
        <Image
          src="/footer/footer-hero.jpg"
          alt="Dubai skyline at dusk with Burj Khalifa and Downtown Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Cinematic dark gradient — bottom-weighted for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,11,15,0.30) 0%, rgba(9,11,15,0.35) 40%, rgba(9,11,15,0.78) 80%, rgba(9,11,15,0.92) 100%)",
          }}
        />

        {/* Edge accent glows — blue left, coral right */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(39,107,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 100% 50%, rgba(255,107,74,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Film grain — cinema feel */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        {/* Content — anchored to bottom-left, overlaying the image */}
        <div className="absolute inset-0 flex items-end">
          <div className="relative w-full mx-auto max-w-[1440px] px-6 sm:px-8 pb-10 md:pb-16">
            <div className="max-w-4xl">
              {/* Pre-title */}
              <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-monoWide text-text-inverseMuted mb-4 md:mb-5 flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-coral" aria-hidden />
                <span>The reel</span>
                <span className="text-text-inverseMuted/30">/</span>
                <span>Dubai · 2026</span>
              </div>

              {/* SUHAYL — group-hover turns it coral + 2px drop; pushed lower (mt-10 → mb tight) */}
              <h2 className="font-display font-bold tracking-[-0.045em] leading-[0.86] text-text-inverse text-balance">
                <span className="block text-[clamp(2.75rem,7.5vw,6.5rem)] font-black transition-all duration-300 group-hover:text-coral group-hover:translate-y-0.5">
                  SUHAYL
                </span>
                <span className="block text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold text-text-inverse/80 mt-1">
                  DASTAGER
                </span>
              </h2>

              {/* Role line */}
              <div className="mt-5 md:mt-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-monoWide text-text-inverseMuted flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Founder</span>
                <span className="text-text-inverseMuted/30">·</span>
                <span>Engineer</span>
                <span className="text-text-inverseMuted/30">·</span>
                <span>Creator</span>
                <span className="text-text-inverseMuted/30">·</span>
                <span className="text-coral">Now</span>
              </div>

              {/* Cycling verb — coral */}
              <div className="mt-6 md:mt-8 font-display font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-tighter leading-none">
                <CyclingVerb />
              </div>

              {/* Statement */}
              <p className="mt-4 md:mt-5 max-w-xl text-sm md:text-base text-text-inverse/70 leading-relaxed text-pretty">
                Building technology, companies &amp; content.
              </p>

              {/* CTAs */}
              <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-text-inverse text-ink font-medium px-5 py-2.5 text-sm hover:bg-coral hover:text-text-inverse transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  Let&apos;s work together
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/resume"
                  download
                  className="group inline-flex items-center gap-2 rounded-full border border-text-inverse/25 text-text-inverse font-medium px-5 py-2.5 text-sm hover:border-text-inverse hover:bg-text-inverse/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  Résumé
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Top-right — SD monogram badge */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 hidden md:flex items-center gap-2.5">
          <div className="grid place-items-center h-10 w-10 rounded-full bg-text-inverse/8 ring-1 ring-text-inverse/20 backdrop-blur-sm">
            <span className="font-display font-bold text-text-inverse text-sm leading-none">SD</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted leading-tight">
            <div>Suhayl Dastager</div>
            <div className="text-text-inverseMuted/60">Personal · Brand · Film</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER GRID ────────────────────────────────────────────────── */}
      <div className="relative border-t border-ink-500/60 overflow-hidden isolate">
        <FooterBackgroundGradient />
        {/* Big editorial "SUHAYL" hover-effect watermark on the right,
            sitting behind the grid content. Same 16:9 viewBox as the source
            component, scaled to ~40% of the section's right side. */}
        <div
          aria-hidden
          className="pointer-events-auto absolute inset-y-0 right-0 hidden lg:flex items-center justify-end w-[58%]"
        >
          <TextHoverEffect
            text="SUHAYL"
            className="h-full w-full opacity-90"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 py-12 md:py-14 grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <div className="font-display font-bold text-xl tracking-tighter">
              Suhayl Dastager
            </div>
            <p className="mt-2 text-sm text-text-inverseMuted max-w-xs">
              Founder. AI Product Engineer. Tech Creator. Dubai, UAE.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={suhayl.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link-light"
              >
                LinkedIn
                <ArrowUpRight className="h-3 w-3 arrow" />
              </Link>
              <span className="text-text-inverseMuted/30">/</span>
              <Link
                href={suhayl.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link-light"
              >
                Instagram
                <ArrowUpRight className="h-3 w-3 arrow" />
              </Link>
              <span className="text-text-inverseMuted/30">/</span>
              <Link
                href={suhayl.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link-light"
              >
                GitHub
                <ArrowUpRight className="h-3 w-3 arrow" />
              </Link>
            </div>
          </div>

          <FooterCol
            title="Suhayl"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Resume", href: "/resume" },
            ]}
          />
          <FooterCol
            title="Founder"
            items={[
              { label: "Founder", href: "/founder" },
              { label: "Work", href: "/work" },
              { label: "Archive", href: "/archive" },
            ]}
          />
          <FooterCol
            title="UGC"
            items={[
              { label: "UGC", href: "/ugc" },
              { label: "Contact", href: "/contact" },
              { label: "SM Stratagem", href: suhayl.social.smStratagem, external: true },
              { label: "VoxxHire", href: suhayl.social.voxxhire, external: true },
            ]}
          />
          <FooterCol
            title="Work"
            items={[
              { label: "Experience", href: "/work" },
              { label: "Projects", href: "/archive" },
              { label: "Resume", href: "/resume" },
            ]}
          />
          <FooterCol
            title="Get in touch"
            items={[
              { label: suhayl.email, href: `mailto:${suhayl.email}` },
              { label: "Dubai · UAE", href: undefined },
            ]}
          />
        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────────────── */}
      <div className="border-t border-ink-500/60">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted">
          <div>
            © {new Date().getFullYear()} Suhayl Dastager · All rights reserved
          </div>
          <div className="flex items-center gap-4">
            <Link href="/resume" className="hover:text-text-inverse">
              Résumé
            </Link>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 hover:text-text-inverse"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string; external?: boolean }[];
}) => (
  <div className="col-span-1 md:col-span-2">
    <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted/70 mb-4">
      {title}
    </div>
    <ul className="space-y-2">
      {items.map((it, i) =>
        it.href ? (
          <li key={i}>
            <Link
              href={it.href}
              target={it.external ? "_blank" : undefined}
              rel={it.external ? "noopener noreferrer" : undefined}
              className="arrow-link-light"
            >
              {it.label}
              {it.external && (
                <ArrowUpRight className="h-3 w-3 arrow" />
              )}
            </Link>
          </li>
        ) : (
          <li key={i} className="text-sm text-text-inverseMuted/70">
            {it.label}
          </li>
        )
      )}
    </ul>
  </div>
);

export default Footer;
