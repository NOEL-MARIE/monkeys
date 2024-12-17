import { Teko } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vert: "#606C38",
        vertClair: "#E9EDC9",
      },
      fontFamily: {
        TekoMedium: ["var(--font-Teko-Medium)", "sans-serif"],
        TekoSemiBold: ["var(--font-Teko-SemiBold)", "sans-serif"],
        TekoLight: ["var(--font-Teko-Light)", "sans-serif"],

        TekoBold: ["var(--font-Teko-Bold)", "sans-serif"],
        MerriweatherLight: ["var(--font-MerriweatherLight)", "sans-serif"],
        WorkSans: ["var(--font-WorkSans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
