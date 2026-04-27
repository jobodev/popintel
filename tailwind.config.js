/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './**/*.html', './**/*.js'],
  theme: {
    screens: {
      tablet:  '800px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        brand: {
          dark: '#0A1128',   // Deep, trustworthy navy blue
          light: '#38b6ff',  // The vibrant blue from your SVGs
        },
        text: {
          main: '#1f2937',   // Slate 800 - High contrast reading
          muted: '#4b5563',  // Slate 600 - Secondary text
          light: '#9ca3af',  // Slate 400 - Tertiary text/placeholders
        },
        bg: {
          gray: '#f9fafb',   // Gray 50 - Soft off-white for alternate sections
        },
        divider: '#e5e7eb',  // Gray 200 - Subtle borders
      },
      fontFamily: {
        // This maps 'font-sans' to Work Sans and 'font-serif' to Crimson Text
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['"Crimson Text"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      }
    }
  },
  plugins: [],
}