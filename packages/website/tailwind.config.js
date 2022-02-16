module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
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
      text: '#afbed3',
      blue: '#00496B',
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
