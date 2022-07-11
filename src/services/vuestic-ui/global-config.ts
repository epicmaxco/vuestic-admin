import VaIcon from './components/va-icon'
import iconsConfig from './icons-config/icons-config'
import { COLOR_THEMES } from './themes'

export default {
  components: {
    VaIcon,
    ...COLOR_THEMES[0].components,
  },
  colors: COLOR_THEMES[0].colors,
  icons: iconsConfig,
}
