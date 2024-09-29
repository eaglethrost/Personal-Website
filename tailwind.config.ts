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
      minHeight: {
        'section': '100vh'
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
                transform: "translateY(-50%)",
            },
            "100%": {
                opacity: '1',
                transform: "translateY(0)",
            },
        }
      },
      animation: {
        fadeInDown: 'fade-in-down 0.6s ease-in 0s 1',
        fadeInDown2: 'fade-in-down 0.6s ease-in 0.6s 1',
        fadeInDown3: 'fade-in-down 0.6s ease-in 1.2s 1'
      }
    },
  },
  plugins: [],
};
export default config;
