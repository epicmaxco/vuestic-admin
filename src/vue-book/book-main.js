import Vue from 'vue'
import VeeValidate from 'vee-validate'
import BookApp from './BookApp'
import VueClipboard from 'vue-clipboard2'
import Router from 'vue-router'
import { VueBookComponents, createRoute } from 'vue-book'

Vue.use(Router)
Vue.use(VueBookComponents)

const router = new Router({
  routes: [
    createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    {
      path: '*',
      redirect: '/demo',
    },
  ],
})

Vue.use(VueClipboard)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(BookApp),
}).$mount('#app')
