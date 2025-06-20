// tailwind.config.js
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#efebe7',
          200: '#d7ccc8',
          300: '#bcaaa4',
          400: '#a1887f',
          500: '#8d6e63',
          600: '#795548',
          700: '#6d4c41',
          800: '#5d4037',
          900: '#4e342e',
        },
      },
    },
  },
  plugins: [],
}
