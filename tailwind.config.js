/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071426',
        navy: { 900: '#0b1a2e', 800: '#0f2a52', 700: '#12365f' },
        teal: { brand: '#25d3d0', soft: '#7fe9e6' },
        sky: { brand: '#0a7bbd' },
        mist: '#f4f9fd',
        wa: '#25d366',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        floatSlow: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-14px) rotate(3deg)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '.55' }, '100%': { transform: 'scale(1.9)', opacity: '0' } },
        drawLine: { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
        shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
        gridDrift: { to: { backgroundPosition: '90px 90px' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        waWiggle: { '0%,88%,100%': { transform: 'rotate(0)' }, '90%': { transform: 'rotate(-8deg)' }, '94%': { transform: 'rotate(8deg)' }, '98%': { transform: 'rotate(-4deg)' } },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        pulseRing: 'pulseRing 2.2s ease-out infinite',
        drawLine: 'drawLine 1s .9s cubic-bezier(.2,.7,.2,1) both',
        shimmer: 'shimmer 6s linear infinite',
        gridDrift: 'gridDrift 14s linear infinite',
        waWiggle: 'waWiggle 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
