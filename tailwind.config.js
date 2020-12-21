module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#333333',
        },
        green: {
          100: '#E5FBEE'
        }
      },
      spacing: {
        5: '0.3125rem',
        30: '1.875rem',
        40: '2.5rem',
        50: '3.125rem',
        70: '4.375rem',
        75: '4.6875rem',
        100: '6.25rem',
        175: '10.9375rem',
        200: '12.5rem',
        250: '15.625rem',
        300: '18.75rem',
        'full': 'calc(50% - 50vw)'
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
