/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wheat: "#F6E7CB",
        oat: "#EBD3A6",
        forest: "#16442F",
        pine: "#0E3023",
        brass: "#C29A52",
        apricot: "#E9A23B",
        jam: "#8B2E3A",
        bark: "#2E2116",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
