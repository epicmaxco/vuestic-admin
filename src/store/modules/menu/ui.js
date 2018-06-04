import lazyLoading from './lazyLoading'

export default {
  name: 'ui',
  meta: {
    expanded: false,
    title: 'menu.uiElements',
    iconClass: 'vuestic-icon vuestic-icon-ui-elements'
  },
  children: [
    {
      name: 'Typography',
      path: '/ui/typography',
      component: lazyLoading('ui/typography/Typography'),
      meta: {
        title: 'menu.typography',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'Buttons',
      path: '/ui/buttons',
      component: lazyLoading('ui/buttons/Buttons'),
      meta: {
        title: 'menu.buttons',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'Notifications',
      path: '/ui/notifications',
      component: lazyLoading('ui/notifications/Notifications'),
      meta: {
        title: 'menu.notifications',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      path: '/ui/icons',
      component: lazyLoading('ui/icons/Icons'),
      meta: {
        title: 'menu.icons',
        iconClass: 'fa fa-circle-o'
      },
      children: [
        {
          path: '', // Default route
          component: lazyLoading('ui/icons/SetsList'),
          meta: {
            title: 'menu.icons'
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
      name: 'Spinners',
      path: '/ui/spinners',
      component: lazyLoading('ui/spinners/Spinners'),
      meta: {
        title: 'menu.spinners',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'Grid',
      path: '/ui/grid',
      component: lazyLoading('ui/grid/Grid'),
      meta: {
        title: 'menu.grid',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'Modals',
      path: '/ui/modals',
      component: lazyLoading('ui/modals/Modals'),
      meta: {
        title: 'menu.modals',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'TreeView',
      path: '/ui/tree-view',
      component: lazyLoading('ui/tree-view/TreeView'),
      meta: {
        title: 'menu.treeView',
        iconClass: 'fa fa-circle-o'
      }
    },
  ]
}

