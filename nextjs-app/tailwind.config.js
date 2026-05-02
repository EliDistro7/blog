import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./sanity/**/*.{ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    // ── TYPOGRAPHY ─────────────────────────────────────────────────────────
    // Bold African style uses Bricolage Grotesque as the display/heading font
    // paired with DM Sans for body copy — both available on Google Fonts.
    // Add to your root layout:
    //   import { Bricolage_Grotesque, DM_Sans } from "next/font/google"
    fontFamily: {
      sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["Bricolage Grotesque", "DM Sans", "ui-sans-serif", "sans-serif"],
      mono: ["JetBrains Mono", "ui-monospace", "monospace"],
    },

    // ── FONT SIZES ─────────────────────────────────────────────────────────
    // Generous scale that supports the bold, high-impact typographic style
    fontSize: {
      "2xs": ["0.625rem", { lineHeight: "1rem" }],
      xs:   ["0.75rem",  { lineHeight: "1.125rem" }],
      sm:   ["0.875rem", { lineHeight: "1.35rem" }],
      base: ["1rem",     { lineHeight: "1.6rem" }],
      lg:   ["1.125rem", { lineHeight: "1.75rem" }],
      xl:   ["1.25rem",  { lineHeight: "1.85rem" }],
      "2xl": ["1.5rem",  { lineHeight: "2rem" }],
      "3xl": ["1.875rem",{ lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem",  letterSpacing: "-0.01em" }],
      "5xl": ["3rem",    { lineHeight: "1.1",     letterSpacing: "-0.02em" }],
      "6xl": ["3.75rem", { lineHeight: "1.05",    letterSpacing: "-0.02em" }],
      "7xl": ["4.5rem",  { lineHeight: "1",       letterSpacing: "-0.03em" }],
      "8xl": ["6rem",    { lineHeight: "1",       letterSpacing: "-0.03em" }],
      "9xl": ["8rem",    { lineHeight: "1",       letterSpacing: "-0.04em" }],
    },

    // ── FONT WEIGHTS ───────────────────────────────────────────────────────
    fontWeight: {
      normal:    "400",
      medium:    "500",
      semibold:  "600",
      bold:      "700",
      extrabold: "800",   // Primary heading weight in Bold African style
      black:     "900",   // Used sparingly for hero display text
    },

    // ── LETTER SPACING ─────────────────────────────────────────────────────
    // Tight headlines + ultra-wide uppercase labels = signature of this style
    letterSpacing: {
      tighter: "-0.04em",
      tight:   "-0.02em",
      snug:    "-0.01em",
      normal:  "0",
      wide:    "0.03em",
      wider:   "0.08em",
      widest:  "0.15em",
      ultra:   "0.25em",  // Used on badge/label text e.g. "TANZANIA'S #1 AGENCY"
    },

    extend: {
      // ── COLORS ───────────────────────────────────────────────────────────
      colors: {
        // ── Core Brand Palette ──
        brand: {
          dark:      "#0F172A",   // Deep navy (legacy)
          deep:      "#1E293B",   // Slightly lighter navy
          medium:    "#334155",   // Versatile slate
          light:     "#64748B",   // Soft gray-blue
          accent:    "#6366F1",   // Vibrant indigo
          coral:     "#F97316",   // Warm orange
          teal:      "#0D9488",   // Balanced teal
          foam:      "#E2E8F0",   // Light neutral
          gold:      "#D4AF37",   // Rich gold ← primary accent
          goldLight: "#F5D07A",   // Light gold
          goldDark:  "#996515",   // Dark gold
          blue:      "#3B82F6",
        },

        // ── Bold African Surface Colors ──
        // These warm-toned darks define the style's dark-canvas aesthetic.
        // Use these instead of the cool navies for African-themed sections.
        surface: {
          DEFAULT: "#1A1208",   // warmBlack — primary page background
          deep:    "#0D0903",   // darkBrown — footer, secondary panels
          panel:   "#261B0C",   // slightly lighter warm panel
          overlay: "rgba(26,18,8,0.95)", // for nav blur overlays
        },

        // ── Cream / Off-white Text ──
        // Warmer than pure white; designed to sit on dark warm surfaces.
        cream: {
          DEFAULT: "#F5F0E8",   // primary text on dark
          muted:   "rgba(245,240,232,0.6)",  // secondary text
          faint:   "rgba(245,240,232,0.3)",  // disabled / footer text
        },

        // ── Amber — Primary CTA & Accent Color ──
        // Maps to `warning` below but named semantically for this theme.
        amber: {
          DEFAULT: "#F59E0B",
          light:   "#FCD34D",
          dark:    "#D97706",
          glow:    "rgba(245,158,11,0.15)",  // background tints
          border:  "rgba(245,158,11,0.3)",   // subtle borders
          strong:  "rgba(245,158,11,0.6)",   // visible borders/dividers
        },

        // ── Supporting / Status Colors ──
        success: "#10B981",
        warning: "#F59E0B",   // = amber.DEFAULT — kept for compatibility
        danger:  "#EF4444",

        // ── Tanzanian National Colors ──
        green:  "#1EB53A",
        yellow: "#FCD116",
        blue:   "#00A3DD",

        // ── Base ──
        white: "#FFFFFF",
        black: "#0F172A",

        // ── Gray Scale ──
        gray: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },

      // ── BOX SHADOWS ──────────────────────────────────────────────────────
      boxShadow: {
        layer:  "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        wave:   "0 4px 14px 0 rgba(32, 150, 200, 0.25)",
        depth:  "0 10px 25px -5px rgba(7, 89, 133, 0.35)",
        glow:   "0 0 15px rgba(66, 178, 214, 0.5)",
        gold:   "0 10px 25px -5px rgba(212, 175, 55, 0.3)",
        // Bold African additions:
        amber:  "0 10px 30px -5px rgba(245, 158, 11, 0.35)",
        "amber-lg": "0 20px 50px -10px rgba(245, 158, 11, 0.4)",
        warm:   "0 8px 24px rgba(26, 18, 8, 0.6)",
        card:   "0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245,158,11,0.08)",
      },

      // ── DROP SHADOWS ─────────────────────────────────────────────────────
      dropShadow: {
        icon:  "0 2px 4px rgba(0,0,0,0.3)",
        amber: "0 2px 8px rgba(245,158,11,0.5)",
        gold:  "0 2px 8px rgba(212,175,55,0.4)",
      },

      // ── BACKGROUND IMAGES ─────────────────────────────────────────────────
      // Pre-built gradient utilities used in Bold African layouts
      backgroundImage: {
        // Amber radial glow — top-right hero effect
        "amber-glow":    "radial-gradient(ellipse at top right, #F59E0B, transparent 70%)",
        // Gold linear — used on rule lines & accent bars
        "gold-rule":     "linear-gradient(to right, #D4AF37, transparent)",
        "gold-rule-v":   "linear-gradient(to bottom, #D4AF37, transparent)",
        // Dot grid — services section texture
        "dot-amber":     "radial-gradient(circle at 1px 1px, rgba(245,158,11,0.5) 1px, transparent 0)",
        // Warm dark gradient — card overlays
        "surface-fade":  "linear-gradient(to bottom, rgba(26,18,8,0), rgba(13,9,3,0.8))",
        // Brand radial mask (kept from original)
        "brand-radial":  "radial-gradient(circle at left, var(--tw-gradient-from) 60%, var(--tw-gradient-to) 100%)",
      },

      // ── BACKGROUND SIZE ───────────────────────────────────────────────────
      // Dot grid spacing for the African pattern texture
      backgroundSize: {
        "dot-sm": "20px 20px",
        "dot-md": "40px 40px",
        "dot-lg": "60px 60px",
      },

      // ── BORDER RADIUS ─────────────────────────────────────────────────────
      // Bold African uses sharp corners (0.25rem) for buttons/cards
      // with minimal rounding — "brutalist refined" aesthetic
      borderRadius: {
        none:  "0",
        sm:    "0.125rem",
        DEFAULT: "0.25rem",   // primary — badges, buttons, cards
        md:    "0.375rem",
        lg:    "0.5rem",
        xl:    "0.75rem",
        "2xl": "1rem",
        pill:  "9999px",      // for badge pills only
      },

      // ── SPACING ───────────────────────────────────────────────────────────
      // A few named spacers that match the sections in the design
      spacing: {
        "section-sm": "5rem",   // py-20 equivalent
        "section":    "7.5rem", // py-30 equivalent
        "section-lg": "10rem",  // py-40 equivalent
      },

      // ── ASPECT RATIOS ─────────────────────────────────────────────────────
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },

      // ── ANIMATIONS ────────────────────────────────────────────────────────
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        float:        "float 6s ease-in-out infinite",
        // Bold African additions:
        "fade-up":    "fade-up 0.6s ease forwards",
        "fade-in":    "fade-in 0.4s ease forwards",
        "stripe-in":  "stripe-in 0.5s ease forwards", // top accent stripe reveal
      },

      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%":       { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "stripe-in": {
          from: { transform: "scaleX(0)", transformOrigin: "left" },
          to:   { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },

      // ── TRANSITIONS ───────────────────────────────────────────────────────
      transitionProperty: {
        shadow:    "box-shadow",
        transform: "transform",
        border:    "border-color",
      },

      // ── CLIP PATH ─────────────────────────────────────────────────────────
      clipPath: {
        polygon: "polygon(0 0, 100% 0, 100% 60%, 0 90%)",
      },

      // ── MASK IMAGE ────────────────────────────────────────────────────────
      maskImage: {
        "brand-radial": "radial-gradient(circle at left, var(--tw-gradient-from) 60%, var(--tw-gradient-to) 100%)",
      },

      // ── GRADIENT COLOR STOPS ─────────────────────────────────────────────
      gradientColorStops: {
        "brand-accent/50": "rgba(99, 102, 241, 0.5)",
        "brand-coral/50":  "rgba(249, 115, 22, 0.5)",
        "amber/50":        "rgba(245, 158, 11, 0.5)",
        "gold/50":         "rgba(212, 175, 55, 0.5)",
      },
    },
  },

  plugins: [
    typography,
    require('tailwind-clip-path'),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        // ── Text Shadow ───────────────────────────────────────────────────
        ".text-shadow":      { "text-shadow": "1px 1px 3px rgba(7, 27, 54, 0.3)" },
        ".text-shadow-md":   { "text-shadow": "2px 2px 6px rgba(7, 27, 54, 0.3)" },
        ".text-shadow-lg":   { "text-shadow": "3px 3px 9px rgba(7, 27, 54, 0.3)" },
        ".text-shadow-none": { "text-shadow": "none" },
        // Bold African warm text shadow (for cream text on dark)
        ".text-shadow-warm": { "text-shadow": "0 2px 12px rgba(26, 18, 8, 0.8)" },
        // Amber glow text shadow (for amber headings)
        ".text-glow-amber":  { "text-shadow": "0 0 20px rgba(245,158,11,0.4), 0 0 40px rgba(245,158,11,0.15)" },

        // ── Wave Mask ─────────────────────────────────────────────────────
        ".wave-mask": {
          "mask-image": "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          "-webkit-mask-image": "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        },

        // ── African Geometric Dot Grid Background ─────────────────────────
        // Apply to a container to get the services-section texture
        ".bg-dot-grid": {
          "background-image": "radial-gradient(circle at 1px 1px, rgba(245,158,11,0.25) 1px, transparent 0)",
          "background-size": "40px 40px",
        },

        // ── Accent Rule Line ──────────────────────────────────────────────
        // The 3px horizontal amber bar used before section labels
        ".accent-rule": {
          display: "inline-block",
          width: "3rem",
          height: "3px",
          "background-color": "#F59E0B",
          "border-radius": "2px",
          "flex-shrink": "0",
        },

        // ── Top Stripe ────────────────────────────────────────────────────
        // Absolute top border used on service cards (amber or gold alternating)
        ".stripe-amber": {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "3px",
          "background-color": "#F59E0B",
        },
        ".stripe-gold": {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "3px",
          "background-color": "#D4AF37",
        },

        // ── Glass Card — warm dark surface with amber border ──────────────
        ".card-warm": {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(245,158,11,0.15)",
          "border-radius": "0.25rem",
          transition: "border-color 0.3s",
        },
        ".card-warm:hover": {
          "border-color": "#F59E0B",
        },

        // ── Nav Blur Overlay ──────────────────────────────────────────────
        ".nav-blur": {
          background: "rgba(26,18,8,0.95)",
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          "border-bottom": "2px solid rgba(245,158,11,0.3)",
        },

        // ── Badge — pill tag used for labels like "TANZANIA'S #1 AGENCY" ─
        ".badge-amber": {
          display: "inline-flex",
          "align-items": "center",
          gap: "0.5rem",
          background: "rgba(245,158,11,0.15)",
          border: "1px solid rgba(245,158,11,0.3)",
          "border-radius": "9999px",
          padding: "0.4rem 1rem",
          color: "#F59E0B",
          "font-size": "0.75rem",
          "font-weight": "700",
          "letter-spacing": "0.15em",
          "text-transform": "uppercase",
        },

        // ── Service Tag chip ─────────────────────────────────────────────
        ".tag-amber": {
          background: "rgba(245,158,11,0.1)",
          color: "#F59E0B",
          "font-size": "0.7rem",
          "font-weight": "600",
          padding: "0.2rem 0.6rem",
          "border-radius": "2px",
        },
      });
    }),
  ],
} ;