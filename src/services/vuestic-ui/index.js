// import { ColorThemeActionsMixin } from 'vuestic-ui/src/services/ColorThemePlugin' // TODO
import { ColorThemePlugin, ColorThemeMixin, ColorThemeActionsMixin } from 'vuestic-ui/src/services/ColorThemePlugin'
import { hex2rgb, hex2hsl } from 'vuestic-ui/src/services/color-functions' // TODO
// import { getHoverColor, getGradientBackground, hex2rgb, hex2hsl } from 'vuestic-ui/src/services/color-functions'
// import { ColorThemePlugin, ColorThemeMixin } from 'vuestic-ui-next/src/services/ColorThemePlugin.ts'
import { getHoverColor, getGradientBackground, shiftHslColor } from 'vuestic-ui-next/src/services/color-functions.ts'

export {
  ColorThemePlugin,
  ColorThemeMixin,
  ColorThemeActionsMixin,
  getHoverColor,
  getGradientBackground,
  hex2rgb,
  hex2hsl,
  shiftHslColor,
}
