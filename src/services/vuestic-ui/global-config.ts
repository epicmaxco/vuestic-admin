import VaIcon from './components/va-icon'
import iconsConfig from './icons-config/icons-config'
import { COLOR_THEMES } from './themes'

export default {
  components: {
    VaIcon,
    ...COLOR_THEMES[0].components,
    VaButton: {
      round: true,
    },
  },
  colors: {
    variables: COLOR_THEMES[0].colors,
  },
  icons: iconsConfig,
  breakpoint: {
    enabled: true,
    bodyClass: true,
    thresholds: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1440,
    },
  },
}
