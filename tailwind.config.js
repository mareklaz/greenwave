/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#f4f9f7',
					'100': '#d9eee8',
					'200': '#b2ddcf',
					'300': '#84c4b3',
					'400': '#65ac9b',
					'500': '#418b7b',
					'600': '#326f63',
					'700': '#2b5a51',
					'800': '#264943',
					'900': '#233e39',
					'950': '#102321',
				},
				'timber-green': {
					'50': '#f4f9f7',
					'100': '#dbece5',
					'200': '#b7d8cb',
					'300': '#8cbcac',
					'400': '#649d8b',
					'500': '#4a8272',
					'600': '#39685b',
					'700': '#31544b',
					'800': '#2a453e',
					'900': '#263b35',
					'950': '#172a26',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		'prettier-plugin-tailwindcss',
	],
};
