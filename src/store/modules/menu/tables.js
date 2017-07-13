import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    title: 'Tables',
    iconClass: 'fa fa-th-list'
  },
  path: '/tables',
  component: lazyLoading('tables/Table')
}
