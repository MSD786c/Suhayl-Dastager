"use client";

/**
 * Reusable animated SVG motion graphics.
 * Pure CSS keyframe animations + SVG — no canvas, no libraries.
 * Each component is tuned to be subtle at rest and expressive on hover.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────────────────
// 1. FlowField — animated dotted grid that subtly drifts
// ──────────────────────────────────────────────────────────────

export const FlowField = ({
  className,
  color = "currentColor",
  density = 0.6,
}: {
  className?: string;
  color?: string;
  density?: number;
}) => (
  <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
    <svg
      width="100%"
      height="100%"
      className="opacity-[0.35]"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="dotflow" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill={color} opacity={density} />
        </pattern>
        <radialGradient id="dotmask" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dotfade">
          <rect width="100%" height="100%" fill="url(#dotmask)" />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#dotflow)"
        mask="url(#dotfade)"
        style={{ animation: "dotdrift 30s ease-in-out infinite alternate" }}
      />
    </svg>
    <style>{`
      @keyframes dotdrift {
        from { transform: translate3d(0,0,0); }
        to   { transform: translate3d(-22px,-22px,0); }
      }
    `}</style>
  </div>
);

// ──────────────────────────────────────────────────────────────
// 2. GradientFlow — slow-shifting linear gradient
// ──────────────────────────────────────────────────────────────

export const GradientFlow = ({
  className,
  from = "rgba(45,108,246,0.10)",
  via = "rgba(255,107,91,0.10)",
  to = "rgba(11,31,58,0.05)",
}: {
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}) => (
  <div
    className={cn("pointer-events-none absolute inset-0", className)}
    style={{
      background: `linear-gradient(120deg, ${from} 0%, ${via} 50%, ${to} 100%)`,
      backgroundSize: "200% 200%",
      animation: "gradientflow 18s ease-in-out infinite",
    }}
    aria-hidden
  >
    <style>{`
      @keyframes gradientflow {
        0%, 100% { background-position: 0% 50%; }
        50%      { background-position: 100% 50%; }
      }
    `}</style>
  </div>
);

// ──────────────────────────────────────────────────────────────
// 3. CountUp — animates a number from 0 → target on view
// ──────────────────────────────────────────────────────────────

export const CountUp = ({
  to,
  duration = 1600,
  format = (n: number) => n.toLocaleString(),
  className,
}: {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [value, setValue] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
};

// ──────────────────────────────────────────────────────────────
// 4. Format helpers for view counts
// ──────────────────────────────────────────────────────────────

export const formatViews = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
};

export const formatViewsLong = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
};

// ──────────────────────────────────────────────────────────────
// 5. ViralBadge — pulsing badge for high-performing content
// ──────────────────────────────────────────────────────────────

export const ViralBadge = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full bg-coral text-white font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 shadow-[0_8px_24px_-6px_rgba(255,107,91,0.55)]",
      className
    )}
  >
    <span
      className="h-1.5 w-1.5 rounded-full bg-white"
      style={{ animation: "viraldot 1.2s ease-in-out infinite" }}
    />
    <span>Viral</span>
    <style>{`
      @keyframes viraldot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%      { opacity: 0.45; transform: scale(0.7); }
      }
    `}</style>
  </span>
);

// ──────────────────────────────────────────────────────────────
// 6. CategoryIcons — animated SVG icons for each UGC category
// ──────────────────────────────────────────────────────────────

export const CategoryIcon = ({
  category,
  size = 20,
  className,
}: {
  category: "Software" | "Automotive" | "AI" | "Consumer Tech" | "Founder Content" | "Brand Work";
  size?: number;
  className?: string;
}) => {
  if (category === "AI") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <circle cx="12" cy="12" r="3" fill="currentColor">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </g>
      </svg>
    );
  }
  if (category === "Automotive") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path
          d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5v5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1h-11v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="7.5" cy="14.5" r="1.5" fill="white" />
        <circle cx="16.5" cy="14.5" r="1.5" fill="white" />
        <line x1="0" y1="18" x2="6" y2="18" stroke="currentColor" strokeWidth="0.5" opacity="0.4">
          <animate attributeName="x1" values="0;-4" dur="0.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="6;2" dur="0.5s" repeatCount="indefinite" />
        </line>
      </svg>
    );
  }
  if (category === "Software") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="2" y="4" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1" />
        <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1" />
        <circle cx="4" cy="6" r="0.4" fill="currentColor" />
        <circle cx="5.5" cy="6" r="0.4" fill="currentColor" />
        <circle cx="7" cy="6" r="0.4" fill="currentColor" />
        <line x1="6" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="6" y1="14" x2="11" y2="14" stroke="currentColor" strokeWidth="0.6" opacity="0.4">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="6" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <rect x="16" y="20" width="8" height="1.5" rx="0.5" fill="currentColor" />
      </svg>
    );
  }
  if (category === "Founder Content") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    );
  }
  if (category === "Consumer Tech") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="0.6" />
        <rect x="8" y="7" width="8" height="11" fill="currentColor" opacity="0.15" />
        <circle cx="12" cy="20" r="0.8" fill="currentColor" />
        <circle cx="8" cy="12" r="0.4" fill="currentColor">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="16" cy="14" r="0.4" fill="currentColor">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }
  // Brand Work
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
};

// ──────────────────────────────────────────────────────────────
// 7. Marquee — for ticker strips (used in metrics bar / footer)
// ──────────────────────────────────────────────────────────────

export const Marquee = ({
  items,
  className,
  speed = 40,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) => (
  <div className={cn("relative overflow-hidden", className)}>
    <div
      className="flex gap-12 whitespace-nowrap"
      style={{ animation: `ticker ${items.length * speed / items.length}s linear infinite` }}
    >
      {[...items, ...items, ...items, ...items].map((it, i) => (
        <span
          key={i}
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-navy-500/70"
        >
          {it}
          <span className="ml-12 text-navy-500/30">◆</span>
        </span>
      ))}
    </div>
    <style>{`
      @keyframes ticker {
        from { transform: translate3d(0, 0, 0); }
        to   { transform: translate3d(-25%, 0, 0); }
      }
    `}</style>
  </div>
);
