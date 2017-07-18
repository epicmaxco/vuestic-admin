// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import App from './App'
import Auth from './Auth'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import {mapGetters} from 'vuex'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

sync(store, router)

let mediaHandler = () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

let authorizationHandler = (to) => {
  let flag = true
  if (to.fullPath === '/login' || to.fullPath === '/signup') {
    flag = false
  }
  store.commit('authorize', flag)
}

router.afterEach((to, from) => {
  mediaHandler()
  authorizationHandler(to)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App v-if="isAuthorized"/><Auth v-else></Auth>',
  components: { App, Auth },
  computed: {
    ...mapGetters(['isAuthorized'])
  }
})
