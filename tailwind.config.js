module.exports = {
  content: [    
   './pages/**/*.{js,ts,jsx,tsx}',
   './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {    
      fontFamily: {
      'title': ['Rubik', 'sans-serif'],
      'body': ['"Nunito Sans"', 'sans-serif']
      },
      colors: {
        'grey-title': '#2a2e35',
        'grey-text': '#b2becd',
        'grey-body': '#12181b'
      },
      spacing: {
        '650': '650px',
      }
  }
    
  },
  plugins: [require('@tailwindcss/typography')],
}
