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
      },
    },
    minWidth: {
      '1/2': '50%',
    }
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}
