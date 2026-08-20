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
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        neutral: {
          0: "var(--neutral-0)",
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        success: {
          50: "var(--success-50)",
          500: "var(--success-500)",
          600: "var(--success-600)",
        },
        warning: {
          50: "var(--warning-50)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
        },
        danger: {
          50: "var(--danger-50)",
          500: "var(--danger-500)",
          600: "var(--danger-600)",
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      // JobHive type scale — semantic sizes layered on top of Tailwind's default text-xs..text-9xl
      // (left untouched so nothing already built shifts). New work should reach for these instead
      // of one-off text-[Npx] arbitrary values. See /design-system for a live reference.
      fontSize: {
        "heading-xl": ["34px", { lineHeight: "1.15", fontWeight: "800" }],
        "heading-lg": ["28px", { lineHeight: "1.2", fontWeight: "800" }],
        "heading-md": ["22px", { lineHeight: "1.3", fontWeight: "700" }],
        "heading-sm": ["17px", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["16px", { lineHeight: "1.6" }],
        "body-md": ["14.5px", { lineHeight: "1.55" }],
        "body-sm": ["13px", { lineHeight: "1.5" }],
        caption: ["11.5px", { lineHeight: "1.4" }],
      },
      // JobHive spacing scale — the section/card rhythm already in consistent use across the
      // site (e.g. every section uses py-88), now codified as named tokens (p-md, gap-lg, etc.)
      // instead of only being reachable via arbitrary p-[Npx] values.
      spacing: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "44px",
        "3xl": "64px",
        "4xl": "88px",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
      },
    },
  },
  plugins: [],
} satisfies Config;
