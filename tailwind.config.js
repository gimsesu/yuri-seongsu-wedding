/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "3/25": "12%",
      },
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
      colors: {
        "c-1a": "#e9e8e8",
        "c-1b": "#d4d4d4",
        "c-2a": "#e4e2d6",
        "c-2b": "#f1e69d",
        "c-3a": "#cbdec4",
        "c-3b": "#81ad46",
        "c-4a": "#55b252",
        "c-4b": "#eed099 60%",
        "c-grey": "#323232",
        "strong-blue": "#000000b5",
      },
    },
  },
  plugins: [],
};
