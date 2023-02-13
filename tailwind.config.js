/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        nude:'#f2d3bc',
        p:'#b3afe8',
      },
      fontFamily:{
        custom:['Lato'],
      }
    
    },
  },
  plugins: [],
}