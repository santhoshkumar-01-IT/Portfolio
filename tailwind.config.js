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
        // Aesthetic Monochrome Palette (Vercel / Linear / Apple dark minimalism)
        'tech-bg': '#050505',
        'tech-surface': '#0c0c0c',
        'tech-card': '#121212',
        'tech-card-hover': '#1a1a1a',
        'tech-border': '#222222',
        'tech-border-glow': 'rgba(255, 255, 255, 0.2)',
        'tech-white': '#ffffff',
        'tech-silver': '#e4e4e7',
        'tech-platinum': '#a1a1aa',
        'tech-muted': '#71717a',
        'tech-zinc': '#27272a',
        'tech-emerald': '#10b981', // Subtle online status
        // Backward compatibility mappings to monochrome tones
        'dark-bg': '#050505',
        'dark-card': '#121212',
        'dark-border': '#222222',
        'accent-blue': '#ffffff',
        'accent-purple': '#e4e4e7',
        'accent-pink': '#a1a1aa',
        'tech-cyan': '#ffffff',
        'tech-ruby': '#e4e4e7',
        'tech-rose': '#a1a1aa',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 1s step-start infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.08)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.18)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
