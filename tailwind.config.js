/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        "calc-close" : "calc(100vh - 64px)"
      },
      width: {
        "calc-20": "calc(20% - 24px)",
      },
      boxShadow: {
        "def-md": "0px 2px 8px 0px #e7e7e7",
      },
      colors: {
        "primary-text": "rgba(0, 0, 0, 0.85)",
        "highlighted": "rgb(10, 100, 255)",
        "highlighted-hov": "rgb(0, 84, 230)",
      },
    },
  },
  plugins: [],
};
