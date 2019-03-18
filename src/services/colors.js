const red = {
  gradientLeftBorder: '#ff7455',
  gradientRightBorder: '#f44336',
  boxShadow: '#b86e6d',
  borderColor: '#e34b4a',
  hoverColor: '#ffebeb',
  focusColor: '#fbd2d2',
}

const blue = {
  gradientLeftBorder: '#32b5e4',
  gradientRightBorder: '#2c82e0',
  boxShadow: '#6c97ac',
  borderColor: '#2c82e0',
  hoverColor: '#caeeff',
  focusColor: '#b2defb',
}

const green = {
  gradientLeftBorder: '#63e5b3',
  gradientRightBorder: '#23e066',
  boxShadow: '#77cea4',
  borderColor: '#40e583',
  hoverColor: '#d6ffd3',
  focusColor: '#c0fbc7',
}

const yellow = {
  gradientLeftBorder: '#ffd72d',
  gradientRightBorder: '#feb900',
  boxShadow: '#cbb06e',
  borderColor: '#ffc202',
  hoverColor: '#fff3d1',
  focusColor: '#ffebb1',
}

const gray = {
  gradientLeftBorder: '#cdd0d5',
  gradientRightBorder: '#b4b6b9',
  boxShadow: '#a3aab0',
  borderColor: '#babfc2',
  hoverColor: '#e6e9ec',
  focusColor: '#dfe3e5',
}

const black = {
  gradientLeftBorder: '#576675',
  gradientRightBorder: '#34495e',
  boxShadow: '#aebcca',
  borderColor: '#34495e',
  hoverColor: '#afb6bb',
  focusColor: '#afb6bb',
}

const themes = {
  success: green.borderColor,
  info: blue.borderColor,
  danger: red.borderColor,
  warning: yellow.borderColor,
  gray: gray.borderColor,
  dark: black.borderColor
}

function hex2rgb (hex, opacity) {
  hex = (hex + '').trim()

  let rgb = null
  let match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/)

  if (!match) {
    return null
  }

  rgb = {}

  hex = match[1]

  if (hex.length === 6) {
    rgb.r = parseInt(hex.substring(0, 2), 16)
    rgb.g = parseInt(hex.substring(2, 4), 16)
    rgb.b = parseInt(hex.substring(4, 6), 16)
  } else if (hex.length === 3) {
    rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)
    rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
    rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
  }

  rgb.css = 'rgb' + (opacity ? 'a' : '') + '('
  rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b
  rgb.css += (opacity ? ',' + opacity : '') + ')'

  return rgb
}

export default {
  install (Vue, options) {
    Vue.mixin({
      data () {
        return {
          themes: themes
        }
      },
      watch: {
        themes: {
          handler: function (val, oldVal) {
          },
          deep: true
        }
      }
    })
  }
}

export const getBoxShadowColor = (theme) => {
  return hex2rgb(themes[theme], 0.4).css
}

export const getHoverColor = (theme) => {
  return hex2rgb(themes[theme], 0.2).css
}

export const getFocusColor = (theme) => {
  return hex2rgb(themes[theme], 0.3).css
}

export const getGradientColor = (theme) => {
  return [ hex2rgb(themes[theme], 0.6).css, hex2rgb(themes[theme], 0.95).css ]
}
