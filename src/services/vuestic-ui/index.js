import { ColorThemePlugin, ColorThemeMixin, ColorThemeActionsMixin } from 'vuestic-ui/src/services/ColorThemePlugin'
import { getHoverColor, getGradientBackground, hex2rgb, hex2hsl } from 'vuestic-ui/src/services/color-functions'

const colorShiftHsl = (main, offset = { h: 0, s: 0, l: 0 }) => {
  offset = {
    h: offset.h || 0,
    s: offset.s || 0,
    l: offset.l || 0,
  }

  const color = hex2hsl(main)

  const normalizeParam = (value, params = { start: 0, end: 100 }) =>
    value < params.start
      ? params.start
      : value > params.end
        ? params.end
        : value

  color.h = normalizeParam(color.h + offset.h, { end: 360 })
  color.s = normalizeParam(color.s + offset.s)
  color.l = normalizeParam(color.l + offset.l)

  return color
}

export {
  ColorThemePlugin,
  ColorThemeMixin,
  ColorThemeActionsMixin,
  getHoverColor,
  getGradientBackground,
  hex2rgb,
  hex2hsl,
  colorShiftHsl,
}
