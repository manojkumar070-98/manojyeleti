/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          red: '#af1c19',
          darkRed: '#780f0d',
          glow: 'rgba(175, 28, 25, 0.4)'
        },
        obsidian: {
          DEFAULT: '#09090b',
          light: '#121217',
          card: '#16161c',
          border: '#272732',
          subtle: '#323242'
        },
        champagne: {
          DEFAULT: '#d4af37',
          light: '#f5e7a9',
          muted: '#a38426'
        }
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
