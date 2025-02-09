import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "text-light-1": "var(--text-light-1)",
        "text-light-2": "var(--text-light-2)",
        "card-background-1": "var(--card-background-1)",
        "card-background-2": "var(--card-background-2)",
        danger: "var(--danger)",
        success: "var(--success)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
