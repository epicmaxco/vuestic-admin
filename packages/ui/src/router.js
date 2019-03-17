import Vue from 'vue'
import Router from 'vue-router'
import { createRoute, VueBookComponents } from 'vue-book'

Vue.use(VueBookComponents)
Vue.use(Router)

export default new Router({
  routes: [
    createRoute({
      requireContext: require.context('./components', true, /.demo.vue$/),
      path: '/demo',
    }),
    {
      path: '*',
      redirect: '/demo',
    },
  ],
})
