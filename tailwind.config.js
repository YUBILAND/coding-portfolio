/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'neon': "url('../public/project-imgs/header-bg.png')",
        'topography': "url('../public/project-imgs/body-bg.svg')",

        
      }
    },
  },
  plugins: [],
}

