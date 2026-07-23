import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0F1620",
          900: "#1E2A38",
          800: "#28384A",
          700: "#3A4A5C",
          600: "#516378",
          400: "#8CA0B3",
          200: "#D3DCE4",
          100: "#E8EDF1",
        },
        copper: {
          700: "#8C4A24",
          600: "#A85A2E",
          500: "#B5652D",
          400: "#C87D45",
          300: "#D98A4F",
          100: "#F3DFCB",
        },
        paper: "#F7F5F1",
        ink: "#1A1D21",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "storm-gradient":
          "linear-gradient(160deg, #0F1620 0%, #1E2A38 45%, #3A4A5C 100%)",
        "copper-gradient": "linear-gradient(135deg, #B5652D 0%, #D98A4F 100%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15, 22, 32, 0.35)",
        card: "0 8px 30px -10px rgba(15, 22, 32, 0.15)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
