module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  separator: '_',
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
        10: '0.625rem',
        15: '0.9375rem',
        25: '1.5625rem',
        30: '1.875rem',
        40: '2.5rem',
        50: '3.125rem',
        60: '3.75rem',
        70: '4.375rem',
        75: '4.6875rem',
        100: '6.25rem',
        150: '9.375rem',
        175: '10.9375rem',
        200: '12.5rem',
        250: '15.625rem',
        300: '18.75rem',
        'full': '100%'
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
      margin: {
        'full': 'calc(50% - 50vw)'
      },
      maxWidth: {
        60: '3.75rem',
        700: '43.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
