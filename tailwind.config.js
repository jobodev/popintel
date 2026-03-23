/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './**/*.html', './**/*.js'],

  theme: {
    // Breakpoints are perfect, kept exactly as you had them
    screens: {
      tablet:  '800px',   // 800–1279
      desktop: '1280px',  // 1280+
    },

    extend: {
      // ── PopIntel Color Palette ──────────────────────────────────────
      colors: {
        'brand-dark':     '#0c1a62', // Deep blue (Hero/Header)
        'brand-light':    '#38b6ff', // Bright blue (Buttons)
        'brand-accent':   '#c8e8ff', // Pale blue (Demo Button)
        'brand-hover':    '#2a8fd4', // Darker bright blue (Hover states)
        
        'bg-white':       '#FFFFFF', // Standard background
        'bg-gray':        '#f9f9f9', // Light gray section background
        
        'text-main':      '#000000', // Black text
        'text-muted':     '#6f6f6f', // Mid grey paragraph text
        'text-light':     '#929292', // Light grey text/borders
        
        'divider':        '#e9e9e9', // Border lines
      },

      // ── PopIntel Typography ─────────────────────────────────────────
      fontFamily: {
        // Setting Work Sans as the primary sans font
        sans:  ['"Work Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        mono:  ['"Roboto Mono"', 'monospace'],
      },

      // Font-size tokens (kept from your original structure)
      fontSize: {
        'display': ['160px', { lineHeight: '0.9',  letterSpacing: '-6.8px'   }],
        'h1':      [ '60px', { lineHeight: '0.9',  letterSpacing: '-1.8px'   }],
        'h2':      [ '40px', { lineHeight: '1',    letterSpacing: '-1.6px'   }],
        'h3':      [ '18px', { lineHeight: '1',    letterSpacing: '-0.54px'  }],
        'body':    [ '15px', { lineHeight: '1.4',  letterSpacing: '-0.075px' }],
        'ui':      [ '14px', { lineHeight: '1.4',  letterSpacing: '-0.35px'  }],
        'label':   [ '12px', { lineHeight: '1.4',  letterSpacing: '-0.12px'  }],
      },

      // ── Spacing ────────────────────────────────────────────────────
      spacing: {
        'section':    '80px',
        'section-sm': '50px',
        'gap-comp':   '50px',
      },
    },
  },

  plugins: [],
}