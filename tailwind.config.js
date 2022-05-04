module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "16rem",
      },
    },
    extend: {
      backgroundImage: {
        normal: "url('../assets/images/bg.svg')",
      },
    },
  },
  plugins: [],
};
