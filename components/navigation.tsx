"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { primaryNav } from "@/lib/data";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-canvas/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            scrolled ? "max-w-[1320px] px-5 py-3" : "max-w-[1440px] px-6 sm:px-8 py-5"
          )}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-baseline gap-2 font-display font-bold tracking-tighter"
          >
            <span
              className={cn(
                "transition-all duration-500",
                scrolled ? "text-base" : "text-lg"
              )}
            >
              Suhayl
            </span>
            <span
              className={cn(
                "text-text-muted transition-all duration-500",
                scrolled ? "text-[10px]" : "text-[11px]"
              )}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              /Dastager
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group relative px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-ink" : "text-text-secondary hover:text-ink"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {/* Small dot indicator for active state — brief rule */}
                  {active && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-1 w-1 rounded-full bg-coral"
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "group hidden md:inline-flex items-center gap-2 rounded-lg bg-ink text-text-inverse font-medium transition-colors duration-300 hover:bg-blue",
                scrolled ? "px-3.5 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
              )}
            >
              Let&apos;s Work Together
              <ArrowUpRight
                className={cn(
                  "transition-transform",
                  scrolled ? "h-3 w-3" : "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                )}
              />
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-lg border border-border text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-canvas"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 inset-x-0 bg-canvas"
            >
              <div className="flex flex-col h-screen pt-24 pb-8 px-6">
                <nav className="flex-1 flex flex-col">
                  {primaryNav.map((item, i) => {
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="border-b border-border"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline justify-between py-5"
                        >
                          <span
                            className={cn(
                              "font-display font-bold text-4xl tracking-tighter leading-none",
                              active ? "text-coral" : "text-ink"
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="font-mono text-[10px] tracking-mono text-text-muted">
                            0{i + 1}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="pt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg bg-ink text-text-inverse font-medium px-5 py-4"
                  >
                    <span>Let&apos;s Work Together</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                  <div className="mt-6 flex items-center gap-4 text-text-muted">
                    <span className="font-mono text-[10px] tracking-mono">
                      DUBAI · UAE
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-mono text-[10px] tracking-mono">
                      2026
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
