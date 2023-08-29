/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "500px",
        xm: "800",
        lg: "1400px",
        xl: "1600",
      },
    },
  },
  plugins: [],
};
