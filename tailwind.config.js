module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#333333',
        },
      },
      spacing: {
        5: '0.3125rem',
        40: '2.5rem',
        70: '4.375rem',
        75: '4.6875rem',
        100: '6.25rem',
      },
      borderWidth: {
        7: '7px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontSize: {
        33: '2.0625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
