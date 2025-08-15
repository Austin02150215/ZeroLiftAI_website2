/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1220',
        surface: 'rgba(255,255,255,0.06)',
        primary: '#00E0FF',
        secondary: '#7C5CFF',
        text: '#E6EAF2',
        muted: '#9AA4B2',
        success: '#22C55E',
        warning: '#F59E0B',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 224, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 224, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}