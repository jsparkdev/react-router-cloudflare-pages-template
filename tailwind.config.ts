import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Geist", "sans-serif"],
    },
    height: {
      screen: "100dvh",
    },
  },
  plugins: [],
} satisfies Config;
