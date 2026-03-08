/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './**/*.html', './**/*.js'],

  theme: {
    // Replace default breakpoints to match Figma spec exactly
    screens: {
      tablet:  '800px',   // 800–1279
      desktop: '1280px',  // 1280+
    },

    extend: {
      // ── Color palette ──────────────────────────────────────────────
      colors: {
        'site-bg':        '#3E513E', // page background (dark green)
        'bg-1':           '#FFFFFF', // Background 1

        'accent-1':       '#485C11', // deep olive
        'accent-2':       '#DFECC6', // light sage
        'accent-3':       '#8E9C78', // mid sage
        'accent-4':       '#000000', // black
        'accent-5':       '#6F6F6F', // mid grey
        'accent-6':       '#929292', // light grey

        'text-headline':  '#000000',
        'text-paragraph': '#6F6F6F',
        'text-caption':   '#485C11',
        'text-link':      '#000000',
        'on-accent':      '#FFFFFF',

        'divider':        '#E9E9E9',
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],          // headlines
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],        // body / UI
        mono:  ['"Roboto Mono"', 'monospace'],                  // labels
      },

      // Font-size tokens mapped from the Figma Text Styles component
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
