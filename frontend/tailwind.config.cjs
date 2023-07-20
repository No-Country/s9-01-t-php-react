/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#516091",
        secondary: "#FA5F49",
        ligthblue: "#ADD5FA",
        grey: "#545454"
      },
      boxShadow: {
        buttonshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};
