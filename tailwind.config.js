/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0D0D0D',
          800: '#141414',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2A2A2A',
        },
        'accent-amber': '#F59E0B',
        'accent-cyan': '#06B6D4',
        'accent-purple': '#8B5CF6',
        'accent-emerald': '#10B981',
        'accent-rose': '#EF4444',
        'accent-orange': '#F97316',
        'accent-pink': '#EC4899',
        'accent-teal': '#14B8A6',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease forwards',
        fadeIn: 'fadeIn 0.3s ease forwards',
        scaleIn: 'scaleIn 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
