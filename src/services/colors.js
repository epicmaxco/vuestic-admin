const red = Object.freeze({
  gradientLeftBorder: '#f44336',
  gradientRightBorder: '#ffebee',
  boxShadow: '#b86e6d',
  borderColor: '#e34b4a',
  hoverColor: '#e57373',
  focusColor: '#ef5350',
})

const blue = Object.freeze({
  gradientLeftBorder: '#32b5e4',
  gradientRightBorder: '#2c82e0',
  boxShadow: '#6c97ac',
  borderColor: '#2c82e0',
  hoverColor: '#caeeff',
  focusColor: '#b2defb',
})

const green = Object.freeze({
  gradientLeftBorder: '#63e5b3',
  gradientRightBorder: '#23e066',
  boxShadow: '#77cea4',
  borderColor: '#40e583',
  hoverColor: '#d6ffd3',
  focusColor: '#c0fbc7',
})

const yellow = Object.freeze({
  gradientLeftBorder: '#ffd72d',
  gradientRightBorder: '#feb900',
  boxShadow: '#cbb06e',
  borderColor: '#ffc202',
  hoverColor: '#fff3d1',
  focusColor: '#ffebb1',
})

const gray = Object.freeze({
  gradientLeftBorder: '#cdd0d5',
  gradientRightBorder: '#b4b6b9',
  boxShadow: '#a3aab0',
  borderColor: '#babfc2',
  hoverColor: '#e6e9ec',
  focusColor: '#dfe3e5',
})

const black = Object.freeze({
  gradientLeftBorder: '#576675',
  gradientRightBorder: '#34495e',
  boxShadow: '#aebcca',
  borderColor: '#34495e',
  hoverColor: '#afb6bb',
  focusColor: '#afb6bb',
})

export default {
  install (Vue, options) {
    Vue.prototype.$theme =
      {
        theme:
          {
            success: green.borderColor,
            info: blue.borderColor,
            danger: red.borderColor,
            warning: yellow.borderColor,
            gray: gray.borderColor,
            dark: black.borderColor
          }
      }
  }
}
