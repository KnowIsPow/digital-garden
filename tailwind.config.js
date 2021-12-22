module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx}', './src/ui/**/*.{js,jsx}', './src/features/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4a69bd',
        accent: '#0a3d62',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
