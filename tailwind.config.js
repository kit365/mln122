/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        capital: {
          dark: '#0f0f0f',
          gray: '#2a2a2a',
          light: '#4a4a4a',
        },
        labor: {
          light: '#4dd0e1',
          DEFAULT: '#00acc1',
          dark: '#00838f',
        },
        surplus: {
          light: '#ef5350',
          DEFAULT: '#e53935',
          dark: '#c62828',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grow': 'grow 2s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        }
      }
    },
  },
  plugins: [],
}

