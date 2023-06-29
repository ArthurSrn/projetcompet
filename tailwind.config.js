/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        'regal-green': '#E3F89D',
        'dark-green' : '#184A4E',
        'grey-title' : '#A2B7B2',
        'grey-pale' : '#5D8083',
        'grey-green' : '#184A4E33'
      },
      fontFamily: {
        'Hurme': 'var(--font-Hurme)',
      },
    },
  },
  plugins: [],
}
