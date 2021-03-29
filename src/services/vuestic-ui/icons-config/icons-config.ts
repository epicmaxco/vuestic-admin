import { createIconsConfig  } from 'vuestic-ui'
import aliases from './aliases'

export default createIconsConfig({
  aliases,
  fonts: [
    {
      name: /fa4-(.*)/,
      iconClass: (code) => `fa4 fa fa-${code}`
    },
    {
      name: /vuestic-iconset-(.*)/,
      iconClass: (code) => `vuestic-iconset vuestic-iconset-${code}`
    },
    {
      name: /flag-icon-(.*) (.*)/,
      iconClass: (code, size) => `flag-icon flag-icon-${code} flag-icon-${size}`
    },
    {
      name: /ion-(.*)/,
      iconClass: (code: string) => `icon ion-md-${code}`
    }
  ]
})
