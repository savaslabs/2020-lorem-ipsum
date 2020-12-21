module.exports = {
  purge: {
    enabled: true,
    content: [
      'src/**/*.*',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  separator: '_',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
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
        20: '1.25rem',
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
        20: '1.25rem',
        24: '1.5rem',
        33: '2.0625rem',
        36: '2.25rem',
      },
      margin: {
        'full': 'calc(50% - 50vw)'
      },
      maxHeight: {
        60: '3.75rem',
      },
      maxWidth: {
        60: '3.75rem',
        100: '6.25rem',
        350: '21.875rem',
        700: '43.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
