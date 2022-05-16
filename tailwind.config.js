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
      colors: {
        "light-brown": "#EFECE7",
        "light-blue": "#E2EDFA",
        "dark-blue": "#03438D",
        "dark-yellow": "#EEC32A",
        "light-yellow": "#FAA722",
        "danger-red": "#DE4B63",
        "light-green": "#83C51D",
        "light-red": "#F57375",
      },
      dropShadow: {
        left: "-2px 2px 0px #000400",
        bottom: "0px 3px 0px #000400",
        "left-o": "-8px 8px 0px #00040029",
      },
    },
  },
  plugins: [],
};
