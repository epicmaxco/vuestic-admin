import Vue from 'vue'
import VueGtm from 'vue-gtm'
import router from './router'

Vue.use(VueGtm, {
  id: process.env.VUE_APP_GTM_KEY,
  enabled: process.env.NODE_ENV === 'production',
  debug: false,
  vueRouter: router,
})
