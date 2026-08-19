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
  ChevronDown,
  Plus,
  Home,
  Car,
  Sparkle,
  Code2,
} from "lucide-react";
import {
  ugcPackages,
  ugcReels,
  brandVisuals,
} from "@/lib/data";
import {
  CountUp,
  ViralBadge,
  Marquee,
  formatViews,
  formatViewsLong,
} from "@/components/motion-graphics";
import { cn } from "@/lib/utils";

const formatDuration = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

// Convert a reel URL into the platform's official embed URL.
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

// ─────────────────────────────────────────────────────────────────
// Brand identity map — drives visuals, colours, logos.
// ─────────────────────────────────────────────────────────────────

type BrandTheme = {
  logo: string;
  name: string;
  shortName: string;
  from: string;
  to: string;
  accent: string;
  textOn: "light" | "dark";
  initial: string;
  // What platform handle / URL the brand is found at
  handle: string;
};

const BRANDS: Record<string, BrandTheme> = {
  Parfumix: {
    logo: "/ugc/parfumix-logo.png",
    name: "Parfumix",
    shortName: "Parfumix",
    from: "#0A0A0A",
    to: "#1A1A1A",
    accent: "#FF6B5B",
    textOn: "light",
    initial: "P",
    handle: "@parfumixofficial",
  },
  "Al Amoudi Auto Spare Parts": {
    logo: "/ugc/alamoudi-logo.png",
    name: "Al Amoudi",
    shortName: "Al Amoudi",
    from: "#0B5A2E",
    to: "#1F8A4E",
    accent: "#FFD93D",
    textOn: "light",
    initial: "A",
    handle: "@al.amoudi.spare.parts",
  },
  "Milano Italy SRL": {
    logo: "/ugc/milano-logo.png",
    name: "Milano by Danube",
    shortName: "Milano",
    from: "#FFFFFF",
    to: "#F4F4F4",
    accent: "#008C45",
    textOn: "dark",
    initial: "M",
    handle: "@milanoitalysrl",
  },
  Wrapsters: {
    logo: "/ugc/wrapsters-logo.png",
    name: "Wrapsters",
    shortName: "Wrapsters",
    from: "#0A0A0A",
    to: "#1A1A1A",
    accent: "#FF6B1A",
    textOn: "light",
    initial: "W",
    handle: "@wrapsters.ae",
  },
  VoxxHire: {
    logo: "/ugc/voxxhire-logo.png",
    name: "VoxxHire",
    shortName: "VoxxHire",
    from: "#1B2559",
    to: "#2D6CF6",
    accent: "#FF6B5B",
    textOn: "light",
    initial: "V",
    handle: "@voxx_hire",
  },
};

const brandFor = (client: string): BrandTheme =>
  BRANDS[client] ?? {
    logo: "",
    name: client,
    shortName: client,
    from: "#0B1F3A",
    to: "#1F2D4A",
    accent: "#2D6CF6",
    textOn: "light",
    initial: client.charAt(0).toUpperCase() || "•",
    handle: "",
  };

// ─────────────────────────────────────────────────────────────────
// 4 brand categories — each has a primary brand and possibly
// additional sub-brands. The structure: Home, Automotive, Perfumes,
// Software.
// ─────────────────────────────────────────────────────────────────

type BrandCategoryKey = "Home" | "Automotive" | "Perfumes" | "Software";

type BrandCategory = {
  key: BrandCategoryKey;
  label: string;
  description: string;
  primary: string; // primary brand client name
  clients: string[]; // all clients in this category
  icon: React.ReactNode;
  // Visual styling overrides
  from: string;
  to: string;
  accent: string;
  textOn: "light" | "dark";
};

const CATEGORIES: BrandCategory[] = [
  {
    key: "Perfumes",
    label: "Perfumes",
    description:
      "Brand storytelling for the perfume industry. Hooks, mood, and product-led A-roll for fragrance launches.",
    primary: "Parfumix",
    clients: ["Parfumix"],
    icon: <Sparkle className="h-3.5 w-3.5" />,
    from: "#0A0A0A",
    to: "#1A1A1A",
    accent: "#FF6B5B",
    textOn: "light",
  },
  {
    key: "Automotive",
    label: "Automotive",
    description:
      "Auto parts, vehicle wraps, and on-the-road storytelling. Car-first, founder-led, never stock-footage.",
    primary: "Al Amoudi Auto Spare Parts",
    clients: ["Al Amoudi Auto Spare Parts", "Wrapsters"],
    icon: <Car className="h-3.5 w-3.5" />,
    from: "#0B5A2E",
    to: "#1F8A4E",
    accent: "#FFD93D",
    textOn: "light",
  },
  {
    key: "Home",
    label: "Home",
    description:
      "Kitchen, bath, and home fittings — wholesale, retail, and lifestyle. Italian precision for UAE homes.",
    primary: "Milano Italy SRL",
    clients: ["Milano Italy SRL"],
    icon: <Home className="h-3.5 w-3.5" />,
    from: "#FFFFFF",
    to: "#F4F4F4",
    accent: "#008C45",
    textOn: "dark",
  },
  {
    key: "Software",
    label: "Software",
    description:
      "SaaS and AI product storytelling. Founder-led walkthroughs that turn technical features into outcomes.",
    primary: "VoxxHire",
    clients: ["VoxxHire"],
    icon: <Code2 className="h-3.5 w-3.5" />,
    from: "#1B2559",
    to: "#2D6CF6",
    accent: "#FF6B5B",
    textOn: "light",
  },
];

const BrandMark = ({ client }: { client: string }) => {
  const brand = brandFor(client);
  return (
    <span
      className="inline-flex items-center justify-center h-6 w-6 rounded-full overflow-hidden ring-1 ring-white/30 bg-cream/95"
      style={{ background: brand.from }}
      aria-label={`${client} logo`}
    >
      {brand.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logo}
          alt={`${client} logo`}
          className="h-full w-full object-contain"
        />
      ) : (
        <span
          className="font-mono text-[11px] font-bold"
          style={{ color: brand.textOn === "light" ? "#fff" : "#0B1F3A" }}
        >
          {brand.initial}
        </span>
      )}
    </span>
  );
};

const totalViews = ugcReels.reduce((s, r) => s + r.views, 0);
const liveCount = ugcReels.filter((r) => r.views > 0).length;

// Default active category: the one whose top reel has the most views.
const DEFAULT_CATEGORY: BrandCategoryKey = (() => {
  let best: BrandCategoryKey = "Perfumes";
  let bestViews = -1;
  for (const c of CATEGORIES) {
    const top = ugcReels
      .filter((r) => c.clients.includes(r.client))
      .sort((a, b) => b.views - a.views)[0];
    if (top && top.views > bestViews) {
      bestViews = top.views;
      best = c.key;
    }
  }
  return best;
})();

const UGCSection = () => {
  const [openReel, setOpenReel] = React.useState<(typeof ugcReels)[number] | null>(
    null
  );
  const [activeCategory, setActiveCategory] =
    React.useState<BrandCategoryKey>(DEFAULT_CATEGORY);
  const [viewAllOpen, setViewAllOpen] = React.useState(false);

  // Group reels by category, sorted by views (highest first).
  const byCategory = React.useMemo(() => {
    const map: Record<string, typeof ugcReels> = {};
    for (const c of CATEGORIES) {
      map[c.key] = ugcReels
        .filter((r) => c.clients.includes(r.client))
        .sort((a, b) => b.views - a.views);
    }
    return map;
  }, []);

  const activeReels = byCategory[activeCategory] ?? [];
  const top3 = activeReels.slice(0, 3);
  const activeCategoryMeta = CATEGORIES.find((c) => c.key === activeCategory)!;

  return (
    <section
      id="ugc"
      className="relative pt-8 pb-28 md:pt-8 md:pb-40 bg-canvas-warm overflow-hidden"
      aria-label="UGC / Creator portfolio"
    >
      {/* Ticker */}
      <div className="border-y border-navy-900/10 bg-canvas-warm/60 backdrop-blur-sm py-3 mb-16 md:mb-24">
        <Marquee
          items={[
            `3.3M views · Parfumix · Perfumes`,
            `21.5K · Parfumix · Perfumes`,
            `15.2K · Wrapsters · Automotive`,
            `14.1K · Al Amoudi · Automotive`,
            `8.2K · Milano by Danube · Home`,
            `7K · VoxxHire · Software`,
            `Dubai, UAE · TikTok + Instagram`,
            `Available for select 2026 partnerships`,
            `Cars × Tech × Founder life`,
          ]}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">Section · 01 / Create</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-display-lg text-ink-900 text-balance">
              Tech content that doesn&apos;t
              <br />
              <span className="text-coral quote-mark">feel like an ad.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-lg text-ink-900/70 text-pretty">
              Real campaigns for real brands. Cars × Technology × Founder
              life. I don&apos;t just talk about software — I build it.
            </p>
          </div>
        </div>

        {/* Aggregate metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-900/10 border border-navy-900/10 rounded-2xl overflow-hidden mb-20 md:mb-28">
          {[
            {
              label: "Total views",
              value: formatViewsLong(totalViews),
              accent: "coral" as const,
              raw: totalViews,
            },
            {
              label: "Live reels",
              value: `${liveCount}`,
              accent: "electric" as const,
              raw: liveCount,
            },
            {
              label: "Brands",
              value: `${Object.keys(BRANDS).length}`,
              accent: "indigo" as const,
              raw: Object.keys(BRANDS).length,
            },
            {
              label: "Categories",
              value: `${CATEGORIES.length}`,
              accent: "coral" as const,
              raw: CATEGORIES.length,
            },
          ].map((m) => (
            <div key={m.label} className="bg-canvas-warm p-6 md:p-8 relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                {m.label}
              </div>
              <div
                className={cn(
                  "mt-2 font-display font-bold text-3xl md:text-4xl tracking-tighter",
                  m.accent === "coral" && "text-coral",
                  m.accent === "electric" && "text-electric",
                  m.accent === "indigo" && "text-indigo-800"
                )}
              >
                <CountUp to={m.raw} format={(n) => n.toLocaleString()} />
                {m.label === "Total views" && (
                  <span className="text-ink-900/40 ml-1 text-2xl">+</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ─── CATEGORY STRIP — small chips with brand pictures, 3 highest-performing by default ─── */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-navy-900/10" />
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-navy-500">
              Filter by category
            </div>
            <div className="h-px flex-1 bg-navy-900/10" />
          </div>
          <div className="-mx-6 sm:mx-0 overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap sm:flex-wrap gap-2 px-6 sm:px-0 pb-1">
              {CATEGORIES.map((cat) => (
                <CategoryChip
                  key={cat.key}
                  category={cat}
                  isActive={activeCategory === cat.key}
                  reelCount={byCategory[cat.key]?.length ?? 0}
                  topViews={byCategory[cat.key]?.[0]?.views ?? 0}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setViewAllOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ─── TOP 3 REELS — highest performing in active category ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {top3.map((reel, i) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={i}
              onOpen={setOpenReel}
              accent={activeCategoryMeta.accent}
              isLight={activeCategoryMeta.textOn === "light"}
            />
          ))}
        </div>

        {/* ─── VIEW ALL DROPDOWN — all reels in active category ─── */}
        {activeReels.length > 3 && (
          <>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setViewAllOpen((v) => !v)}
                aria-expanded={viewAllOpen}
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] bg-ink-900 text-cream hover:bg-ink-800 transition-all"
              >
                {viewAllOpen ? (
                  <>
                    Show less
                    <ChevronDown className="h-3.5 w-3.5 rotate-180 transition-transform" />
                  </>
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5" />
                    View all {activeReels.length} {activeCategoryMeta.label.toLowerCase()} reels
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        viewAllOpen && "rotate-180"
                      )}
                    />
                  </>
                )}
              </button>
            </div>
            <AnimatePresence initial={false}>
              {viewAllOpen && (
                <motion.div
                  key="view-all"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {activeReels.map((reel, i) => (
                      <ReelCard
                        key={reel.id}
                        reel={reel}
                        index={i}
                        onOpen={setOpenReel}
                        accent={activeCategoryMeta.accent}
                        isLight={activeCategoryMeta.textOn === "light"}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Packages */}
        <div className="mt-28 md:mt-40">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-4">Ways to work together</div>
              <h3 className="font-display font-bold tracking-tightest leading-[1] text-display-md text-ink-900 text-balance">
                Packages, not pricing cards.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <p className="text-sm text-ink-900/70 text-pretty">
                Scope, usage, and rights vary per campaign. Pick a starting
                shape — we&apos;ll quote against your brief.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {ugcPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>

        {/* Licensing */}
        <Licensing />

        {/* CTA */}
        <div className="mt-20 md:mt-28 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-navy-900/10 pt-12">
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-ink-900 max-w-2xl text-balance">
              Ready to plan a campaign?
            </h3>
            <p className="mt-3 text-ink-900/70 max-w-xl">
              Brief, deliverables, usage, dates — the more you share, the
              tighter the quote.
            </p>
          </div>
          <Link
            href="/contact?type=ugc"
            className="btn-coral self-start md:self-end"
          >
            Request a UGC Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <VideoLightbox reel={openReel} onClose={() => setOpenReel(null)} />
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// Category chip — compact filter button with small brand picture.
// Used in the horizontal category strip; clicking filters the top 3.
// ─────────────────────────────────────────────────────────────────

const CategoryChip = ({
  category,
  isActive,
  reelCount,
  topViews,
  onClick,
}: {
  category: BrandCategory;
  isActive: boolean;
  reelCount: number;
  topViews: number;
  onClick: () => void;
}) => {
  const primaryBrand = brandFor(category.primary);
  const visualSrc = brandVisuals[category.primary]?.card;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "group flex items-center gap-2.5 rounded-full pl-1 pr-3.5 py-1.5 ring-1 transition-all duration-300 ease-editorial shrink-0",
        isActive
          ? "bg-ink-900 ring-ink-900 text-cream shadow-[0_8px_20px_-8px_rgba(11,31,58,0.45)]"
          : "bg-canvas ring-navy-900/10 text-ink-900 hover:ring-navy-900/25 hover:-translate-y-0.5"
      )}
    >
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-full overflow-hidden ring-1 ring-navy-900/8 shrink-0"
        style={{
          background: `linear-gradient(135deg, ${category.from} 0%, ${category.to} 100%)`,
        }}
        aria-hidden
      >
        {visualSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={visualSrc}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : primaryBrand.logo ? (
          <span className="grid place-items-center h-full w-full bg-white/95">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={primaryBrand.logo}
              alt=""
              className="h-5 w-5 object-contain"
            />
          </span>
        ) : (
          <span
            className="font-mono text-[10px] font-bold"
            style={{ color: category.accent }}
          >
            {category.label.charAt(0)}
          </span>
        )}
      </span>
      <span className="font-display font-semibold text-[13px] leading-none whitespace-nowrap">
        {category.label}
      </span>
      <span
        className={cn(
          "font-mono text-[9.5px] uppercase tracking-[0.18em] leading-none whitespace-nowrap tabular-nums",
          isActive ? "text-cream/65" : "text-navy-500"
        )}
      >
        {reelCount} · {formatViews(topViews)}
      </span>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────────
// Reel card — embeds the live TikTok/Instagram iframe inline.
// ─────────────────────────────────────────────────────────────────

const ReelCard = ({
  reel,
  index,
  onOpen,
  accent,
  isLight,
}: {
  reel: (typeof ugcReels)[number];
  index: number;
  onOpen: (reel: (typeof ugcReels)[number]) => void;
  accent: string;
  isLight: boolean;
}) => {
  const [inView, setInView] = React.useState(false);
  const [iframeFailed, setIframeFailed] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);
  const brand = brandFor(reel.client);
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
      initial={{ y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative aspect-[9/16] md:aspect-[9/14] overflow-hidden rounded-2xl ring-1 ring-navy-900/8 hover:ring-electric/40 block text-left w-full cursor-pointer transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, ${brand.from} 0%, ${brand.to} 100%)`,
      }}
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
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: isLight
            ? "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.45) 100%)"
            : "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.30) 100%)",
        }}
        aria-hidden
      />

      {/* Top bar — brand name + platform + view count */}
      <div className="absolute top-3 left-3 right-3 z-[3] flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span
            className="font-mono text-[9px] uppercase tracking-[0.22em] px-2 py-1 rounded-full backdrop-blur-md font-bold"
            style={{
              background: "rgba(0,0,0,0.65)",
              color: "#fff",
            }}
          >
            {brand.name}
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.22em] px-2 py-1 rounded-full backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
            }}
          >
            {reel.platform}
          </span>
        </div>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em] rounded-full px-2.5 py-1 backdrop-blur-md flex items-center gap-1"
          style={{
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
          }}
        >
          <Eye className="h-3 w-3" />
          {formatViews(reel.views)}
        </span>
      </div>

      {/* Center play badge — visible until iframe loads */}
      {!inView && (
        <div className="absolute inset-0 z-[3] grid place-items-center pointer-events-none">
          <span className="grid place-items-center h-14 w-14 rounded-full bg-cream/95 text-ink-900 shadow-2xl group-hover:scale-110 transition-transform backdrop-blur-sm">
            <Play className="h-5 w-5 ml-0.5" />
          </span>
        </div>
      )}

      {/* Bottom — duration only */}
      <div className="absolute bottom-3 right-3 z-[3] pointer-events-none">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em] rounded-full px-2.5 py-1 backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
          }}
        >
          {formatDuration(reel.durationSec)}
        </span>
      </div>
    </motion.button>
  );
};

const PackageCard = ({
  pkg,
  index,
}: {
  pkg: (typeof ugcPackages)[number];
  index: number;
}) => {
  const visible = pkg.deliverables.slice(0, 3);
  const remaining = pkg.deliverables.length - visible.length;

  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 md:p-7 hover:border-electric/40 hover:shadow-[0_30px_60px_-30px_rgba(45,108,246,0.4)] transition-all duration-500"
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
          Package 0{index + 1}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-electric">
          {pkg.cta}
        </div>
      </div>
      <h4 className="mt-3 font-display font-bold text-2xl tracking-tight text-ink-900">
        {pkg.name}
      </h4>
      <p className="mt-2 text-sm text-ink-900/65 text-pretty">{pkg.best}</p>

      <div className="mt-5 h-px bg-navy-900/8" />

      <ul className="mt-5 space-y-2 flex-1">
        {visible.map((d) => (
          <li
            key={d}
            className="flex items-start gap-2.5 text-sm text-ink-900/80"
          >
            <span className="mt-1.5 h-1 w-1 rounded-full bg-electric flex-shrink-0" />
            <span>{d}</span>
          </li>
        ))}
        {remaining > 0 && (
          <li className="text-xs font-mono uppercase tracking-[0.18em] text-navy-500/70 pl-4">
            +{remaining} more
          </li>
        )}
      </ul>

      <Link
        href={`/contact?type=ugc&package=${pkg.id}`}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 text-cream font-medium px-4 py-2.5 text-sm hover:bg-electric transition-colors"
      >
        {pkg.cta}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
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
    <div className="mt-28 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4">
        <div className="eyebrow mb-4">Content licensing</div>
        <h3 className="font-display font-bold tracking-tight text-3xl md:text-4xl text-ink-900 text-balance">
          Clear rights, scoped per campaign.
        </h3>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <ul className="divide-y divide-navy-900/8">
          {rows.map((r) => (
            <li key={r.label} className="grid grid-cols-12 gap-4 py-4">
              <div className="col-span-4 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500">
                {r.label}
              </div>
              <div className="col-span-8 text-ink-900/80">{r.body}</div>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500/70">
          Usage, territory, duration and exclusivity are scoped per campaign.
        </p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// Video lightbox — renders the platform's official embed iframe.
// ─────────────────────────────────────────────────────────────────

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
  const brand = reel ? brandFor(reel.client) : null;

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
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(11,31,58,0.85) 0%, rgba(0,0,0,0.95) 100%)",
            }}
            aria-hidden
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1080px] max-h-[88vh] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center min-h-[420px] md:min-h-[640px] md:max-h-[88vh]">
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
                  className="flex flex-col items-center justify-center gap-4 text-cream/70 px-8 text-center"
                  style={{ minHeight: 420 }}
                >
                  <Play className="h-12 w-12 text-cream/40" />
                  <p className="text-sm">
                    Embed not available for this platform. Open it directly:
                  </p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cream text-ink-900 font-medium px-5 py-2.5 text-sm"
                  >
                    Open on {reel.platform}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative w-full md:w-[340px] p-6 md:p-8 flex flex-col gap-5"
              style={{
                background: brand
                  ? `linear-gradient(135deg, ${brand.from} 0%, ${brand.to} 100%)`
                  : "#0B1F3A",
                color: brand?.textOn === "light" ? "#FBF7F1" : "#0B1F3A",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full backdrop-blur-sm"
                style={{
                  background:
                    brand?.textOn === "light"
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(11,31,58,0.10)",
                }}
              >
                <X className="h-4 w-4" />
              </button>

              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.28em] mb-3"
                  style={{
                    color:
                      brand?.textOn === "light"
                        ? "rgba(255,255,255,0.65)"
                        : "rgba(11,31,58,0.65)",
                  }}
                >
                  {reel.category} · {reel.platform}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <BrandMark client={reel.client} />
                  <div
                    className="font-display font-bold text-lg"
                    style={{
                      color:
                        brand?.textOn === "light"
                          ? "#FBF7F1"
                          : "#0B1F3A",
                    }}
                  >
                    {brand?.name ?? reel.client}
                  </div>
                </div>
                <h2
                  className="mt-3 font-display font-bold text-2xl md:text-3xl tracking-tight text-balance"
                  style={{
                    color:
                      brand?.textOn === "light"
                        ? "#FBF7F1"
                        : "#0B1F3A",
                  }}
                >
                  {reel.title}
                </h2>
                <div
                  className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{
                    color:
                      brand?.textOn === "light"
                        ? "rgba(255,255,255,0.65)"
                        : "rgba(11,31,58,0.65)",
                  }}
                >
                  <Eye className="inline h-3 w-3 mr-1 -mt-0.5" />
                  <CountUp to={reel.views} format={formatViews} /> views ·{" "}
                  {formatDuration(reel.durationSec)}
                </div>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color:
                    brand?.textOn === "light"
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(11,31,58,0.85)",
                }}
              >
                {reel.description}
              </p>

              <div className="mt-auto flex flex-col gap-2">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
                  style={{
                    background:
                      brand?.textOn === "light"
                        ? "#FBF7F1"
                        : "#0B1F3A",
                    color:
                      brand?.textOn === "light"
                        ? "#0B1F3A"
                        : "#FBF7F1",
                  }}
                >
                  Open on {reel.platform}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UGCSection;
