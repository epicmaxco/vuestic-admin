import VaIcon from './components/va-icon'
import iconsConfig from './icons-config/icons-config'
import colors from './themes'
import { defineVuesticConfig } from 'vuestic-ui'

export default defineVuesticConfig({
  colors,
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
  components: {
    VaIcon,
    presets: {
      VaSelect: {
        small: {
          class: 'va-select--small',
          style:
            '--va-input-wrapper-min-height: 24px; --va-input-wrapper-border-radius: 2px; --va-input-wrapper-width: 72px;',
        },
      },
    },
  },
})
