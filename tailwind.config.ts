import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "tall-screen": { raw: "(min-height: 1000px)" },
      },
      colors: {
        backgroundDark: "#090711",
        backgroundMedium: "#120b2e",
        backgroundLight: "#1a0f4b",
        navbar: "#2d2255",
      },
      height: {
        navbar: "10vh",
        section: "832px",
      },
      width: {
        content: "80%",
      },
      minHeight: {
        section: "100vh",
      },
      fontSize: {
        header: "60px",
      },
      padding: {
        start: "2rem",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-15%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInDown: "fade-in-down 0.6s ease-in 0s 1 forwards",
        fadeInDown2: "fade-in-down 0.6s ease-in 0.6s 1 forwards",
        fadeInDown3: "fade-in-down 0.6s ease-in 1.2s 1 forwards",
        fadeInLeft: "fade-in-left 0.8s ease-in 0s 1 forwards",
        fadeInRight: "fade-in-right 0.8s ease-in 0s 1 forwards",
        fadeInUp: "fade-in-up 0.8s ease-in 0s 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;
