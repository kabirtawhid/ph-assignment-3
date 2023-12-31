/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        caption: ["EB Garamond"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
