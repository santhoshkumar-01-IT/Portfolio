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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        // Cosmic Obsidian & Neon Orange Eclipse Theme
        'tech-bg': '#070709',
        'tech-surface': '#0c0c10',
        'tech-card': '#111116',
        'tech-card-hover': '#16161d',
        'tech-border': 'rgba(255, 255, 255, 0.08)',
        'tech-border-glow': 'rgba(255, 107, 0, 0.35)',
        'tech-white': '#ffffff',
        'tech-silver': '#f4f4f5',
        'tech-platinum': '#a1a1aa',
        'tech-muted': '#71717a',
        'tech-zinc': '#18181b',
        'tech-emerald': '#10b981',
        
        // Neon Orange / Solar Flare Accents
        'neon-orange': '#ff6b00',
        'neon-orange-light': '#ff8533',
        'neon-amber': '#ff9900',
        'neon-orange-dark': '#e05300',
        
        // Backward compatibility mappings
        'dark-bg': '#070709',
        'dark-card': '#111116',
        'dark-border': 'rgba(255, 255, 255, 0.08)',
        'accent-blue': '#ff6b00',
        'accent-purple': '#ff8533',
        'accent-pink': '#ff9900',
        'tech-cyan': '#ff6b00',
        'tech-ruby': '#ff5500',
        'tech-rose': '#ff7a00',
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
