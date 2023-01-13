/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#fcfcfc',
        primary: '#5381fe',
        secondary: '#4267cb',
        warning: '#F44762',
        items: '#D8DBE0',
        text: '#4B4B4B',
      },
    },
  },
  plugins: [],
}
