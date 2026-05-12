/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#28E7C4',
          light:   '#e0fdf8',
          dark:    '#1bc5a8',
        },
        forest: {
          DEFAULT: '#0D1127',
          deep:    '#080C1A',
        },
        coral: {
          DEFAULT: '#6842E2',
          hover:   '#5a35d4',
        },
        bollo: {
          bg:             '#f4f4f6',
          'bg-gray':      '#ededf0',
          surface:        '#ffffff',
          'surface-gray': '#f7f7f8',
          text:           '#0D1127',
          'text-soft':    '#9CA9B9',
          border:         '#e0e0e8',
          'border-gray':  '#e4e4e3',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #080C1A 0%, #0D1127 60%, #111830 100%)',
        'mint-gradient':   'linear-gradient(135deg, #28E7C4, #1bc5a8)',
      },
      animation: {
        'float':    'mascotFloat 3.5s ease-in-out infinite',
        'cheer':    'mascotCheer 0.7s ease-in-out forwards',
        'fade-in':  'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        mascotFloat: {
          '0%':   { transform: 'translateY(0px) rotate(0deg)' },
          '25%':  { transform: 'translateY(-7px) rotate(0.6deg)' },
          '50%':  { transform: 'translateY(-11px) rotate(0deg)' },
          '75%':  { transform: 'translateY(-5px) rotate(-0.6deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        mascotCheer: {
          '0%':   { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '20%':  { transform: 'translateY(-20px) rotate(-8deg) scale(1.08)' },
          '45%':  { transform: 'translateY(-14px) rotate(8deg) scale(1.1)' },
          '65%':  { transform: 'translateY(-22px) rotate(-4deg) scale(1.09)' },
          '85%':  { transform: 'translateY(-8px) rotate(3deg) scale(1.04)' },
          '100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
