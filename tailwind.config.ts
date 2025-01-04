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
        "fade-in": "fade-in 750ms linear",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
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
