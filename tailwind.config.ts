import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        fog: "#F5F5F3",
        pearl: "#FFFFFF",
        graphite: "#2E2E2E"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
