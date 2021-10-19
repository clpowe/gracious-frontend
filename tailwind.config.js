module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#A8825B',
        primary: '#F6CFD6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
