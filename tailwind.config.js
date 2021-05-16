module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-background': "url('assets/hero-bg.jpg')"
      }),
      spacing: {
        112: '28',
        128: '32',
        144: '36',
        160: '40',
        192: '48',
        224: '56',
        256: '64'
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['16rem', { lineHeight: '1' }],
        '13xl': ['20rem', { lineHeight: '1' }],
        '14xl': ['24rem', { lineHeight: '1' }]
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      padding: ['hover'],
      borderRadius: ['hover']
    }
  },
  plugins: []
}
