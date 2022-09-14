/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.tsx',
  './index.html'
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('/Fundo.png')",
        'nwl-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'game-gradient':'linear-gradient(180deg, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 67.88%)',
      }
    },
  },
  plugins: [],
}
