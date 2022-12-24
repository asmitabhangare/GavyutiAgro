/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    },
  })
})
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        primary: "#4A3AFF",
        navbg: "#dedbdb",
        textunder: "#092d92",
      },
    },
  },
  plugins: [Myclass],
}
