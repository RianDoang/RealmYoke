/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/script.js"],
  theme: {
    extend: {
      colors: {
        dark1: "#222831",
        dark2: "#393E46",
        dark3: "#00ADB5",
        dark4: "#00FFF5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
