const textSizes = {
  regularSmall: {
    fontSize: '0.8125rem',
    lineHeight: '1rem',
  },
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        regularSmall: ['0.8125rem', '1rem'],
        base: '14px',
      },
      maxWidth: {
        '7xl': '1260px',
      },
      colors: {
        primary: '#154EC1',
        secondary: '#767C88',
        success: '#3D9209',
        info: '#158DE3',
        danger: '#E42222',
        warning: '#FFD43A',
        backgroundPrimary: '#f6f6f6',
        backgroundSecondary: '#FFFFFF',
        backgroundElement: '#ECF0F1',
        backgroundCardPrimary: '#F7F9F9',
        backgroundCardSecondary: '#ECFDE6',
        backgroundBorder: '#DEE5F2',
        textPrimary: '#262824',
        textInverted: '#FFFFFF',
        shadow: 'rgba(0, 0, 0, 0.12)',
        focus: '#49A8FF',
      },
      screens: {
        xs: '0px',
        sm: '640px',
        md: '1024px',
        lg: '1440px',
        xl: '1920px',
      },
    },
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
}
