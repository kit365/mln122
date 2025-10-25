/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: {
          dark: '#1E1E1E',      // Xám than chính
          gray: '#2A2A2A',       // Xám than phụ
          light: '#3A3A3A',      // Xám than nhạt
        },
        // Text colors
        text: {
          primary: '#FFFFFF',     // Trắng cho tiêu đề
          secondary: '#CCCCCC',   // Xám sáng cho nội dung
          accent: '#A0A0A0',      // Xám bạc cho khung viền
        },
        // Concept colors
        marx: {
          light: '#FF6B6B',       // Đỏ nhạt cho từ khóa Marx
          DEFAULT: '#D62828',     // Đỏ chính cho khái niệm Marx
          dark: '#B71C1C',        // Đỏ đậm
        },
        tech: {
          light: '#4FC3F7',       // Xanh nhạt cho công nghệ
          DEFAULT: '#007ACC',     // Xanh chính cho công nghệ/phát triển
          dark: '#0056B3',        // Xanh đậm
        },
        // Legacy colors (keeping for compatibility)
        capital: {
          dark: '#1E1E1E',
          gray: '#2A2A2A',
          light: '#3A3A3A',
        },
        labor: {
          light: '#4FC3F7',
          DEFAULT: '#007ACC',
          dark: '#0056B3',
        },
        surplus: {
          light: '#FF6B6B',
          DEFAULT: '#D62828',
          dark: '#B71C1C',
        }
      },
      fontFamily: {
        'title': ['Bebas Neue', 'Montserrat', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Lato', 'Open Sans', 'Roboto', 'sans-serif'],
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

