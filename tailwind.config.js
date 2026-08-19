/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        // Suhayl unified system — built from SM Stratagem navy + Voxxhire indigo + warm coral
        ink: {
          DEFAULT: "#0A0A0C",
          950: "#08080A",
          900: "#0A0A0C",
          800: "#101014",
          700: "#17171B",
          600: "#1F1F25",
          500: "#2A2A33",
        },
        // SM Stratagem family — primary surface
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071529",
          50: "#E7EEF7",
          100: "#C8D5E8",
          200: "#9DB1D1",
          300: "#738CBA",
          400: "#4F6B9C",
          500: "#33445E",
          600: "#2B3951",
          700: "#1F2D44",
          800: "#152338",
          900: "#0B1F3A",
          950: "#071529",
        },
        // Voxxhire family — secondary depth
        indigo: {
          DEFAULT: "#1B2559",
          deep: "#0F1535",
          50: "#EEF0FA",
          100: "#D6DBF0",
          200: "#A8B3DD",
          300: "#7C8ACB",
          400: "#5466B4",
          500: "#334C9C",
          600: "#2A3F84",
          700: "#243568",
          800: "#1B2559",
          900: "#0F1535",
        },
        // Primary accent — the single dot of energy
        electric: {
          DEFAULT: "#2D6CF6",
          bright: "#4F86FF",
          soft: "#A9C7FF",
          deep: "#1E5BD6",
        },
        // Secondary warm accent — Voxxhire coral
        coral: {
          DEFAULT: "#FF6B5B",
          glow: "#FFB89E",
          deep: "#E95D2C",
        },
        // Warm canvas
        cream: {
          DEFAULT: "#FBF7F1",
          50: "#FDFCF9",
          100: "#FBF7F1",
          200: "#F4EDDF",
        },
        // Surfaces
        canvas: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F8FC",
          warm: "#FBF7F1",
        },
        slate: {
          DEFAULT: "#6B7390",
          mute: "#9BA3B5",
        },
        border: "rgba(11, 31, 58, 0.10)",
        input: "rgba(11, 31, 58, 0.10)",
        ring: "#2D6CF6",
        background: "#FBF7F1",
        foreground: "#0A0A0C",
        primary: {
          DEFAULT: "#0B1F3A",
          foreground: "#FBF7F1",
        },
        secondary: {
          DEFAULT: "#FBF7F1",
          foreground: "#0B1F3A",
        },
        muted: {
          DEFAULT: "#F0EBE0",
          foreground: "#5A6B84",
        },
        accent: {
          DEFAULT: "#2D6CF6",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF4D4D",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FBF7F1",
          foreground: "#0A0A0C",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0C",
        },
      },
      borderRadius: {
        lg: "0.875rem",
        md: "0.625rem",
        sm: "0.375rem",
        "4xl": "2rem",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        editorial: ['"Fraunces"', "Georgia", "serif"],
      },
      fontSize: {
        // Editorial display scale
        "display-2xl": ["clamp(4.5rem, 12vw, 11.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "reveal-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -6px)" },
        },
        "drift-slower": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10px, 6px)" },
        },
        "ticker": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "scale-in": "scale-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ken-burns": "ken-burns 18s ease-in-out infinite alternate",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "reveal-line": "reveal-line 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "drift-slow": "drift-slow 12s ease-in-out infinite",
        "drift-slower": "drift-slower 16s ease-in-out infinite",
        ticker: "ticker 60s linear infinite",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
