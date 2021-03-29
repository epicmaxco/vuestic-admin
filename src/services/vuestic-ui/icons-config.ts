import { createIconsConfig  } from 'vuestic-ui'

export default createIconsConfig({
  aliases: [
    {
      name: 'github',
      to: 'fa4-github',
    },
  ],
  fonts: [
    {
      name: /fa4-(.*)/,
      iconClass: (code) => `fa4 fa-${code}`
    }
  ]
})