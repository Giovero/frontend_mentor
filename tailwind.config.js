/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { html: ["Outfit"] },
    extend: {
      fontSize: {
        base: "15px",
      },
      colors: {
        "light-gray": "#d6e2f0",
        "grayish-blue": "#7b879d",
        "dark-blue": "#1f3251",
      },
    },
  },
  plugins: [],
};
