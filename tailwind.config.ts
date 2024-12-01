import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Geist", "sans-serif"],
			},
			height: {
				screen: "100dvh",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
