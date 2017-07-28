import lazyLoading from './lazyLoading'

export default {
  name: 'ui',
  meta: {
    expanded: false,
    title: 'UI Elements',
    iconClass: 'vuestic-icon vuestic-icon-ui-elements'
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
      path: '/ui/icons',
      component: lazyLoading('ui/icons/Icons'),
      meta: {
        title: 'Icons'
      },
      children: [
        {
          path: '', // Default route
          component: lazyLoading('ui/icons/SetsList'),
          meta: {
            title: 'Icons'
          }
        },
        {
          path: ':name',
          component: lazyLoading('ui/icons/Set'),
          props: true,
          meta: {
            title: 'Set'
          }
        }
      ]
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

