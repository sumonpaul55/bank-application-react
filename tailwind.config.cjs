/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimwhite: "rgbs(255, 255, 255, .7)",
        dimblue: "rgba(9, 151, 124, .1)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
