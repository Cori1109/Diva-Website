module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      text: '#fff',
      blue: '#00496B',
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
