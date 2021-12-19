module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
  },
  plugins: [
    require('daisyui'),
  ],
}
