module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'tennis': "url('/bg.png?webp')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
