module.exports = {
  content: [
    './index.html',  // Hanya index.html
    './src/**/*.{html,js,css}',  // Semua file HTML, JS, CSS dalam folder src
  ],
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
