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
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),

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
  let first = hex2hsl(color)
  let second = hex2hsl(color)

  // hue circle degrees approximation
  const isRed = (first.h >= 0 && first.h < 45) || (first.h >= 285)
  const isYellow = first.h >= 45 && first.h < 85
  const isGreen = first.h >= 85 && first.h < 165
  const isBlue = first.h >= 165 && first.h < 285
  const isUndersaturated = first.s < 30 // i.e. too pale, gray-ish, monotone

  if (isRed) {
    first.h += 11
    first.s += 27
    first.l += 8
  } else if (isYellow) {
    first.h += 3
    first.l += 9

    second.h -= 2
  } else if (isGreen) {
    first.h += 13
    first.s -= 5
    first.l += 7

    second.h -= 3
    second.s -= 1
    second.l -= 6
  } else if (isBlue) {
    first.h -= 15
    first.s += 3
    first.l += 2
  }

  if (isUndersaturated) {
    first.l += 6
    second.l -= 2
  }

  // restrictions and validations
  if (first.h < 0) { first.h += 360 }
  if (first.h > 0) { Math.round(first.h = first.h % 360) }
  if (second.h < 0) { second.h += 360 }
  if (second.h > 0) { Math.round(second.h = second.h % 360) }

  first.s = first.s > 0 ? first.s : 0
  first.s = first.s < 100 ? first.s : 100
  second.s = second.s > 0 ? second.s : 0
  second.s = second.s < 100 ? second.s : 100

  first.l = first.l > 0 ? first.l : 0
  first.l = first.l < 100 ? first.l : 100
  second.l = second.l > 0 ? second.l : 0
  second.l = second.l < 100 ? second.l : 100

  return [first.css, second.css]
}

export const getGradientBackground = (color) => {
  const [left, right] = getGradientColor(color)
  return `linear-gradient(to right, ${left}, ${right})`
}
