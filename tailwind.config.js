const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(13, 152, 186, 1)',
        bg_color: '#C0E4ED',
        light_color: '#ffff',
        shadow_color: '#667f85',
      },
    },
  },
  plugins: [],
}
