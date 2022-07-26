const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: 'rgba(13, 152, 186, 1)',
          bg_color: '#C0E4ED',
          light_color: '#ffff',
          shadow_color: '#667f85',
          text_1: '#000000',
          text_2: 'rgb(55 65 81)',
          text_3: 'rgb(156 163 175)',
        },
        dark: {
          primary: '#013356',
          bg_color: '#001B26',
          light_color: '#1F1F1F',
          shadow_color: '#000F15',
          text_1: '#ffff',
          text_2: 'rgb(229 231 235)',
          text_3: 'rgb(107 114 128)',
        },
      },
    },
  },
  plugins: [],
}
