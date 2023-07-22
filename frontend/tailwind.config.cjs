/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA897B",
        secondary: "#86E3CE",
        beige: "#FAC87B",
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
