/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    clipPath: {
      mypolygon: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
