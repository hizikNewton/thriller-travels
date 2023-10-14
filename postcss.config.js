import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import tailwindConfig from './src/styles/tailwind.config.js';

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
