/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08090D",
        "surface-panel": "#0F1117",
        "surface-elevated": "#161922",
        "surface-1": "#121317",
        "surface-chat": "#1A1B20",
        "surface-card": "#1E1F24",
        "surface-border": "#282A30",
        blurple: "#5865F2",
        crimson: "#ED4245",
        emerald: "#25D366",
        gold: "#FEE75C",
        instagram: "#E1306C",
        telegram: "#24A1DE",
        "text-high": "#F8FAFC",
        "text-sec": "#94A3B8",
        "text-muted": "#64748B",
        "text-gutter": "#475569",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        headline: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(88, 101, 242, 0.35)",
        "glow-emerald": "0 0 24px -4px rgba(37, 211, 102, 0.35)",
        "glow-crimson": "0 0 24px -4px rgba(237, 66, 69, 0.35)",
        "glow-instagram": "0 0 24px -4px rgba(225, 48, 108, 0.35)",
      },
    },
  },
  plugins: [],
};
