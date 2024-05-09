/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        celeste_claro: "#E2FEFF",
        celeste_oscuro: "#21CDB4",
        azul_oscuro: "#04496D",
        gris_claro: "#E8E7E7",
        naranja: "#F76D6D",
        blanco: "#EFF5FA",
        grisOscuro: "#4C536B",
      },
      backgroundImage: {
        desktop: "url('/public/bg_desktop.png')",
      },
      fontFamily: {
        quicksand: "Quicksand, sans-serif",
      },
    },
  },
  plugins: [],
};
