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
      path: '/ui/icons',
      component: {
        template: '<router-view></router-view>'
      },
      meta: {
        title: 'Icons'
      },
      children: [
        {
          name: 'Icons',
          path: '',
          component: lazyLoading('ui/icons/Icons'),
          meta: {
            title: 'Icons'
          }
        },
        {
          path: ':nameOfSet',
          component: lazyLoading('ui/icons/FullSet'),
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

