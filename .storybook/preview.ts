import { type Preview, setup } from '@storybook/vue3'
import { createVuestic } from 'vuestic-ui'
import vuesticGlobalConfig from '../src/services/vuestic-ui/global-config'

setup((app) => {
  app.use(createVuestic({ config: vuesticGlobalConfig }))
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