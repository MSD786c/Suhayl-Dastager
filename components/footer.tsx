"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { suhayl } from "@/lib/personal-brand";

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
      {/* Cinematic video background — loops muted, plays inline, hidden on reduce-motion + small viewports */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <video
          src="/footer/footer-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/portfolio/work-hero.png"
          className="absolute inset-0 h-full w-full object-cover opacity-60 hidden md:block motion-reduce:hidden"
        />
        {/* Cinematic dark gradient — keeps the editorial text legible over the footage */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,11,15,0.55) 0%, rgba(9,11,15,0.65) 35%, rgba(9,11,15,0.85) 100%)",
          }}
        />
        {/* Subtle film grain via SVG turbulence — depth on the dark surface */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Mega editorial line */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 pt-24 md:pt-32 pb-6 md:pb-8">
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl text-text-inverse text-balance">
            Suhayl Dastager
            <br />
            <CyclingVerb />
          </h2>
          <p className="mt-6 max-w-md text-text-inverseMuted text-lg text-pretty">
            Founder, creator, engineer. Three equal ways to understand the work.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-text-inverse text-ink font-medium px-6 py-3.5 text-sm hover:bg-coral hover:text-white transition-colors duration-300"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Footer grid */}
        <div className="border-t border-ink-500">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-12 gap-8">
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

        {/* Bottom bar */}
        <div className="border-t border-ink-500">
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
