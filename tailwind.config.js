/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        principal: '#BB0000',
        principal_2: '0056BB',
        transparente: "#fff4"
      },
      fontFamily: {
        font: ['Michorma', 'sans-serif'],
        fontDestaque: ['Michroma', 'sans-serif']
      }
    },
  },
  plugins: [],
}

