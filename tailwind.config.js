/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fe',
          300: '#93d1fd',
          400: '#4DA6FF',
          500: '#2d8fef',
          600: '#1a73d5',
          700: '#1560b8',
          800: '#164f96',
          900: '#173f79',
        },
        dark: {
          900: '#070d1b',
          800: '#0e1a33',
          700: '#122040',
          600: '#1a2f55',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(77,166,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(77,166,255,0.7), 0 0 80px rgba(77,166,255,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #070d1b 0%, #0e1a33 50%, #122040 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
        'blue-mesh': 'radial-gradient(at 40% 20%, hsla(213,100%,60%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(209,100%,70%,0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(77,166,255,0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glow': '0 0 30px rgba(77,166,255,0.4)',
        'glow-sm': '0 0 15px rgba(77,166,255,0.3)',
        'card': '0 20px 60px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
