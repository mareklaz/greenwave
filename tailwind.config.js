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
				'secondary': {
					'50': '#f3f8f8',
					'100': '#e0eced',
					'200': '#c4dcdd',
					'300': '#9ac2c6',
					'400': '#639ba2',
					'500': '#4f848b',
					'600': '#446d76',
					'700': '#3c5b62',
					'800': '#374d53',
					'900': '#314248',
					'950': '#1d2a2f',
				},
				'dark': {
					'50': '#effaf3',
					'100': '#d8f3e1',
					'200': '#b4e6c7',
					'300': '#83d2a7',
					'400': '#68c193',
					'500': '#2e9b66',
					'600': '#1e7d51',
					'700': '#186442',
					'800': '#164f36',
					'900': '#13412e',
					'950': '#09251a',
				},
			},
		},
		plugins: [
			require('@tailwindcss/forms'),
			require('@tailwindcss/aspect-ratio'),
			'prettier-plugin-tailwindcss',
		],
	},
};
