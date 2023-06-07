module.exports = {
  content: ['./pages/*.html'],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        mainColorRed: "#960606",
        buttonColor: "#2CAEA0",
      },
      boxShadow: {
        'mainRed': '0px -80px 55px -12px rgba(146, 0, 10, 0.78) inset'
      }
    },
  },
  plugins: [],
}

