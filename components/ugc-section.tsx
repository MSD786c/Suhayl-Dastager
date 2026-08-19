"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowUpRight,
  Eye,
  X,
  ExternalLink,
  Plus,
} from "lucide-react";
import { ugcPackages, ugcReels } from "@/lib/data";
import { CountUp, formatViews } from "@/components/motion-graphics";
import { cn } from "@/lib/utils";

const formatDuration = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

const toEmbedUrl = (
  url: string,
  platform: "TikTok" | "Instagram" | "YouTube Shorts" | "LinkedIn"
): string | null => {
  if (platform === "TikTok") {
    const m = url.match(/\/video\/(\d+)/);
    if (m) return `https://www.tiktok.com/embed/v2/${m[1]}?lang=en-US`;
  }
  if (platform === "Instagram") {
    const m = url.match(/instagram\.com\/(?:reel|reels|p|tv)\/([A-Za-z0-9_-]+)/);
    if (m) {
      const type = url.includes("/reel") || url.includes("/reels")
        ? "reel"
        : url.includes("/tv")
        ? "tv"
        : "p";
      return `https://www.instagram.com/${type}/${m[1]}/embed/`;
    }
  }
  if (platform === "YouTube Shorts") {
    const m = url.match(/shorts\/([A-Za-z0-9_-]+)/);
    if (m) return `https://www.youtube.com/embed/${m[1]}`;
  }
  return null;
};

const totalViews = ugcReels.reduce((s, r) => s + r.views, 0);
const liveCount = ugcReels.filter((r) => r.views > 0).length;
const brandCount = new Set(
  ugcReels.filter((r) => r.client !== "Personal" && r.client !== "Personal / Spec")
    .map((r) => r.client)
).size;

const ugcMetrics = [
  { label: "Total views", value: totalViews, format: (n: number) => n.toLocaleString(), color: "coral" as const },
  { label: "Live reels", value: liveCount, format: (n: number) => `${n}`, color: "blue" as const },
  { label: "Brands", value: brandCount, format: (n: number) => `${n}`, color: "coral" as const },
  { label: "Platforms", value: 3, format: (n: number) => `${n}`, color: "blue" as const },
];

const UGCSection = () => {
  const [openReel, setOpenReel] = React.useState<(typeof ugcReels)[number] | null>(null);
  const [showAll, setShowAll] = React.useState(false);
  const [openPackage, setOpenPackage] = React.useState<string | null>(
    ugcPackages[0]?.id ?? null
  );

  // Sort reels by views once
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
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-24 md:py-36">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">01 / Create</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-display-lg text-ink text-balance">
              Tech content that
              <br />
              <span className="text-coral">doesn&apos;t feel like an ad.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-lg text-text-secondary text-pretty">
              Real campaigns for real brands. Cars × Technology × Founder life.
              I don&apos;t just talk about software — I build it.
            </p>
          </div>
        </div>

        {/* Metrics — typography row, not card grid */}
        <div className="border-y border-border mb-16 md:mb-20">
          {ugcMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-4 items-baseline py-6 border-b border-border last:border-b-0 md:py-8"
            >
              <div
                className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                0{i + 1}
              </div>
              <div className="col-span-7 md:col-span-7 font-display font-semibold text-lg md:text-xl text-ink">
                {m.label}
              </div>
              <div
                className={cn(
                  "col-span-3 md:col-span-2 font-display font-bold text-2xl md:text-3xl tracking-tighter text-right",
                  m.color === "coral" ? "text-coral" : "text-blue"
                )}
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                <CountUp to={m.value} format={m.format} />
              </div>
              <div className="hidden md:block md:col-span-2 font-mono text-[10px] uppercase tracking-monoWide text-text-muted text-right">
                Live · 2026
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top reels — 3 horizontal 9:16 frames */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-3">Featured reels</div>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-ink text-balance">
              Top performers, 2026.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="arrow-link"
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `Show all ${sortedReels.length}`}
            <Plus
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                showAll && "rotate-45"
              )}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {topReels.map((reel, i) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={i}
              onOpen={setOpenReel}
            />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              key="view-all"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {sortedReels.slice(3).map((reel, i) => (
                  <ReelCard
                    key={reel.id}
                    reel={reel}
                    index={i + 3}
                    onOpen={setOpenReel}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Packages — editorial rows, no public pricing */}
        <div className="mt-24 md:mt-32">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">Ways to work together</div>
              <h3 className="font-display font-bold tracking-tighter leading-[0.98] text-display-md text-ink text-balance">
                Packages, not pricing cards.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <p className="text-text-secondary text-pretty">
                Scope, usage, and rights vary per campaign. Pick a starting
                shape — we&apos;ll quote against your brief.
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {ugcPackages.map((pkg, i) => (
              <PackageRow
                key={pkg.id}
                pkg={pkg}
                index={i}
                isOpen={openPackage === pkg.id}
                onToggle={() =>
                  setOpenPackage((cur) => (cur === pkg.id ? null : pkg.id))
                }
              />
            ))}
          </div>
        </div>

        {/* Licensing */}
        <Licensing />

        {/* CTA */}
        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6 items-center border-t border-border pt-12">
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[1.02] text-ink max-w-2xl text-balance">
              Ready to plan a campaign?
            </h3>
            <p className="mt-4 text-text-secondary max-w-xl text-pretty">
              Brief, deliverables, usage, dates — the more you share, the
              tighter the quote.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:justify-end">
            <Link
              href="/contact?type=ugc"
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg bg-coral text-white font-medium px-6 py-3.5 text-sm hover:bg-coral-deep transition-colors duration-300"
            >
              Request a UGC Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <VideoLightbox reel={openReel} onClose={() => setOpenReel(null)} />
      </div>
    </section>
  );
};

const ReelCard = ({
  reel,
  index,
  onOpen,
}: {
  reel: (typeof ugcReels)[number];
  index: number;
  onOpen: (reel: (typeof ugcReels)[number]) => void;
}) => {
  const [inView, setInView] = React.useState(false);
  const [iframeFailed, setIframeFailed] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);
  const embedUrl = toEmbedUrl(reel.url, reel.platform);

  React.useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.button
      ref={ref}
      type="button"
      layout
      onClick={() => onOpen(reel)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-ink-900 ring-1 ring-border hover:ring-coral/50 block text-left w-full cursor-pointer transition-all duration-500"
      aria-label={`Open ${reel.client} reel — ${reel.title}`}
    >
      {inView && embedUrl && !iframeFailed && (
        <iframe
          src={embedUrl}
          title={`${reel.client} — ${reel.title}`}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onError={() => setIframeFailed(true)}
          className="absolute inset-0 h-full w-full z-[1] border-0"
          style={{ background: "transparent" }}
        />
      )}

      {(!inView || iframeFailed) && (
        <div className="absolute inset-0 z-[0]">
          <Image
            src={reel.posterSrc}
            alt={`${reel.client} brand`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/45"
        aria-hidden
      />

      <div className="absolute top-3 left-3 right-3 z-[3] flex items-center justify-between pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-monoWide px-2 py-1 rounded-full bg-black/65 text-text-inverse backdrop-blur-md font-bold">
          {reel.client}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-monoWide rounded-full px-2.5 py-1 bg-black/65 text-text-inverse backdrop-blur-md flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {formatViews(reel.views)}
        </span>
      </div>

      {!inView && (
        <div className="absolute inset-0 z-[3] grid place-items-center pointer-events-none">
          <span className="grid place-items-center h-14 w-14 rounded-full bg-canvas text-ink group-hover:scale-110 transition-transform duration-500">
            <Play className="h-5 w-5 ml-0.5" />
          </span>
        </div>
      )}

      <div className="absolute bottom-3 right-3 z-[3] pointer-events-none">
        <span className="font-mono text-[10px] uppercase tracking-monoWide rounded-full px-2.5 py-1 bg-black/65 text-text-inverse backdrop-blur-md">
          {formatDuration(reel.durationSec)}
        </span>
      </div>
    </motion.button>
  );
};

const PackageRow = ({
  pkg,
  index,
  isOpen,
  onToggle,
}: {
  pkg: (typeof ugcPackages)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left py-6 md:py-8 group"
      >
        <div className="grid grid-cols-12 gap-4 items-baseline">
          <div
            className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-coral"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            0{index + 1}
          </div>
          <div className="col-span-10 md:col-span-5">
            <h4 className="font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-ink group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
              {pkg.name}
            </h4>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
              {pkg.best}
            </div>
          </div>
          <div className="hidden md:block md:col-span-4 text-text-secondary text-pretty">
            {pkg.tagline}
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-center gap-2 font-mono text-[11px] uppercase tracking-monoWide">
            <span className="text-ink">{pkg.deliverables.length} deliverables</span>
            <Plus
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                isOpen ? "rotate-45" : ""
              )}
            />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pb-6 md:pb-8">
              <div className="col-span-12 md:col-span-6 md:col-start-3">
                <ul className="space-y-2">
                  {pkg.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-text-secondary text-pretty flex gap-3 leading-relaxed"
                    >
                      <span className="font-mono text-[10px] text-coral mt-1.5 shrink-0" style={{ fontVariantNumeric: "tabular-nums" }}>
                        ·
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 md:col-start-9 flex md:justify-end">
                <Link
                  href={`/contact?type=ugc&package=${pkg.id}`}
                  className="inline-flex items-center gap-2 self-start md:self-end rounded-lg bg-ink text-text-inverse font-medium px-5 py-3 text-sm hover:bg-coral transition-colors duration-300"
                >
                  {pkg.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Licensing = () => {
  const rows = [
    { label: "Organic usage", body: "Brand-owned social channels." },
    {
      label: "Paid media",
      body: "Meta, TikTok, YouTube and other advertising.",
    },
    {
      label: "Creator / partnership ads",
      body: "Campaigns using my creator identity or handle.",
    },
    {
      label: "Raw footage",
      body: "Available as an additional deliverable.",
    },
    {
      label: "Exclusivity",
      body: "Available where required and scoped by category / period.",
    },
    {
      label: "Extended licensing",
      body: "Available for longer campaign periods.",
    },
    {
      label: "AI / Likeness",
      body: "My image, voice and likeness may not be cloned, synthetically generated or used for AI training without separate written permission.",
    },
  ];
  return (
    <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4">
        <div className="eyebrow mb-5">Content licensing</div>
        <h3 className="font-display font-bold tracking-tighter text-3xl md:text-4xl text-ink text-balance">
          Clear rights, scoped per campaign.
        </h3>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <ul className="border-t border-border">
          {rows.map((r) => (
            <li
              key={r.label}
              className="grid grid-cols-12 gap-4 py-4 border-b border-border"
            >
              <div className="col-span-4 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                {r.label}
              </div>
              <div className="col-span-8 text-text-secondary text-pretty">
                {r.body}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
          Usage, territory, duration and exclusivity are scoped per campaign.
        </p>
      </div>
    </div>
  );
};

const VideoLightbox = ({
  reel,
  onClose,
}: {
  reel: (typeof ugcReels)[number] | null;
  onClose: () => void;
}) => {
  React.useEffect(() => {
    if (!reel) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [reel]);

  React.useEffect(() => {
    if (!reel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reel, onClose]);

  const embedUrl = reel ? toEmbedUrl(reel.url, reel.platform) : null;

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          key={reel.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${reel.client} reel`}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink-950/90" aria-hidden />
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] max-h-[88vh] grid grid-cols-1 overflow-hidden rounded-2xl bg-ink-900 ring-1 ring-ink-500 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center min-h-[560px] md:min-h-[640px] md:max-h-[88vh]">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={`${reel.client} — ${reel.title}`}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{
                    width: "min(420px, 100%)",
                    height: "min(750px, 88vh)",
                    border: 0,
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 text-text-inverseMuted px-8 text-center" style={{ minHeight: 420 }}>
                  <Play className="h-12 w-12 text-text-inverseMuted/40" />
                  <p className="text-sm">Embed not available. Open it directly:</p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-canvas text-ink font-medium px-5 py-2.5 text-sm"
                  >
                    Open on {reel.platform}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="relative p-6 flex flex-col gap-4 text-text-inverse">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-canvas/10 hover:bg-canvas/15 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted mb-2">
                  {reel.category} · {reel.platform}
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-balance text-text-inverse">
                  {reel.title}
                </h2>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted">
                  <Eye className="inline h-3 w-3 mr-1 -mt-0.5" />
                  <CountUp to={reel.views} format={formatViews} /> views · {formatDuration(reel.durationSec)}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-text-inverseMuted">
                {reel.description}
              </p>

              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-canvas text-ink font-medium px-4 py-2.5 text-sm hover:bg-coral hover:text-white transition-colors duration-300"
              >
                Open on {reel.platform}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UGCSection;
