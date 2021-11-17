module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx}', './src/ui/**/*.{js,jsx}', './src/features/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        accent: '#34495e',
      },
    },
  },
  variants: {
    extend: {},
  },
};
