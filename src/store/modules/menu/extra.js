import lazyLoading from './lazyLoading'

export default {
  name: 'Extra',
  meta: {
    default: false,
    title: 'Extra',
    iconClass: 'fa fa-dashboard',
    expanded: false
  },
  children: [
    {
      name: 'Tabs',
      path: '/extra/tabs',
      component: lazyLoading('extra/tabs/Tabs'),
      meta: {
        title: 'Tabs'
      }
    }
  ]
}
