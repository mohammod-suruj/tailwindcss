/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {


    extend: {
      colors: {
        'btn-color': '#E76F51',
        'bg-color': '#fdf1ee',


      },
    
    },

  },
  plugins: [require("daisyui")],
}

