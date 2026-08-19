"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/personal-brand";

const Footer = () => {
  return (
    <footer className="relative bg-ink-950 text-text-inverse">
      <div>
        {/* Mega editorial line */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 pt-24 md:pt-32 pb-6 md:pb-8">
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl text-text-inverse text-balance">
            Suhayl Dastager.
          </h2>
          <p className="mt-6 max-w-md text-text-inverseMuted text-lg text-pretty">
            Products. Companies. Systems. Content. Pick the side that brought
            you in.
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
