"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextHoverEffect
 *
 * A quiet outlined watermark that becomes an animated coral border when
 * hovered. The interaction is legible without filling the letters, so it
 * remains a watermark rather than competing with the footer navigation.
 */
export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ pointerEvents: "auto" }}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* A restrained glow keeps the animated outline visible on ink. */}
        <filter
          id="coralGlow"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
        >
          <feGaussianBlur
            stdDeviation="3"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Quiet, always-visible outline. */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.55"
        className="fill-transparent stroke-text-inverse/25 font-[helvetica] text-7xl font-bold"
        style={{ opacity: 0.7 }}
      >
        {text}
      </text>

      {/* Animated coral border; no letter fill, so the effect reads as a highlight. */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="#FF6B4A"
        strokeWidth="0.95"
        filter="url(#coralGlow)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        initial={false}
        animate={hovered ? { opacity: 1, strokeDashoffset: [0, -30] } : { opacity: 0, strokeDashoffset: 0 }}
        transition={hovered ? { opacity: { duration: 0.18 }, strokeDashoffset: { duration: duration ?? 1.2, ease: "linear", repeat: Infinity } } : { opacity: { duration: 0.18 } }}
        strokeDasharray="7 3"
      >
        {text}
      </motion.text>
    </svg>
  );
};

/**
 * FooterBackgroundGradient
 * The deep ink base with a soft SM-Stratagem blue wash, anchored to the
 * top of the section. Adapted from the reference - uses our brand blue
 * (#276BFF) instead of the demo's #3ca2fa so it sits inside the existing
 * palette.
 */
export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 0%, #090B0F66 30%, #276BFF26 60%, #090B0F66 100%)",
      }}
    />
  );
};
