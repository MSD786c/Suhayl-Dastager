"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ugcReels } from "@/lib/data";
import { ReelCard, VideoLightbox } from "@/components/reel-card";
import { cn } from "@/lib/utils";

const totalViews = ugcReels.reduce((s, r) => s + r.views, 0);
const liveCount = ugcReels.filter((r) => r.views > 0).length;
const brandCount = new Set(
  ugcReels.filter((r) => r.client !== "Personal" && r.client !== "Personal / Spec")
    .map((r) => r.client)
).size;

const ugcMetrics = [
  { label: "Total views", value: totalViews, color: "coral" as const },
  { label: "Live reels", value: liveCount, color: "blue" as const },
  { label: "Brands", value: brandCount, color: "coral" as const },
  { label: "Platforms", value: 3, color: "blue" as const },
];

// Brands I've worked with - logo strip
const workedWithBrands = [
  { name: "Parfumix", logo: "/ugc/parfumix-logo.webp" },
  { name: "Al Amoudi", logo: "/ugc/alamoudi-logo.png" },
  { name: "Wrapsters", logo: "/ugc/wrapsters-logo.jpeg" },
  { name: "Milano", logo: "/ugc/milano-logo.jpeg" },
  { name: "VoxxHire", logo: "/ugc/voxxhire-logo.png" },
];

const UGCSection = () => {
  const [openReel, setOpenReel] = React.useState<(typeof ugcReels)[number] | null>(null);
  const [showAll, setShowAll] = React.useState(false);

  const sortedReels = React.useMemo(
    () => [...ugcReels].sort((a, b) => b.views - a.views),
    []
  );
  const topReels = sortedReels.slice(0, 3);

  return (
    <section
      id="ugc"
      className="relative bg-canvas border-t border-border"
      aria-label="UGC / Creator portfolio"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-10 md:py-14">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">01 / Create</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-md md:text-display-lg text-ink text-balance">
              Tech content that{" "}
              <span className="text-coral">doesn&apos;t feel like an ad.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-base text-text-secondary text-pretty">
              Real campaigns for real brands. Cars × Technology × Founder life.
            </p>
          </div>
        </div>

        {/* Brands I've worked with - logo strip */}
        <div className="mb-6 md:mb-8">
          <div className="eyebrow mb-3">Brands I&apos;ve worked with</div>
          <div className="grid grid-cols-5 gap-2 md:gap-3">
            {workedWithBrands.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-canvas p-3 md:p-4 hover:border-coral/40 transition-colors duration-300"
                title={brand.name}
              >
                <div className="relative h-10 md:h-14 w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 768px) 20vw, 10vw"
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-monoWide text-text-muted">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics - typography row, not card grid */}
        <div className="border-y border-border mb-6 md:mb-8">
          {ugcMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-3 items-baseline py-3 border-b border-border last:border-b-0 md:py-4"
            >
              <div
                className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                0{i + 1}
              </div>
              <div className="col-span-7 md:col-span-7 font-display font-semibold text-base md:text-lg text-ink">
                {m.label}
              </div>
              <div
                className={cn(
                  "col-span-3 md:col-span-2 font-display font-bold text-xl md:text-2xl tracking-tighter text-right",
                  m.color === "coral" ? "text-coral" : "text-blue"
                )}
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {m.value >= 1_000_000
                  ? `${(m.value / 1_000_000).toFixed(1)}M+`
                  : m.value.toLocaleString()}
              </div>
              <div className="hidden md:block md:col-span-2 font-mono text-[10px] uppercase tracking-monoWide text-text-muted text-right">
                Live · 2026
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top reels - 3 horizontal 9:16 frames */}
        <div className="mb-4 flex items-end justify-between gap-3">
          <h3 className="font-display font-bold text-xl md:text-2xl tracking-tighter text-ink text-balance">
            Top performers
          </h3>
          <Link
            href="/ugc"
            className="arrow-link"
          >
            See all
            <ArrowUpRight className="h-3.5 w-3.5 arrow" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {topReels.map((reel, i) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={i}
              onOpen={setOpenReel}
            />
          ))}
        </div>

        {/* Work With Me - flow state CTA, replaces the packages section */}
        <div className="mt-8 md:mt-10 relative overflow-hidden rounded-2xl border border-border bg-ink-950 text-text-inverse">
          <div className="relative grid grid-cols-12 gap-4 md:gap-6 p-6 md:p-8">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-monoWide text-coral mb-3">
                Ready when you are
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-text-inverse text-balance">
                Want me on your next campaign?
              </h3>
              <p className="mt-2 text-sm text-text-inverseMuted max-w-md text-pretty">
                Brief, deliverables, usage, dates - share what you have, get a tight quote.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-center md:justify-end">
              <Link
                href="/ugc"
                className="group relative inline-flex items-center gap-3 self-start md:self-auto rounded-full bg-coral text-white font-medium pl-5 pr-2 py-2 text-sm overflow-hidden hover:bg-coral-deep transition-colors duration-500"
              >
                <span className="relative z-10">Work With Me</span>
                <span className="relative z-10 grid place-items-center h-8 w-8 rounded-full bg-white text-coral transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span
                  className="absolute inset-0 -z-0 signature-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </div>

        <VideoLightbox reel={openReel} onClose={() => setOpenReel(null)} />
      </div>
    </section>
  );
};

export default UGCSection;
