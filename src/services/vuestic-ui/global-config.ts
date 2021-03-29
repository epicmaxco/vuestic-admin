import VaIcon from './global-configs/va-icon'
import VaToast from './global-configs/va-toast'
import VaButton from './global-configs/va-button'
import iconsConfig from './icons-config'
import { COLOR_THEMES } from './theme'

export default {
  components: {
    VaIcon,
    VaToast,
    VaButton,
  },
  colors: COLOR_THEMES[0].colors,
  icons: iconsConfig
}
