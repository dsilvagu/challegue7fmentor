/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'outfit': ['"Outfit Variable"' , 'sans-serif']
			}
		},
		colors: {
			'psblue': 'hsl(215, 51%, 70%)',
			'pcyan': 'hsl(178, 100%, 50%)',
			'pvdblue1': 'hsl(217, 54%, 11%)',
			'pvdblue2': 'hsl(216, 50%, 16%)',
			'pvdblue3': 'hsl(215, 32%, 27%)',
			'pwhite': 'hsl(0, 0%, 100%)',
		}
	},
	plugins: [],
}
