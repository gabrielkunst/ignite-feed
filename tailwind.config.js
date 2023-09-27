/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,jsx,tsx, css}"],
	theme: {
		extend: {
			lineHeight: {
				default: "160%",
			},
			colors: {
				"clr-white": "#FFFFFF",
				"clr-green-100": "#00B37E",
				"clr-green-200": "#00875F",
				"clr-gray-100": "#E1E1E6",
				"clr-gray-200": "#C4C4CC",
				"clr-gray-300": "#8D8D99",
				"clr-gray-400": "#7C7C8A",
				"clr-gray-500": "#323238",
				"clr-gray-600": "#202024",
				"clr-gray-700": "#121214",
				"clr-red-200": "#F75A68",
			},
			gridTemplateColumns: {
				timeline: "256px 1fr",
			},
		},
	},
	plugins: [],
};
