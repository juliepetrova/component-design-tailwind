const colours = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0c4a6e",
        primaryDark: "#0c326e",
        transparent: "transparent",
        orange: colours.orange,
        amber: colours.amber,
        teal: colours.teal,
        cyan: colours.cyan,
        sky: colours.sky,
      },
    },
  },
  plugins: [],
};
