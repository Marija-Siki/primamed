/** @type {import('tailwindcss').Conf ig}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        backgroundColor: "#393737",
      },
    },
    screens: {
      'md': '640px',
      'lg': '1280px',
    },
  },
  plugins: [],
};
