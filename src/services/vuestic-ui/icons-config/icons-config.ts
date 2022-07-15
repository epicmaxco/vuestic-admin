import { createIconsConfig } from 'vuestic-ui'
import aliases from './aliases'

export default createIconsConfig({
  aliases,
  fonts: [
    {
      name: 'fa4-{code}',
      resolve: ({ code }) => ({ class: `fa4 fa fa-${code}` }),
    },
    {
      name: 'ion-{code}',
      resolve: ({ code }) => ({
        class: `icon ion-md-${code}`,
      }),
    },
    {
      name: 'vuestic-iconset-{code}',
      resolve: ({ code }) => ({ class: `vuestic-iconset vuestic-iconset-${code}` }),
    },
    {
      name: 'flag-icon-{code} {size}',
      resolve: ({ code, size }) => ({ class: `fi fi-${code} fi-size-${size}`, tag: 'span' }),
    },
    {
      name: /(brandico|entypo|fa|fontelico|glyphicon|iconicstroke|maki|openwebicons|ion)-(.*)/,
      resolveFromRegex: (font, code) => ({ class: `${font} ${font}-${code}` }),
    },
    {
      name: 'material-icons-{code}',
      resolve: ({ code }) => ({ to: code }),
    },
  ],
})
