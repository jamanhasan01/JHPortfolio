const daisyui = require("daisyui");
const tailwindcssAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f97316",
          secondary: "#570df8",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#f97316",
          secondary: "#0866ff",
          "base-100": "#1f2937",
        },
      },
    ],
    darkTheme: "dark",
  },
  plugins: [daisyui, tailwindcssAnimate],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shine: {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          to: { "background-position": "0% 0%" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shine: "shine var(--duration) infinite linear",
      },
    },
  },
};
