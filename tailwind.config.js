/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'zinc-100-30': 'rgba(244, 244, 245, 0.3)',
        'zinc-100-1': 'rgba(244, 244, 245, 1)',
      },
    },
  },
  plugins: [],
};
