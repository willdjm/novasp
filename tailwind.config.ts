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
        blue: {
          950: "#1C2443",
          300: '#7D8ABC',
          400: '#68A5B3',
          500: '#2965AF',
          600: '#0062FF'
        },
        amber: {
          600: "#D39700",
        },
        pink: {
          500: "#D300C8",
        },
        red: {
          300: "#F5EFEF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
