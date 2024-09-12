/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('./Assets/Images/MainPageBackgroundImage.png')",
				"orange-gradient": "linear-gradient(to right, #FFB682F5, #F8A27AF5, #F28C83F5)",
				"blue-gradient": "linear-gradient(to right, #BBDAFFF5, #FF993CF5)",
				"brown-gradient": "linear-gradient(to right, #826D5D, #EF7221, #FC4D4C)",
				"side-bar-gradient": "linear-gradient(to right, #c78d3f, #b85572)",
				"nav-bar-gradient": "linear-gradient(to right, #FBA96E, #EB8787)",
				"gradient-border": "linear-gradient(to right, #ED897F 40%, #FF9900 100%)"
			},
			colors: {
				"primary-gray": "#E8E8E8",
				"secondary-gray": "#EEEBEB"
			},
			fontSize: {
				lg: ["38px"]
			},
			fontFamily: {
				sans: ["Istok Web", "sans-serif"],
				lato: ["Lato", "sans-serif"]
			}
		}
	},
	plugins: [

	]
};


