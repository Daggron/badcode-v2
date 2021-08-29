module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './scenes/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      animation: ['motion-reduce'],
      opacity: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
