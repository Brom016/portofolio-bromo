/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"], // Sesuaikan path jika perlu
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        customBackground: '#111111',
        primary: '#d1d5db',
        bright: '#2dd4bf',
        footer: '#374151',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
