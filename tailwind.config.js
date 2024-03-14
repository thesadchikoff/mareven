module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "300px",
      tablet: "768px",
      desktop: "1000px",
    },
    container: {
      center: true,
      padding: 10,
      screens: {
        ssm: "450px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1400px",
      },
    },
    fontFamily: {
      sans: ['"PT Sans Narrow", sans-serif']
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
}