"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, X, ExternalLink } from "lucide-react";
import { ugcReels, type UgcReel } from "@/lib/data";
import { CountUp, formatViews } from "@/components/motion-graphics";

const formatDuration = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

const toEmbedUrl = (
  url: string,
  platform: "TikTok" | "Instagram" | "YouTube Shorts" | "LinkedIn",
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

const getBrandLogo = (client: string): string | null => {
  const map: Record<string, string> = {
    Parfumix: "/ugc/parfumix-logo.webp",
    "Al Amoudi Auto Spare Parts": "/ugc/alamoudi-logo.png",
    Wrapsters: "/ugc/wrapsters-logo.jpeg",
    "Milano Italy SRL": "/ugc/milano-logo.jpeg",
    "Milano by Danube": "/ugc/milano-logo.jpeg",
    VoxxHire: "/ugc/voxxhire-logo.png",
  };
  return map[client] ?? null;
};

export const ReelCard = ({
  reel,
  index,
  onOpen,
}: {
  reel: UgcReel;
  index: number;
  onOpen: (reel: UgcReel) => void;
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
      { rootMargin: "50px 0px", threshold: 0.05 }
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
      className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-ink-900 ring-1 ring-border hover:ring-2 hover:ring-coral focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none block text-left w-full cursor-pointer transition-all duration-300"
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

        <div className="flex flex-col items-end leading-none">
          <span
            className="flex items-center gap-1 font-display font-bold text-2xl md:text-3xl tracking-tighter text-coral"
            style={{
              fontVariantNumeric: "tabular-nums",
              textShadow: "0 1px 6px rgba(0,0,0,0.65)",
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

export const VideoLightbox = ({
  reel,
  onClose,
}: {
  reel: UgcReel | null;
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
                <div
                  className="flex flex-col items-center justify-center gap-4 text-text-inverseMuted px-8 text-center"
                  style={{ minHeight: 420 }}
                >
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

export { ugcReels };
export type { UgcReel };
