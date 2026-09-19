/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      colors: {
        // Obsidian Crimson Tech Palette
        'tech-bg': '#080608',
        'tech-surface': '#110d13',
        'tech-card': '#16101a',
        'tech-card-hover': '#211627',
        'tech-border': '#2d1c31',
        'tech-border-glow': 'rgba(244, 63, 94, 0.35)',
        'tech-crimson': '#ff2a5f',
        'tech-ruby': '#e11d48',
        'tech-scarlet': '#ff4d6d',
        'tech-rose': '#f43f5e',
        'tech-wine': '#be123c',
        'tech-emerald': '#10b981',
        'tech-amber': '#f59e0b',
        // Backward compatibility
        'dark-bg': '#080608',
        'dark-card': '#16101a',
        'dark-border': '#2d1c31',
        'accent-blue': '#ff2a5f',
        'accent-purple': '#e11d48',
        'accent-pink': '#ff4d6d',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 1s step-start infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 42, 95, 0.35)' },
          '50%': { boxShadow: '0 0 30px rgba(225, 29, 72, 0.55)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.15)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(244, 63, 94, 0.09) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
