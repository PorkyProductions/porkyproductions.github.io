/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte', './src/components/**/*.svelte', 'index.html'],
  theme: {
    fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#0000f4',
        'secondary': '#1AC8ED',
        'secondary-dark': '#7BE0AD',
        'secondary-darkest': '#357266',
        'ppio-red': '#710627',
        'ppio-hotshot': '#FF4D80'
      },
    }
  },
  plugins: [],
}