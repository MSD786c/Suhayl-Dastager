"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/personal-brand";

const Hero = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      className="relative bg-canvas pt-28 md:pt-36 pb-10 md:pb-12"
      aria-label="Suhayl Dastager — personal brand introduction"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 md:mb-12 font-mono text-[11px] uppercase tracking-monoWide text-text-muted"
        >
          <span>Dubai · UAE</span>
          <span className="h-px w-8 bg-border" />
          <span>Available for select 2026 engagements</span>
        </motion.div>

        {/* Hero grid: large type left, large photo right */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          {/* LEFT — editorial type (8 cols) */}
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-ink text-balance">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-display-2xl"
                >
                  Suhayl
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08,
                  }}
                  className="block text-display-2xl"
                >
                  <span
                    className="inline-block align-baseline text-coral mr-3 font-display"
                    style={{ transform: "translateY(-0.06em)" }}
                  >
                    /
                  </span>
                  Dastager
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-10 max-w-2xl text-xl md:text-2xl text-text-secondary leading-snug text-balance"
            >
              I build technology, companies &amp; content around both.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-mono text-xs md:text-sm uppercase tracking-monoWide text-text-muted"
            >
              Founder · AI Product Engineer · Tech Creator — Dubai
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
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

          {/* RIGHT — single editorial portrait (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-4 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={suhayl.files.portraits.headshot}
                alt="Suhayl Dastager"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            {/* Editorial caption pinned under the photo */}
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
              <span>Suhayl · Dubai · 2026</span>
              <span>01 / 01</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip — restrained meta, no ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 md:mt-10 border-t border-border pt-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { k: "02", v: "Companies" },
            { k: "06", v: "Products shipped" },
            { k: "03", v: "Identities" },
            { k: "01", v: "Person" },
          ].map((m) => (
            <div key={m.v}>
              <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                {m.v}
              </div>
              <div className="mt-2 font-display font-bold text-3xl tracking-tighter text-ink">
                {m.k}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
