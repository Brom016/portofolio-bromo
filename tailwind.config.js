/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
      screens: {  // Corrected this key
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
