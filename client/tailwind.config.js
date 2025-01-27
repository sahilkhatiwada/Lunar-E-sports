/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        press:['"Press Start 2P"', 'cursive'],
        audio : ['"Audiowide"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-up': 'slideUp 2s ease-in-out',
        'mouse-scroll': 'scroll 1.5s infinite',
        'bg-gradient': 'bgMove 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        bgMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}