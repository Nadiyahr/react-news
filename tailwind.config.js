/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tx,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        'blue-night': '#121B30',
        'gray-icon': '#919191',
        'gray-ligt': '#F6F6F6',
        'top-color': '#3c373acc'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        slide2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        beat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        'scroll-text': 'slide 25s linear infinite',
        'scroll-text2': 'slide 25s linear infinite',
        'beat-load': 'beat 1s infinite'
      }
    }
  },
  plugins: []
};
