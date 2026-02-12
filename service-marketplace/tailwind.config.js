/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f7',
          100: '#f0e6ea',
          200: '#e6d4dc',
          300: '#d9bfc7',
          400: '#c9a9b4',
          500: '#b8929f',
          600: '#a37b88',
          700: '#8d6672',
          800: '#77555e',
          900: '#6a1e2e',
        },
        secondary: {
          50: '#fdfcf4',
          100: '#faf8e9',
          200: '#f5f2d5',
          300: '#f0ecbf',
          400: '#e8e4a8',
          500: '#d4a017',
          600: '#b98c14',
          700: '#9a7711',
          800: '#7c620e',
          900: '#634e0c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}
