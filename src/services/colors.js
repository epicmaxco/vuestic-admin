const red = Object.freeze({
  gradientLeftBorder: '#f44336',
  gradientRightBorder: '#ffebee',
  boxShadow: '#b86e6d',
  borderColor: '#e34b4a',
  hoverColor: '#ffebeb',
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

const themes = {
  success: green.borderColor,
  info: blue.borderColor,
  danger: red.borderColor,
  warning: yellow.borderColor,
  gray: gray.borderColor,
  dark: black.borderColor
}

export default {
  install (Vue, options) {
    Vue.prototype.$theme = themes

    let sheet = document.createElement('style')
    sheet.type = 'text/css'
    sheet.innerHTML = '.va-component--success { color: #F00; }'
    document.body.appendChild(sheet)
  }
}

export const getBackgroundColor = (theme) => {
  if (theme === 'success') {
    return green.backgroundColor
  }
  if (theme === 'info') {
    return blue.backgroundColor
  }
  if (theme === 'danger') {
    return red.backgroundColor
  }
  if (theme === 'warning') {
    return yellow.backgroundColor
  }
  if (theme === 'gray') {
    return gray.backgroundColor
  }
  if (theme === 'dark') {
    return black.backgroundColor
  }
}

export const getBoxShadowColor = (theme) => {
  if (theme === 'success') {
    return green.boxShadow
  }
  if (theme === 'info') {
    return blue.boxShadow
  }
  if (theme === 'danger') {
    return red.boxShadow
  }
  if (theme === 'warning') {
    return yellow.boxShadow
  }
  if (theme === 'gray') {
    return gray.boxShadow
  }
  if (theme === 'dark') {
    return black.boxShadow
  }
}

export const getHoverColor = (theme) => {
  if (theme === 'success') {
    return green.hoverColor
  }
  if (theme === 'info') {
    return blue.hoverColor
  }
  if (theme === 'danger') {
    return red.hoverColor
  }
  if (theme === 'warning') {
    return yellow.hoverColor
  }
  if (theme === 'gray') {
    return gray.hoverColor
  }
  if (theme === 'dark') {
    return black.hoverColor
  }
}

export const getFocusColor = (theme) => {
  if (theme === 'success') {
    return green.focusColor
  }
  if (theme === 'info') {
    return blue.focusColor
  }
  if (theme === 'danger') {
    return red.focusColor
  }
  if (theme === 'warning') {
    return yellow.focusColor
  }
  if (theme === 'gray') {
    return gray.focusColor
  }
  if (theme === 'dark') {
    return black.focusColor
  }
}

export const getGradientColor = (theme) => {
  if (theme === 'success') {
    return [ green.gradientLeftBorder, green.gradientRightBorder ]
  }
  if (theme === 'info') {
    return [ blue.gradientLeftBorder, blue.gradientRightBorder ]
  }
  if (theme === 'danger') {
    return [ red.gradientLeftBorder, red.gradientRightBorder ]
  }
  if (theme === 'warning') {
    return [ yellow.gradientLeftBorder, yellow.gradientRightBorder ]
  }
  if (theme === 'gray') {
    return [ gray.gradientLeftBorder, gray.gradientRightBorder ]
  }
  if (theme === 'dark') {
    return [ black.gradientLeftBorder, black.gradientRightBorder ]
  }
}
