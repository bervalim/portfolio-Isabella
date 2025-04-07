/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Certifique-se de que está apontando para seus arquivos corretamente
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          25: "#919BA7",
          50: "#5F6D7E",
          100: "#49556D",
          200: "#384255",
          500: "#2E3646",
          800: "#252D3C",
          950: "#151B28",
        },
      },
    },
  },
  plugins: [],
};
