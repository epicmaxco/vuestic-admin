import Vue from 'vue'
import { VueBookComponents, createRoute } from 'vue-book'
Vue.use(VueBookComponents)

export default [
  createRoute({
    requireContext: require.context('./..', true, /.demo.vue$/),
    path: '/demo',
  }),
  createRoute({
    requireContext: require.context('./../components', true, /.vue$/),
    path: '/presentation',
  }),
]
