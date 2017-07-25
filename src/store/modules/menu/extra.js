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
    },
    {
      name: 'Alerts',
      path: '/extra/alerts',
      component: lazyLoading('extra/alerts/Alerts'),
      meta: {
        title: 'Alerts'
      }
    },
    {
      name: 'Profile Card',
      path: '/extra/profile-card',
      component: lazyLoading('extra/profile-card/ProfileCard'),
      meta: {
        title: 'Profile Card'
      }
    }
  ]
}
