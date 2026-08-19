"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { primaryNav, suhayl } from "@/lib/data";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setCompact(window.scrollY > 220);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl bg-canvas-warm/75 border-b border-navy-900/8"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            compact ? "max-w-[1320px] px-5 py-3" : "max-w-[1440px] px-6 sm:px-8 py-5"
          )}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display font-bold tracking-tight"
          >
            <span
              className={cn(
                "relative grid place-items-center rounded-full overflow-hidden bg-navy-50 transition-all duration-500 ring-1 ring-navy-900/10 group-hover:ring-electric/60",
                compact ? "h-7 w-7" : "h-9 w-9"
              )}
            >
              <Image
                src={suhayl.files.portraits.face}
                alt="Suhayl Dastager"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span
              className={cn(
                "transition-all duration-500",
                compact ? "text-sm" : "text-base"
              )}
            >
              Suhayl
              <span className="text-navy-500"> Dastager</span>
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-3.5 py-2 text-sm font-medium text-ink-900/70 hover:text-ink-900 transition-colors"
              >
                {item.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-electric transition-transform duration-500 origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "group hidden md:inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream font-medium transition-all duration-500 hover:bg-electric",
                compact ? "px-3.5 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
              )}
            >
              Let&apos;s Work Together
              <ArrowUpRight className={cn("transition-all", compact ? "h-3 w-3" : "h-4 w-4 group-hover:rotate-45")} />
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-navy-900/15 text-ink-900"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 inset-x-0 bg-canvas-warm rounded-b-3xl p-6 pt-24 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-navy-900/8 py-4 font-display text-2xl font-semibold tracking-tight"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-navy-500">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 text-cream font-medium px-5 py-3.5 text-sm"
                >
                  Let&apos;s Work Together
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
