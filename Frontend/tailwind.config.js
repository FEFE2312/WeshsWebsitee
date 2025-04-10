/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1E1E1E',
        'medium-gray': '#2D2D2D',
        'light-gray': '#3A3A3A',
        'cream': '#F5F5DC',
        'cream-light': '#FFFFF0',
        'cream-dark': '#E6E6C8',
        'accent': '#d997fc',
        'accent2': '#FFD700'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};