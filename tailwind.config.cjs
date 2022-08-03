/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte', './src/components/**/*.svelte', 'index.html'],
  theme: {
    fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#0000f4',
        'secondary': '#3AAFB9',
        'secondary-dark': '#21757A',
        'secondary-darkest': '#073B3A',
        'ppio-red': '#710627',
        'ppio-hotshot': '#FF4D80'
      },
    }
  },
  plugins: [],
}