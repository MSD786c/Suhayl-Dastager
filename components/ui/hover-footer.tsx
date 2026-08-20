"use client";

import React, { useId, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextHoverEffect
 *
 * A quiet outlined watermark with a coral reveal that follows the pointer.
 * The active colour is deliberately local, keeping it a watermark instead
 * of turning the entire word into a competing footer heading.
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
  const [pointer, setPointer] = useState({ x: 150, y: 50 });
  const maskId = useId().replace(/:/g, "");

  const updatePointer = (event: React.MouseEvent<SVGSVGElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 300,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={(event) => {
        setHovered(true);
        updatePointer(event);
      }}
      onMouseMove={updatePointer}
      onMouseLeave={() => setHovered(false)}
      style={{ pointerEvents: "auto" }}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* A restrained glow keeps the cursor reveal visible on ink. */}
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
        <mask id={maskId}>
          <rect width="300" height="100" fill="black" />
          <motion.circle
            cx={pointer.x}
            cy={pointer.y}
            r="22"
            fill="white"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, cx: pointer.x, cy: pointer.y }}
            transition={{ duration: 0.12, ease: "easeOut" }}
          />
        </mask>
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

      {/* Coral only appears beneath the cursor, like a light passing over ink. */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FF6B4A"
        filter="url(#coralGlow)"
        mask={`url(#${maskId})`}
        className="font-[helvetica] text-7xl font-bold"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: duration ?? 0.18 }}
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
