import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      
      dropShadow: {
        'icon': '0 2px 4px rgba(0,0,0,0.3)',
      },

      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        wave: "0 4px 14px 0 rgba(32, 150, 200, 0.25)",
        depth: "0 10px 25px -5px rgba(7, 89, 133, 0.35)",
        glow: "0 0 15px rgba(66, 178, 214, 0.5)",
        gold: "0 10px 25px -5px rgba(212, 175, 55, 0.3)",
      },
     
          transitionProperty: {
            'shadow': 'box-shadow',
            'transform': 'transform'
          }
      ,
      colors: {
          // Primary Brand Colors
  brand: {
    dark: "#0F172A",       // Deep navy
    deep: "#1E293B",       // Slightly lighter navy
    medium: "#334155",     // Versatile slate
    light: "#64748B",      // Soft gray-blue
    accent: "#6366F1",     // Vibrant indigo
    coral: "#F97316",      // Warm orange
    teal: "#0D9488",       // Balanced teal
    foam: "#E2E8F0",       // Light neutral
    gold: "#D4AF37",       // Rich gold
    goldLight: "#F5D07A",  // Light gold
    goldDark: "#996515",   // Dark gold
    blue: "#3B82F6", 
  },
        // Supporting Colors
        success: "#10B981",      // Emerald green
        warning: "#F59E0B",      // Amber yellow
        danger: "#EF4444",       // Red for alerts
        // Neutrals (optimized for contrast)
        green: "#1EB53A",  // Tanzanian green
    yellow: "#FCD116", // Tanzanian yellow
    blue: "#00A3DD",   // Tanzanian blue


        white: "#FFFFFF",
        black: "#0F172A",
        gray: {
          50: "#F8FAFC",
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
      // ... rest of your config remains the same
    },
  },
  plugins: [
    typography,
    plugin(function({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "1px 1px 3px rgba(7, 27, 54, 0.3)",
        },
        ".text-shadow-md": {
          "text-shadow": "2px 2px 6px rgba(7, 27, 54, 0.3)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 9px rgba(7, 27, 54, 0.3)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
        ".wave-mask": {
          "mask-image": "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          "-webkit-mask-image": "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        },
      });
    }),
  ],
} satisfies Config;