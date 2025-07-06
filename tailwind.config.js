/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'mobile': {'max': '767px'}, // Mobile-first breakpoint
        'tablet': {'min': '768px', 'max': '1023px'}, // Tablet breakpoint
        // Default breakpoints: sm: '640px', md: '768px', lg: '1024px', xl: '1280px', 2xl: '1536px'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'nav-bottom': '4rem', // 64px for bottom navigation
      },
      height: {
        'mobile-screen': 'calc(100vh - env(safe-area-inset-bottom) - 4rem)',
        'full-screen': 'calc(100vh - env(safe-area-inset-bottom))',
      },
      minHeight: {
        'mobile-screen': 'calc(100vh - env(safe-area-inset-bottom) - 4rem)',
        'full-screen': 'calc(100vh - env(safe-area-inset-bottom))',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'float-fast': 'float-fast 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'bounce-medium': 'bounce-medium 2.5s ease-in-out infinite',
        'bounce-fast': 'bounce-fast 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'digital-pulse': 'digital-pulse 3s ease-in-out infinite',
        'data-flow': 'data-flow 4s linear infinite',
        'circuit-glow': 'circuit-glow 2s ease-in-out infinite',
        'hologram-spin': 'hologram-spin 8s linear infinite',
        'neural-pulse': 'neural-pulse 2.5s ease-in-out infinite',
        'digital-rain': 'digital-rain 6s linear infinite',
        'quantum-float': 'quantum-float 12s ease-in-out infinite',
        'matrix-code': 'matrix-code 2s ease-in-out infinite',
        'energy-wave': 'energy-wave 3s ease-in-out infinite',
        'touch-ripple': 'touch-ripple 1s ease-out forwards',
        'touch-burst': 'touch-burst 0.8s ease-out forwards',
        'burst-particle': 'burst-particle 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.5s ease-out forwards',
        'modalSlideUp': 'modalSlideUp 0.3s ease-out forwards',
        'modalSlideDown': 'modalSlideDown 0.3s ease-out forwards'
      },
      keyframes: {
        'slideInRight': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'burst-particle': {
          '0%': { transform: 'scale(0) translateY(0)', opacity: '1' },
          '100%': { transform: 'scale(3) translateY(-40px)', opacity: '0' }
        },
        'modalSlideUp': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'modalSlideDown': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }
        }
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      }
    },
  },
  plugins: [],
}
