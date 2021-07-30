module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '100px': '100px',
        '150px': '150px',
        '160px': '160px',
        '190px': '190px',
        '194px': '194px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#5491f0',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'panel': '#4a505f',
        'header': '#f2f2f2',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
