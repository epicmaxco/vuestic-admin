import { type Preview, setup } from '@storybook/vue3'
import { createVuestic } from 'vuestic-ui'
import vuesticGlobalConfig from '../src/services/vuestic-ui/global-config'
import './storybook-main.scss'
import '../src/scss/main.scss'

import { createPinia } from 'pinia'

const pinia = createPinia()

setup((app) => {
  app.use(createVuestic({ config: vuesticGlobalConfig }))
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
