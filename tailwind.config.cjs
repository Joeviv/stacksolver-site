/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    // Aquí recreamos la clase .glass-panel y .text-glow sin usar CSS externo
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glass-panel': {
          'background-color': 'rgba(24, 24, 27, 0.4)', // bg-zinc-900/40
          'backdrop-filter': 'blur(24px)',             // backdrop-blur-xl
          'border': '1px solid rgba(39, 39, 42, 0.5)', // border-zinc-800/50
        },
        '.text-glow': {
          'text-shadow': '0 0 20px rgba(59, 130, 246, 0.5)',
        }
      })
    })
  ],
}