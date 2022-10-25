/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
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
  plugins: [
    function ({ addVariant, addUtilities }) {
      addVariant("child", "& > *");
      addVariant("child-no-last", "& > *:not(:last-child)");
      addVariant("child-hover", "& > *:hover");

      addUtilities({
        ".bio-gradient-1": {
          background:
            "linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, rgba(32, 32, 32, 0.95) 48.96%)",
        },
        ".bio-gradient-2": {
          background:
            "linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, rgba(32, 32, 32, 0.95) 48.96%)",
        },
      });
    },
  ],
};
