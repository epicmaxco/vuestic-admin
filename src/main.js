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

// const config = {
//   // errorBagName: 'errors', // change if property conflicts.
//   // fieldsBagName: 'inputs ' //  Default is fields
//   // delay: 0,
//   // locale: 'en',
//   // dictionary: null,
//   // strict: true,
//   // enableAutoClasses: false,
//   // classNames: {
//   //   touched: 'touched', // the control has been blurred
//   //   untouched: 'untouched', // the control hasn't been blurred
//   //   valid: 'valid', // model is valid
//   //   invalid: 'invalid', // model is invalid
//   //   pristine: 'pristine', // control has not been interacted with
//   //   dirty: 'dirty' // control has been interacted with
//   // },
//   // events: 'input|blur',
//   // inject: true
// }

// Vue.use(VeeValidate, {fieldsBagName: 'inputs'})
Vue.use(VeeValidate)

sync(store, router)

let mediaHandler = () => {
  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

router.afterEach((to, from) => {
  mediaHandler()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
