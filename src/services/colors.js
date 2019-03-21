const themes = {
  primary: '#40e583',
  success: '#40e583',
  info: '#2c82e0',
  danger: '#e34b4a',
  warning: '#ffc202',
  gray: '#babfc2',
  dark: '#34495e'
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
    if (options && options.theme) {
      Object.assign(Vue.prototype.$themes, options.theme)
    } else {
      Vue.prototype.$themes = themes
    }

    /* eslint-disable no-new */

    new Vue({ data: { themes: Vue.prototype.$themes } })
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
