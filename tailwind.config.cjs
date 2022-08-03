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
        'primary': '#000064',
        'secondary': '#00FFFF',
        'tertiary': '#A31621',
      },
    }
  },
  plugins: [],
}