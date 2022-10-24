/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
        lg: "5rem",
        xl: "10rem",
        "2xl": "15rem",
      },
    },
    extend: {
      colors: {
        dark: {
          primary: {
            1: "#161616",
            2: "#202020",
            3: "#202020",
            4: "#888888",
            5: "#444444",
          },
          secondary: {
            1: "#0094FF",
            2: "#ED2590",
          },
          font: "#CCCCD2",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
