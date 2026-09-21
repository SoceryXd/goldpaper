import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: { 300:'#f2dc95', 400:'#e0bd5f', 500:'#c9a448', 600:'#a8812e' },
        ink: { 950:'#06080c', 900:'#0b0f15', 800:'#111822', 700:'#182331' }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(224,189,95,.16)',
        premium: '0 30px 90px rgba(0,0,0,.32)'
      }
    }
  },
  plugins: []
}
export default config
