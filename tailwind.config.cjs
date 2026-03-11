/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		fontFamily: {
			primary: ['Raleway', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				'primary': '#0000f4',
				'secondary': '#1AC8ED',
				'secondary-dark': '#7BE0AD',
				'secondary-darkest': '#357266',
				'ppio-red': '#710627',
				'ppio-hotshot': '#FF4D80',
				'UADblue': '#0003f9',
				'UADGreen': '#00c00d',
				'site-bg': '#0a0a0f',
				'surface': '#12121a',
				'accent': '#FF4D80',
				'text-muted-color': '#a0a0b0',
			},
		},
	},
	plugins: [],
};