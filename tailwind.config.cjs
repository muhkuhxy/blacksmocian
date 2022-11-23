/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				ember: 'rgb(227, 69, 44)',
				spark: 'rgb(255, 174, 0)',
			}
		},
	},
	plugins: [],
}
