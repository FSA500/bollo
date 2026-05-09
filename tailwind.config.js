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
          DEFAULT: '#6DCBA0',
          light:   '#e8f7f0',
          dark:    '#4aaa80',
        },
        forest: {
          DEFAULT: '#1a3d35',
          deep:    '#0f2d26',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          hover:   '#ff4f4f',
        },
        bollo: {
          bg:        '#f5f7f5',
          surface:   '#ffffff',
          text:      '#1c2b28',
          'text-soft': '#4a6660',
          border:    '#e2ece8',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #0f2d26 0%, #1a3d35 60%, #1f5045 100%)',
        'mint-gradient':   'linear-gradient(135deg, #6DCBA0, #4aaa80)',
      },
      animation: {
        'float':  'mascotFloat 3.5s ease-in-out infinite',
        'cheer':  'mascotCheer 0.7s ease-in-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
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
