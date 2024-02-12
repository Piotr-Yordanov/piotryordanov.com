const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        2: '0 0 3px 0 #00000080',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        lato: ['var(--font-lato)'],
        sacramento: ['var(--font-sacramento)'],
        literata: ['var(--font-literata)'],
      },
      colors: {
        primary: colors.red[500],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
