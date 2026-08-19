"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Eye, X, ExternalLink, Plus } from "lucide-react";
import { ugcReels } from "@/lib/data";
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
  { label: "Total views", value: totalViews, color: "coral" as const },
  { label: "Live reels", value: liveCount, color: "blue" as const },
  { label: "Brands", value: brandCount, color: "coral" as const },
  { label: "Platforms", value: 3, color: "blue" as const },
];

// Brands I've worked with — logo strip
const workedWithBrands = [
  { name: "Parfumix", logo: "/ugc/parfumix-logo.png" },
  { name: "Al Amoudi", logo: "/ugc/alamoudi-logo.png" },
  { name: "Wrapsters", logo: "/ugc/wrapsters-logo.png" },
  { name: "Milano", logo: "/ugc/milano-logo.png" },
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

        {/* Brands I've worked with — logo strip */}
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

        {/* Metrics — typography row, not card grid */}
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

        {/* Top reels — 3 horizontal 9:16 frames */}
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

        {/* Work With Me — flow state CTA, replaces the packages section */}
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
                Brief, deliverables, usage, dates — share what you have, get a tight quote.
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

// Map reel.client → brand logo path. Falls back to null for unknown clients.
const getBrandLogo = (client: string): string | null => {
  const map: Record<string, string> = {
    Parfumix: "/ugc/parfumix-logo.png",
    "Al Amoudi Auto Spare Parts": "/ugc/alamoudi-logo.png",
    Wrapsters: "/ugc/wrapsters-logo.png",
    "Milano Italy SRL": "/ugc/milano-logo.png",
    "Milano by Danube": "/ugc/milano-logo.png",
    VoxxHire: "/ugc/voxxhire-logo.png",
  };
  return map[client] ?? null;
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
  const logoSrc = getBrandLogo(reel.client);
  const clientInitial = (reel.client?.[0] ?? "?").toUpperCase();

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-ink-900 ring-1 ring-border hover:ring-2 hover:ring-coral block text-left w-full cursor-pointer transition-all duration-300"
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
            sizes="(max-width: 768px) 33vw, 20vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/45"
        aria-hidden
      />

      {/* Top bar: brand logo (left) + prominent view count (right) */}
      <div className="absolute top-2 left-2 right-2 z-[3] flex items-start justify-between gap-2 pointer-events-none">
        {/* Brand logo pill */}
        <div className="grid place-items-center h-8 w-8 md:h-9 md:w-9 rounded-full bg-white/90 backdrop-blur-md ring-1 ring-black/10 shadow-sm overflow-hidden shrink-0">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${reel.client} logo`}
              width={32}
              height={32}
              className="h-5 w-5 md:h-6 md:w-6 object-contain"
            />
          ) : (
            <span className="font-display font-bold text-[11px] md:text-xs text-ink leading-none">
              {clientInitial}
            </span>
          )}
        </div>

        {/* View count — big, bold, focal */}
        <div className="flex flex-col items-end leading-none">
          <span
            className="flex items-center gap-1 font-display font-bold text-2xl md:text-3xl tracking-tighter text-text-inverse"
            style={{
              fontVariantNumeric: "tabular-nums",
              textShadow: "0 1px 6px rgba(0,0,0,0.55)",
            }}
          >
            <Eye className="h-3.5 w-3.5 md:h-4 md:w-4 -mt-0.5" />
            {formatViews(reel.views)}
          </span>
          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-monoWide text-text-inverse/85 mt-0.5">
            views
          </span>
        </div>
      </div>

      {!inView && (
        <div className="absolute inset-0 z-[3] grid place-items-center pointer-events-none">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-canvas text-ink group-hover:scale-110 transition-transform duration-500">
            <Play className="h-4 w-4 ml-0.5" />
          </span>
        </div>
      )}

      <div className="absolute bottom-2 right-2 z-[3] pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-monoWide rounded-full px-1.5 py-0.5 bg-black/65 text-text-inverse backdrop-blur-md">
          {formatDuration(reel.durationSec)}
        </span>
      </div>
    </motion.button>
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
