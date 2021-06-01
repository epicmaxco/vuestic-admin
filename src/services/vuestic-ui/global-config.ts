import VaIcon from './components/va-icon'
import VaToast from './components/va-toast'
import VaButton from './components/va-button'
import iconsConfig from './icons-config/icons-config'
import { COLOR_THEMES } from './themes'

export default {
  components: {
    VaIcon,
    VaToast,
    VaButton,
    ...COLOR_THEMES[0].components
  },
  colors: COLOR_THEMES[0].colors,
  icons: iconsConfig
}
