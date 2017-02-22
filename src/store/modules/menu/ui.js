import lazyLoading from './lazyLoading'

export default {
  name: 'ui',
  meta: {
    expanded: false,
    title: 'UI Elements',
    iconClass: 'fa fa-edit'
  },
  children: [
    {
      name: 'Typography',
      path: '/ui/typography',
      component: lazyLoading('ui/typography/Typography'),
      meta: {
        title: 'Typography'
      }
    },
    {
      name: 'Buttons',
      path: '/ui/buttons',
      component: lazyLoading('ui/buttons/Buttons'),
      meta: {
        title: 'Buttons'
      }
    },
    {
      name: 'Icons',
      path: '/ui/icons',
      component: lazyLoading('ui/icons/Icons'),
      meta: {
        title: 'Icons'
      }
    },
    {
      name: 'Grid',
      path: '/ui/grid',
      component: lazyLoading('ui/grid/Grid'),
      meta: {
        title: 'Grid'
      }
    },
    {
      name: 'Modals',
      path: '/ui/modals',
      component: lazyLoading('ui/modals/Modals'),
      meta: {
        title: 'Modals'
      }
    }
  ]
}

