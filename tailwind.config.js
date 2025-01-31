/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: Object.fromEntries(
      Object.entries(defaultTheme.screens).filter(([key, value]) =>
        [].includes(key),
      ),
    ),
    extend: {
      backgroundImage: {
        neon: "url('../public/project-imgs/header-bg.png')",
        topography: "url('../public/project-imgs/body-bg.svg')",
      },
    },
  },
  plugins: [],
}
