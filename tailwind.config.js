module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        green: {
          950: '#81E291',
          960: '#00242C',
        },
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
    minWidth: {
      '4/5': '45%',
    }
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}
