// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin, ContextPlugin } from '../services/vuestic-ui'
// import { getContext } from '../context'
import store from '../store/index'
import router from '../router/index'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'

import '../metrics'
import '../registerServiceWorker'

import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'

consoleBuildInfo()

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)

Vue.use(ColorThemePlugin, {
  // override colors here.
})

// context
Vue.use(ContextPlugin, {
  VaIcon: {
    iconsConfig: {
      defaultFont: 'fab',
      icons: {
        github: {
          code: 'github',
        },
      },
    },
    sizesConfig: {
      defaultSize: 24,
      sizes: {
        small: 16,
        medium: 24,
        large: 32,
      },
    },
  },
  VaRating: {
    sizesConfig: {
      defaultSize: 24,
      sizes: {
        small: 16,
        medium: 24,
        large: 32,
      },
    },
  },
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
