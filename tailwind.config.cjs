/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        'zoom-in': 'zoomIn 250ms ease-in forwards',
        'slide-in': 'slideIn 250ms ease-in forwards',
        'slide-out': 'slideOut 250ms ease-out forwards',
      },
      keyframes: {
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'scaleY(0)' },
          '100%': { opacity: 1, transform: 'scaleY(1)' },
        },
        slideOut: {
          '0%': { opacity: 1, transform: 'scaleY(1)' },
          '100%': { opacity: 0, transform: 'scaleY(0)' },
        },
      },
    },
  },
  plugins: [],
};
