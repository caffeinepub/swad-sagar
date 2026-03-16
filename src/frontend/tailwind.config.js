/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        saffron: {
          DEFAULT: "oklch(65% 0.2 48)",
          deep: "oklch(55% 0.22 45)",
          light: "oklch(82% 0.14 70)",
          50: "oklch(97% 0.025 70)",
          100: "oklch(93% 0.05 65)",
          200: "oklch(87% 0.09 60)",
          300: "oklch(79% 0.14 58)",
          400: "oklch(72% 0.18 54)",
          500: "oklch(65% 0.2 48)",
          600: "oklch(57% 0.21 45)",
          700: "oklch(48% 0.19 42)",
        },
        cream: "oklch(97% 0.014 80)",
        spice: "oklch(38% 0.08 50)",
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        saffron: "0 4px 24px oklch(60% 0.2 48 / 0.28)",
        "saffron-lg": "0 8px 40px oklch(60% 0.2 48 / 0.38)",
        card: "0 2px 20px oklch(0% 0 0 / 0.07)",
        "card-hover": "0 20px 60px oklch(60% 0.2 48 / 0.2)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
