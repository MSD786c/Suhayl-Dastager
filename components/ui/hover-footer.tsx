"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextHoverEffect
 *
 * A cursor-tracked mask reveals a coral "heat touch" stroke through the
 * text. The text starts as a muted dark hairline (the watermark you see
 * in the footer behind the link columns) and, on hover, a wide coral
 * radial gradient follows the cursor with a soft outer glow — the
 * "heat touch" feel.
 *
 * The SVG captures pointer events on its full bounding box so the
 * cursor-tracked mask works anywhere over the SUHAYL, not only on the
 * painted pixels. The base layer is intentionally faint so the
 * watermark doesn't fight the link grid above it; the hover state is
 * bold and unmistakable.
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
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      style={{ pointerEvents: "auto" }}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* Coral reveal gradient — the "heat touch" colour ramp.
            Always painted coral; the radial mask is what gates which
            part of the stroke is currently visible. */}
        <radialGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="80%"
        >
          <stop offset="0%" stopColor="#FFB199" />
          <stop offset="25%" stopColor="#FF8A6F" />
          <stop offset="55%" stopColor="#FF6B4A" />
          <stop offset="85%" stopColor="#FF6B4A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
        </radialGradient>

        {/* Cursor-tracked reveal mask. Larger radius (55%) gives a
            softer, warmer falloff that reads as a heat field rather
            than a hard spotlight. */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="55%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="55%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>

        {/* Soft outer glow filter for the coral heat touch. Blurs
            the stroke so the hovered letters radiate warmth instead
            of just turning orange. */}
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

      {/* 1. MUTED BASE LAYER — always-on, faint dark hairline so the
             watermark is present in the composition without competing
             with the link grid above it. Slightly more visible than
             before so the user can clearly see where to hover. */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-text-inverse/25 font-[helvetica] text-7xl font-bold"
        style={{ opacity: 0.7 }}
      >
        {text}
      </text>

      {/* 2. HOVER-REVEALED CORAL LAYER — driven by the cursor mask.
             Thicker stroke + outer glow = the "heat touch" outline. */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.7"
        mask="url(#textMask)"
        filter="url(#coralGlow)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 260ms ease-out",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

/**
 * FooterBackgroundGradient
 * The deep ink base with a soft SM-Stratagem blue wash, anchored to the
 * top of the section. Adapted from the reference — uses our brand blue
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
