// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

sync(store, router)

router.afterEach((to, from) => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
