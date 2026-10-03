import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#f2f0ec',
        mute: '#8a8a8a',
        line: 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 12vw, 14rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        display: ['clamp(2.5rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        label: ['11px', { letterSpacing: '0.2em', lineHeight: '1' }],
      },
      maxWidth: {
        container: '1600px',
      },
      spacing: {
        gutter: '1.25rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config