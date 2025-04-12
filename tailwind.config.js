/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'xl': '1366px',
      },
      colors: {
        lightOrange: '#ff8800',
        darkOrange: '#e36414',
      },
    },
  },
  plugins: [],
}

