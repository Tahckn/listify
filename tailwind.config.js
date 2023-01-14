/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(59, 60, 96)',
        primary: '#A1F8DA',
        secondary: '#616267',
        warning: '#F44762',
        items: '#edd1d7',
        text: '#fcfcfc',
      },
    },
  },
  plugins: [],
}
