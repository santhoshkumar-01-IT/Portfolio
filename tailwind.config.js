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
        'tech-bg': '#080c14',
        'tech-surface': '#0d1322',
        'tech-card': '#11192e',
        'tech-card-hover': '#16223d',
        'tech-border': '#1e293b',
        'tech-border-glow': 'rgba(56, 189, 248, 0.25)',
        'tech-cyan': '#00f2fe',
        'tech-blue': '#38bdf8',
        'tech-indigo': '#6366f1',
        'tech-purple': '#8b5cf6',
        'tech-emerald': '#10b981',
        'tech-amber': '#f59e0b',
        // Backward compatibility
        'dark-bg': '#080c14',
        'dark-card': '#11192e',
        'dark-border': '#1e293b',
        'accent-blue': '#00f2fe',
        'accent-purple': '#6366f1',
        'accent-pink': '#ec4899',
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
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' },
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
        'grid-pattern': "radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
