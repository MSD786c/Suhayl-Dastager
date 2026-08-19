"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/motion-graphics";
import { ugcReels } from "@/lib/data";

const totalViews = ugcReels.reduce((s, r) => s + r.views, 0);
const totalBrands = new Set(
  ugcReels.filter((r) => r.client !== "Personal" && r.client !== "Personal / Spec").map((r) => r.client)
).size;

export const HeroMetrics = () => {
  return (
    <section
      aria-label="Quick metrics"
      className="relative border-y border-navy-900/10 bg-canvas-muted/60 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-900/10">
          {[
            { label: "Live views", value: totalViews, format: (n: number) => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M+` : `${(n / 1_000).toFixed(0)}K+`, accent: "coral" as const },
            { label: "Videos shipped", value: 10, format: (n: number) => `${n}+`, accent: "electric" as const },
            { label: "Brands", value: totalBrands, format: (n: number) => `${n}`, accent: "indigo" as const },
            { label: "Companies built", value: 2, format: (n: number) => `${n}`, accent: "ink" as const },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              className="px-4 md:px-8 py-4 md:py-5 first:pl-0 last:pr-0"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                {m.label}
              </div>
              <div
                className={cn_local(
                  "mt-1 font-display font-bold text-2xl md:text-3xl tracking-tighter",
                  m.accent === "coral" && "text-coral",
                  m.accent === "electric" && "text-electric",
                  m.accent === "indigo" && "text-indigo-800",
                  m.accent === "ink" && "text-ink-900"
                )}
              >
                <CountUp to={m.value} format={m.format} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function cn_local(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
