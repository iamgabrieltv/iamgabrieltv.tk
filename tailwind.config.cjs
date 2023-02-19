/** @type {import('tailwindcss').Config} */

const { variants } = require('@catppuccin/palette');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@catppuccin/tailwindcss')({
			prefix: 'ctp',
			defaultFlavour: 'mocha'
		})
	],
	daisyui: {
		themes: [
			{
				'ctp-latte': {
					primary: variants.latte.blue.hex,
					secondary: variants.latte.red.hex,
					accent: variants.latte.teal.hex,
					neutral: variants.latte.crust.hex,
					'base-100': variants.latte.base.hex,
					info: variants.latte.sky.hex,
					success: variants.latte.green.hex,
					warning: variants.latte.yellow.hex,
					error: variants.latte.maroon.hex
				}
			},
			{
				'ctp-mocha': {
					primary: variants.mocha.blue.hex,
					secondary: variants.mocha.red.hex,
					accent: variants.mocha.teal.hex,
					neutral: variants.mocha.crust.hex,
					'base-100': variants.mocha.base.hex,
					info: variants.mocha.sky.hex,
					success: variants.mocha.green.hex,
					warning: variants.mocha.yellow.hex,
					error: variants.mocha.maroon.hex
				}
			}
		]
	}
};
