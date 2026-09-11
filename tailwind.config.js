/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGreen: {
          DEFAULT: '#73B737',
          hover: '#649e30',
          light: '#eef8e5'
        },
        themeBlue: {
          DEFAULT: '#209BE3',
          hover: '#1984c4',
          light: '#eaf5fc'
        },
        headingDark: '#222B40',
        softAsh: '#F9FAFC',
        pulseRed: '#F35858'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'pulse-ring-delayed': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '80%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
