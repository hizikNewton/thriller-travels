/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'profile':"url('/src/assets/img/download.jpg'})",
        'banner':"url('/src/assets/img/london.jpg')"
      }
    },
  },
  plugins: [],
};
