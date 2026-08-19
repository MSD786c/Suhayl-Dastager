/** @type {import('tailwindcss').Config} */
// ─────────────────────────────────────────────────────────────────────────────
//  SUHAYL DASTAGER — Personal Brand Design System
//  Predominantly neutral (75-80%) with strategic bursts of SM Stratagem blue
//  and VoxxHire coral. True black, near-black, and pure white — no cream,
//  no warm tinting, no agency-feel gradients.
// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      // ─── COLORS ────────────────────────────────────────────────────────
      // Neutral base: true white + near-black. Blue + coral are signatures.
      colors: {
        // Light surface stack
        canvas: {
          DEFAULT: "#FFFFFF",
          muted: "#F6F7F9",
          warm: "#FAFAFA",
        },
        // Dark surface stack
        ink: {
          DEFAULT: "#0B0D12",
          950: "#090B0F",
          900: "#0B0D12",
          800: "#0F1218",
          700: "#151922",
          600: "#1C2230",
          500: "#252B35",
        },
        // SM Stratagem blue family
        blue: {
          DEFAULT: "#276BFF",
          deep: "#0B1D3A",
          50: "#EEF3FF",
          100: "#DBE5FF",
          200: "#B7CAFF",
          300: "#92AEFF",
          400: "#6E9CFF",
          500: "#276BFF",
          600: "#1F5BE5",
          700: "#1A4AB8",
          800: "#143A8C",
          900: "#0B1D3A",
        },
        // VoxxHire coral family
        coral: {
          DEFAULT: "#FF6B4A",
          deep: "#E84F35",
          soft: "#FF927B",
          50: "#FFF1ED",
          100: "#FFE0D6",
          200: "#FFC0AD",
          300: "#FF927B",
          400: "#FF7A5C",
          500: "#FF6B4A",
          600: "#F25436",
          700: "#E84F35",
          800: "#C7402A",
          900: "#7E291B",
        },
        // Text scale
        text: {
          primary: "#0B0D12",
          secondary: "#525966",
          muted: "#7D8490",
          inverse: "#F7F8FA",
          inverseMuted: "#A6ADB9",
        },
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#276BFF",
        background: "#FFFFFF",
        foreground: "#0B0D12",
        primary: {
          DEFAULT: "#0B0D12",
          foreground: "#F7F8FA",
        },
        secondary: {
          DEFAULT: "#F6F7F9",
          foreground: "#0B0D12",
        },
        muted: {
          DEFAULT: "#F6F7F9",
          foreground: "#525966",
        },
        accent: {
          DEFAULT: "#276BFF",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF4444",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0B0D12",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0B0D12",
        },
      },

      // ─── RADIUS ────────────────────────────────────────────────────────
      // Brief: not everything rounded. Buttons 8-14, large media 16-24,
      // editorial sections prefer open layouts without containers.
      borderRadius: {
        none: "0",
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.875rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },

      // ─── TYPOGRAPHY ────────────────────────────────────────────────────
      // Display: Plus Jakarta Sans (modern grotesk, strong uppercase)
      // Body: Inter (neutral, readable)
      // Mono: JetBrains Mono (metadata, dates, technical labels)
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial display scale (per brief)
        "display-2xl": [
          "clamp(4.5rem, 12vw, 9.375rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(3.25rem, 8vw, 5.625rem)",
          { lineHeight: "0.94", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5.5vw, 5.625rem)",
          { lineHeight: "0.98", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.875rem, 3.5vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        "display-sm": [
          "clamp(1.375rem, 2.5vw, 2.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.02em",
        mono: "0.18em",
        monoWide: "0.22em",
      },

      // ─── KEYFRAMES ─────────────────────────────────────────────────────
      // Restrained editorial motion only — no bouncing, no spring, no
      // particle fields, no spinning.
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
        "reveal-up": {
          "0%": { transform: "scaleY(0)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "reveal-line": "reveal-line 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "reveal-up": "reveal-up 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        "0": "0ms",
        "150": "150ms",
        "250": "250ms",
        "400": "400ms",
        "500": "500ms",
        "700": "700ms",
        "900": "900ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
