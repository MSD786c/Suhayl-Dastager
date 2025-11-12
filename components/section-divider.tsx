"use client";

import React from 'react';

type SectionDividerProps = {
  variant?: 'teal' | 'coral';
  flip?: boolean;
};

const gradients = {
  teal: {
    start: '#0FA5A2',
    mid: '#6ED4CF',
    end: '#ffffff'
  },
  coral: {
    start: '#F5B98A',
    mid: '#E95D2C',
    end: '#ffffff'
  }
};

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'teal', flip = false }) => {
  const palette = gradients[variant];

  return (
    <div className={`w-full h-16 overflow-hidden ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <linearGradient id={`divider-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.start} stopOpacity="0.35" />
            <stop offset="50%" stopColor={palette.mid} stopOpacity="0.45" />
            <stop offset="100%" stopColor={palette.end} stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M0,96 C180,32 360,32 540,80 C720,128 900,176 1080,144 C1260,112 1350,64 1440,32 L1440,0 L0,0 Z"
          fill={`url(#divider-${variant})`}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
