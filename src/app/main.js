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
      defaultFont: 'md',
      icons: {
        github: {
          code: 'github',
          font: 'fa4',
        },
        check: {
          code: 'check',
        },
        first_page: {
          code: 'first_page',
          font: 'md',
        },
        last_page: {
          code: 'last_page',
          font: 'md',
        },
        chevron_right: {
          code: 'chevron_right',
          font: 'md',
        },
        chevron_left: {
          code: 'chevron_left',
          font: 'md',
        },
        search: {
          code: 'search',
          font: 'fa4',
        },
        loop: {
          code: 'loop',
        },
        calendar_today: {
          code: 'calendar_today',
        },
        warning: {
          code: 'warning',
        },
        highlight_off: {
          code: 'highlight_off',
        },
        envelope: {
          code: 'fa-envelope-o',
          font: 'fa4',
        },
        circle: {
          code: 'fa-circle',
          font: 'fa4',
        },
        star: {
          code: 'fa-star',
          font: 'fa4',
        },
        star_empty: {
          code: 'fa-star-o',
          font: 'fa4',
        },
        pencil: {
          code: 'fa-pencil',
          font: 'fa4',
        },
        trash: {
          code: 'fa-trash',
          font: 'fa4',
        },
        caret_up: {
          code: 'fa-caret-up',
          font: 'fa4',
        },
        caret_down: {
          code: 'fa-caret-down',
          font: 'fa4',
        },
        minus: {
          code: 'fa-minus',
          font: 'fa4',
        },
        arrow_drop_down: {
          code: 'arrow_drop_down',
        },
        arrow_drop_up: {
          code: 'arrow_drop_up',
        },
        done: {
          code: 'done',
        },
        ion_md_close: {
          code: 'ion-md-close',
          font: 'ion',
        },
        ion_arrow_down: {
          code: 'ion-ios-arrow-down',
          font: 'ion',
        },
        maki_art_gallery: {
          code: 'maki-art-gallery',
          font: 'maki',
        },
        glyphicon_envelope: {
          code: 'glyphicon-envelope',
          font: 'glyphicon',
        },
        glyphicon_pencil: {
          code: 'glyphicon-pencil',
          font: 'glyphicon',
        },
        ion_ios_alarm: {
          code: 'ion-ios-alarm',
          font: 'ion',
        },
        entypo_user: {
          code: 'entypo-user',
          font: 'entypo',
        },
        bell_slash: {
          code: 'fa-bell-slash',
          font: 'fa4',
        },
        bell: {
          code: 'fa-bell',
          font: 'fa4',
        },
        volume_up: {
          code: 'fa-volume-up',
          font: 'fa4',
        },
        volume_off: {
          code: 'fa-volume-off',
          font: 'fa4',
        },
        iconicstroke_info: {
          code: 'iconicstroke-info',
          font: 'iconicstroke',
        },
        expand_more: {
          code: 'expand_more',
        },
        expand_less: {
          code: 'expand_less',
        },
        refresh: {
          code: 'fa-refresh',
          font: 'fa4',
        },
        gear: {
          code: 'fa-gear',
          font: 'fa4',
        },
        cogs: {
          code: 'fa-cogs',
          font: 'fa4',
        },
        eye: {
          code: 'fa-eye',
          font: 'fa4',
        },
        google: {
          code: 'fa-google',
          font: 'fa4',
        },
        map: {
          code: 'fa-map',
          font: 'fa4',
        },
        map_marker: {
          code: 'fa-map-marker',
          font: 'fa4',
        },
        mars: {
          code: 'fa-mars',
          font: 'fa4',
        },
        venus: {
          code: 'fa-venus',
          font: 'fa4',
        },
        close: {
          code: 'fa-close',
          font: 'fa4',
        },
        print: {
          code: 'fa-print',
          font: 'fa4',
        },
        bug: {
          code: 'fa-bug',
          font: 'fa4',
        },
        music: {
          code: 'fa-music',
          font: 'fa4',
        },
        check_circle: {
          code: 'fa-check-circle',
          font: 'fa4',
        },
      },
    },
    sizesConfig: {
      defaultSize: 19,
      sizes: {
        small: 14,
        medium: 19,
        large: 26,
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
