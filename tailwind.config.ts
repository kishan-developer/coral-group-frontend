import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // REQUIRED for next-themes
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#94cb3d", // luxury accent
        darkBg: "#000000",
        lightText: "#626c84",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-geist-sans)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        signature: ["Dancing Script", "cursive"],
      },
      animation: {
        slide: "slide 18s linear infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        animation: {
          fadeUp: "fadeUp 1s ease-out forwards",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;


extend: {

}
