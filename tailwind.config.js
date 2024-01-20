/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {


    extend: {
      colors: {
        'btn-color': '#E76F51',
      },
    },

  },
  plugins: [require("daisyui")],
}

