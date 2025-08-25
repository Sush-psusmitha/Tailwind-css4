/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
], // Adjust path to your HTML/JS files
  theme: {
    extend: {
      colors: {
         'pure-red': '#FF0000',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        '10xl': '6rem',
      }
    },
  },
  plugins: [],
}
