import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    expanded: false,
    title: 'Tables',
    iconClass: 'fa fa-th-list'
  },

  children: [
    {
      name: 'BasicAndAdvanced',
      path: '/tables',
      component: lazyLoading('tables/Table'),
      meta: {
        title: 'Basic & Advanced'
      }
    }
  ]
}
