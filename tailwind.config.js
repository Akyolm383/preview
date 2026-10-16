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
        obsidian: "#0B0E14",
        "surface-1": "#1E1F22",
        "surface-chat": "#313338",
        "surface-card": "#2B2D31",
        "surface-border": "#3F4147",
        blurple: "#5865F2",
        crimson: "#ED4245",
        emerald: "#57F287",
        gold: "#FEE75C",
        "text-high": "#F2F3F5",
        "text-sec": "#DBDEE1",
        "text-muted": "#949BA4",
        "text-gutter": "#4E5058",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px -3px rgba(88, 101, 242, 0.4)",
        "glow-emerald": "0 0 20px -3px rgba(87, 242, 135, 0.4)",
        "glow-crimson": "0 0 20px -3px rgba(237, 66, 69, 0.4)",
      },
    },
  },
  plugins: [],
};
