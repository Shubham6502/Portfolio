/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        momo: ["Momo Trust Display", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        teal: {
          DEFAULT: "#00e5c0",
          dark: "#00bfa0",
        },
        bg: {
          DEFAULT: "#050d12",
          card: "#0c1a22",
          card2: "#0f2030",
        },
        border: "#1a3040",
        muted: "#5a7a88",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
