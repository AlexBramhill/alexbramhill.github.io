import { subtle } from "crypto";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 750ms linear 600ms forwards",
        "stretch-width":
          "stretch-width 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "stretch-width": {
          "0%": { width: "0%", opacity: "1" },
          "100%": { width: "100%", opacity: "1" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        spot: "var(--spot)",
        subtle: "var(--subtle)",
      },
    },
  },
  plugins: [],
} satisfies Config;
