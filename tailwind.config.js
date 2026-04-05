/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ['"Source Serif 4"', "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["clamp(2.25rem,5vw,3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
      },
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          hover: "rgb(var(--brand-hover) / <alpha-value>)",
          fg: "rgb(var(--brand-fg) / <alpha-value>)",
          mute: "rgb(var(--brand-muted) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--ink) / 0.04), 0 8px 24px -4px rgb(var(--ink) / 0.06)",
        "card-hover": "0 4px 12px rgb(var(--ink) / 0.06), 0 16px 40px -8px rgb(var(--ink) / 0.1)",
        glow: "0 0 0 1px rgb(var(--brand) / 0.12), 0 20px 50px -20px rgb(var(--brand) / 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in-delay-1": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
        "fade-in-delay-2": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s forwards",
        "fade-in-delay-3": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.34s forwards",
        "fade-in-delay-4": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.46s forwards",
        "fade-in-delay-5": "fadeIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.58s forwards",
        "modal-in": "modalIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
        "backdrop-in": "backdropIn 0.25s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        modalIn: {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        backdropIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
