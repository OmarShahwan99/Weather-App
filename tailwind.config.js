/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      dark: {
        100: "#0b131e",
        200: "#202b3b",
      },
      light: {
        100: "#f5f5f5",
        200: "#fff",
      },
      paragraph: "#8e959e",
      primary: '#288cf1'
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
