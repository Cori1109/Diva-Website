module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            "*": {
              color: theme("colors.text"),
            },
          },
        },
      }),
    },
    colors: {
      current: "currentColor",
      text: "#afbed3",
      blue: "rgb(51, 147, 224)",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
