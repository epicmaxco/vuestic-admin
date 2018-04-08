import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    title: 'menu.tables',
    iconClass: 'vuestic-icon vuestic-icon-tables'
  },
  path: '/tables',
  component: lazyLoading('tables/Table')
}
