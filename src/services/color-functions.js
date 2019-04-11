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
