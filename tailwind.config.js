/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './**/*.html', './**/*.js'],

  theme: {
    // Breakpoints are perfect, kept exactly as you had them
    screens: {
      tablet:  '800px',   // 800–1279
      desktop: '1280px',  // 1280+
    },

  },

  plugins: [],
}