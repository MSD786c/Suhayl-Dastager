"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/data";

const verbs = ["builds", "creates", "films", "codes", "executes", "markets", "orchestrates"];

const Footer = () => {
  return (
    <footer className="relative bg-ink-900 text-cream-100 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-100" aria-hidden />
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(45,108,246,0.2) 0%, rgba(45,108,246,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative">
        {/* Mega headline with cycling verb */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 pt-24 md:pt-32 pb-12">
          <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-[clamp(2.5rem,9vw,8rem)] text-cream text-balance flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
            <span>Suhayl</span>
            <span className="text-cream-100/35">·</span>
            <CyclingVerb />
          </h2>
          <p className="mt-6 max-w-md text-cream/65 text-lg">
            Products. Companies. Systems. Content. Pick the side that brought
            you in.
          </p>
        </div>

        {/* Footer grid */}
        <div className="border-t border-cream-100/10">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-12 gap-8">
            <div className="col-span-2 md:col-span-4">
              <div className="font-display font-bold text-2xl tracking-tight">
                Suhayl Dastager
              </div>
              <p className="mt-2 text-sm text-cream/60 max-w-xs">
                AI Product Engineer. Founder. Tech Creator. Dubai, UAE.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href={suhayl.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 hover:text-electric-bright"
                >
                  LinkedIn
                </Link>
                <span className="text-cream/20">·</span>
                <Link
                  href={suhayl.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 hover:text-electric-bright"
                >
                  Instagram
                </Link>
                <span className="text-cream/20">·</span>
                <Link
                  href={suhayl.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 hover:text-electric-bright"
                >
                  GitHub
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
              title="Build"
              items={[
                { label: "Founder", href: "/founder" },
                { label: "Work", href: "/work" },
                { label: "Archive", href: "/archive" },
              ]}
            />
            <FooterCol
              title="Create"
              items={[
                { label: "UGC", href: "/ugc" },
                { label: "Contact", href: "/contact" },
                { label: "SM Stratagem", href: suhayl.social.smStratagem, external: true },
                { label: "VoxxHire", href: suhayl.social.voxxhire, external: true },
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
        <div className="border-t border-cream-100/10">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45">
            <div>© {new Date().getFullYear()} Suhayl Dastager · All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link href="/resume" className="hover:text-electric-bright">
                Résumé
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 hover:text-electric-bright"
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
    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 mb-4">
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
              className="group inline-flex items-center gap-1.5 text-sm text-cream/80 hover:text-electric-bright transition-colors"
            >
              {it.label}
              {it.external && (
                <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              )}
            </Link>
          </li>
        ) : (
          <li
            key={i}
            className="text-sm text-cream/55"
          >
            {it.label}
          </li>
        )
      )}
    </ul>
  </div>
);

const CyclingVerb = () => {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % verbs.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="relative inline-block text-electric-bright"
      style={{ minWidth: "5.5ch" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={verbs[i]}
          initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {verbs[i]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default Footer;
