/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heroRed: '#E30613',
        heroDark: '#080808',
        heroCard: '#121212',
        heroBorder: '#262626',
        heroMuted: '#999999',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(227, 6, 19, 0.15)',
        'red-glow-strong': '0 0 30px rgba(227, 6, 19, 0.4)',
      }
    },
  },
  plugins: [],
}
