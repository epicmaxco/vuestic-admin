import Platform from './plugins/platform'
import Vue from 'vue'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
export const installPlatform = () => {
  const queues = {
    server: [], // on SSR update
    takeover: [], // on client takeover
  }

  const framework = {}
  Platform.install(framework, queues, Vue)
}
