export const hex2rgb = (hex, opacity) => {
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

export const hex2hsl = (H) => {
  /*
   * the source text is taken from here (with minor modifications):
   * https://css-tricks.com/converting-color-spaces-in-javascript/
   */

  // Convert hex to RGB first. Ignore opacity
  let { r, g, b } = hex2rgb(H, 1)

  // Then to HSL
  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r, g, b)
  let cmax = Math.max(r, g, b)
  let delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  if (delta === 0) { h = 0 } else if (cmax === r) { h = ((g - b) / delta) % 6 } else if (cmax === g) { h = (b - r) / delta + 2 } else { h = (r - g) / delta + 4 }

  h = Math.round(h * 60)

  if (h < 0) { h += 360 }

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  const HSL = {
    h,
    s,
    l,

    get css () {
      return 'hsl(' + HSL.h + ',' + HSL.s + '%,' + HSL.l + '%)'
    },
  }

  return HSL
}

export const getBoxShadowColor = (color) => {
  return hex2rgb(color, 0.4).css
}

export const getHoverColor = (color) => {
  return hex2rgb(color, 0.2).css
}

export const getFocusColor = (color) => {
  return hex2rgb(color, 0.3).css
}

export const getGradientColor = (color) => {
  return [hex2rgb(color, 0.6).css, hex2rgb(color, 0.95).css]
}

export const getGradientBackground = (color) => {
  const [left, right] = getGradientColor(color)
  return `linear-gradient(to right, ${left}, ${right})`
}
