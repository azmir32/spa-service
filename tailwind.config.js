/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e9ebe3',
          200: '#d4d8c8',
          300: '#b8c0a4',
          400: '#9caf88',
          500: '#829970',
          600: '#677a58',
          700: '#526148',
          800: '#434f3b',
          900: '#384232',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};