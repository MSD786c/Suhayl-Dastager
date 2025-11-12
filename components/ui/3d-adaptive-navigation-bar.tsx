"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export interface NavItem {
  label: string;
  id: string;
}

interface AdaptiveNavPillProps {
  items: NavItem[];
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

/**
 * AdaptiveNavPill – a 3D pill nav tuned to Suhayl's palette
 */
export const AdaptiveNavPill: React.FC<AdaptiveNavPillProps> = ({
  items,
  activeSection: controlledActive,
  onNavigate,
}) => {
  const defaultId = items[0]?.id ?? 'home';
  const [internalActive, setInternalActive] = useState(controlledActive || defaultId);
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { theme } = useTheme();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const collapsedWidth = 160;
  const expandedWidth = Math.min(760, Math.max(440, items.length * 110));
  const pillWidth = useSpring(collapsedWidth, { stiffness: 220, damping: 25, mass: 1 });

  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      pillWidth.set(expandedWidth);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        pillWidth.set(collapsedWidth);
        setHoveredItem(null);
      }, 600);
    }

    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [hovering, pillWidth, expandedWidth]);

  useEffect(() => {
    if (controlledActive && controlledActive !== internalActive) {
      setInternalActive(controlledActive);
    }
  }, [controlledActive, internalActive]);

  const handleSectionClick = (sectionId: string) => {
    setIsTransitioning(true);
    setInternalActive(sectionId);
    onNavigate?.(sectionId);
    setHovering(false);

    setTimeout(() => setIsTransitioning(false), 400);
  };

  const isDark = theme === 'dark';
  const activeItem = items.find((item) => item.id === internalActive);

  const baseGradient = isDark
    ? `linear-gradient(135deg, #0b1923 0%, #111f2c 30%, #0f2534 60%, #0c1d2b 100%)`
    : `linear-gradient(135deg, #fbfefd 0%, #f5fbfa 15%, #eef6f6 40%, #eaf2f5 70%, #e4edf1 100%)`;

  const glowShadow = expanded
    ? `0 6px 15px rgba(11, 25, 35, 0.18),
       0 20px 40px rgba(11, 25, 35, 0.16),
       inset 0 2px 5px rgba(255, 255, 255, 0.65),
       inset 0 -6px 14px rgba(9, 18, 27, 0.35)`
    : isTransitioning
    ? `0 4px 10px rgba(11, 25, 35, 0.18),
       0 15px 30px rgba(11, 25, 35, 0.12),
       inset 0 1px 3px rgba(255, 255, 255, 0.5),
       inset 0 -4px 10px rgba(11, 25, 35, 0.25)`
    : `0 3px 8px rgba(11, 25, 35, 0.16),
       0 12px 25px rgba(11, 25, 35, 0.12),
       inset 0 1px 2px rgba(255, 255, 255, 0.45),
       inset 0 -3px 8px rgba(11, 25, 35, 0.2)`;

  const textPrimary = isDark ? '#f5fafc' : '#10212c';
  const textSecondary = isDark ? '#98b7cc' : '#65727d';

  return (
    <motion.nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative rounded-full"
      style={{
        width: pillWidth,
        height: '58px',
        background: baseGradient,
        boxShadow: glowShadow,
        borderRadius: '999px',
        border: isDark ? '1px solid rgba(111, 143, 161, 0.35)' : '1px solid rgba(15, 165, 162, 0.20)',
        transition: 'box-shadow 0.3s ease-out',
      }}
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: expanded
            ? 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0))'
            : 'radial-gradient(circle at 40% 25%, rgba(255,255,255,0.18), rgba(255,255,255,0))',
        }}
      />

      <div className="absolute inset-x-2 top-2 rounded-full h-2 opacity-70 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-full bg-black/10" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        {!expanded && activeItem && (
          <AnimatePresence mode="wait">
            <motion.span
              key={activeItem.id}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
              style={{
                fontSize: '19px',
                fontWeight: 600,
                color: textPrimary,
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
              }}
            >
              {activeItem.label}
            </motion.span>
          </AnimatePresence>
        )}

        {expanded && (
          <div className="flex items-center justify-evenly w-full">
            {items.map((item, index) => {
              const isActive = item.id === internalActive;
              const isHovered = hoveredItem === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => handleSectionClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem((prev) => (prev === item.id ? null : prev))}
                  className="relative cursor-pointer"
                  style={{
                    fontSize: isActive ? '18.5px' : '18px',
                    fontWeight: isActive ? 650 : 520,
                    color: isActive || isHovered ? textPrimary : textSecondary,
                    letterSpacing: '0.4px',
                    padding: '10px 16px',
                    transform: isActive ? 'translateY(-1px)' : isHovered ? 'translateY(-0.5px)' : 'translateY(0)',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    initial={false}
                    animate={{
                      background: isActive
                        ? 'linear-gradient(90deg, rgba(15,165,162,0.25), rgba(233,93,44,0.25))'
                        : isHovered
                        ? 'linear-gradient(90deg, rgba(15,165,162,0.12), rgba(233,93,44,0.12))'
                        : 'transparent',
                      opacity: isActive || isHovered ? 1 : 0,
                    }}
                  />
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  {!isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-[#0fa5a2]/10 opacity-0 transition-opacity pointer-events-none"
                      style={{ opacity: isHovered ? 0.6 : 0 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill-indicator"
                      className="absolute inset-x-2 -bottom-2 h-1 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #0FA5A2, #E95D2C)',
                        boxShadow: '0 4px 8px rgba(233,93,44,0.35)',
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </motion.nav>
  );
};
