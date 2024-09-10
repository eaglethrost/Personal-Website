import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        'section': '832px'
      },
      fontSize: {
        'header': '60px'
      },
      padding: {
        'start': '2rem'
      },
      keyframes: {
        "fade-in-down": {
            "0%": {
                opacity: '0',
                transform: "translate3d(0, -100%, 0)",
            },
            "100%": {
                opacity: '1',
                transform: "translate3d(0, 0, 0)",
            },
        }
      },
      animation: {
        fadeInDown: 'fade-in-down 1s ease-in 0.25s 1'
      }
    },
  },
  plugins: [],
};
export default config;
