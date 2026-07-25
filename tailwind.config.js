/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'maja-orange': '#FF8F00',
        'maja-orange-dark': '#E67E00',
        'maja-orange-light': '#FFB347',
        'maja-bg': '#F5F5DC',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        marquee: 'marquee 18s linear infinite',
        scaleIn: 'scaleIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
