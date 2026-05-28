import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9eeff",
          200: "#b8ddff",
          300: "#86c5ff",
          400: "#4aa3ff",
          500: "#1f7cff",
          600: "#125fe6",
          700: "#134bbb",
          800: "#153f96",
          900: "#163577"
        }
      }
    }
  },
  plugins: []
} satisfies Config;

