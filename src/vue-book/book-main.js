import Vue from 'vue'
import BookApp from './BookApp'
import VueClipboard from 'vue-clipboard2'
import Router from 'vue-router'
import { VueBookComponents, createRoute } from 'vue-book'
import { ColorThemePlugin } from '../services/ColorThemePlugin'
import { DropdownPopperPlugin } from '../vuestic-theme/vuestic-components/va-dropdown/dropdown-popover-subplugin'
import { BusPlugin } from 'vue-epic-bus'
import { registerVuesticObject } from '../vuestic-theme/resize-events'
import { installPlatform } from '../vuestic-theme/vuestic-components/va-popup/install'

installPlatform()

Vue.use(Router)
Vue.use(VueBookComponents)
Vue.use(ColorThemePlugin)
Vue.use(DropdownPopperPlugin)

const router = new Router({
  routes: [
    createRoute({
      requireContext: require.context('./../vuestic-theme', true, /.demo.vue$/),
      path: '/demo',
    }),
    createRoute({
      requireContext: require.context('./../components', true, /.demo.vue$/),
      path: '/presentation',
    }),
    {
      path: '*',
      redirect: '/demo',
    },
  ],
})

registerVuesticObject(Vue)

Vue.use(BusPlugin)
Vue.use(VueClipboard)
Vue.use(DropdownPopperPlugin)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(BookApp),
}).$mount('#app')
