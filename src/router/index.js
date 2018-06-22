import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueComponentTree = require('vue-component-tree').default

  demoRoutes.push(
    VueComponentTree(require.context('./..', true, /.demo.vue$/), '/demo')
  )
}

const EmptyParentComponent = {
  template: '<router-view></router-view>'
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' }
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login')
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          path: '',
          redirect: {name: 'login'}
        }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true
        },
        {
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: lazyLoading('statistics/charts/Charts')
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
            },
            {
              path: '',
              redirect: {name: 'charts'}
            }
          ]
        },
        {
          path: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              name: 'form-elements',
              path: 'form-elements',
              component: lazyLoading('forms/form-elements/FormElements')
            },
            {
              name: 'form-wizard',
              path: 'form-wizard',
              component: lazyLoading('forms/form-wizard/FormWizard')
            },
            {
              name: 'medium-editor',
              path: 'medium-editor',
              component: lazyLoading('forms/medium-editor/MediumEditor')
            },
            {
              path: '',
              redirect: {name: 'form-elements'}
            }
          ]
        },
        {
          name: 'tables',
          path: 'tables',
          component: lazyLoading('tables/Table')
        },
        {
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'typography',
              path: 'typography',
              component: lazyLoading('ui/typography/Typography')
            },
            {
              name: 'buttons',
              path: 'buttons',
              component: lazyLoading('ui/buttons/Buttons')
            },
            {
              name: 'color-pickers',
              path: 'color-pickers',
              component: lazyLoading('ui/color-pickers/ColorPickers')
            },
            {
              name: 'notifications',
              path: 'notifications',
              component: lazyLoading('ui/notifications/Notifications')
            },
            {
              path: 'icons',
              component: lazyLoading('ui/icons/Icons'),
              children: [
                {
                  name: 'icons',
                  path: '', // Default route
                  component: lazyLoading('ui/icons/SetsList')
                },
                {
                  path: ':name',
                  component: lazyLoading('ui/icons/Set'),
                  props: true
                }
              ]
            },
            {
              name: 'spinners',
              path: 'spinners',
              component: lazyLoading('ui/spinners/Spinners')
            },
            {
              name: 'grid',
              path: 'grid',
              component: lazyLoading('ui/grid/Grid')
            },
            {
              name: 'modals',
              path: 'modals',
              component: lazyLoading('ui/modals/Modals')
            },
            {
              name: 'tree-view',
              path: 'tree-view',
              component: lazyLoading('ui/tree-view/TreeView')
            },
            {
              path: '',
              redirect: {name: 'typography'}
            }
          ]
        },
        {
          name: 'extra',
          path: 'extra',
          component: lazyLoading('extra/Extra')
        },
        {
          path: 'maps',
          component: EmptyParentComponent,
          children: [
            {
              name: 'google-maps',
              path: 'google-maps',
              component: lazyLoading('maps/google-maps/GoogleMapsPage')
            },
            {
              name: 'yandex-maps',
              path: 'yandex-maps',
              component: lazyLoading('maps/yandex-maps/YandexMapsPage')
            },
            {
              name: 'leaflet-maps',
              path: 'leaflet-maps',
              component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
            },
            {
              name: 'bubble-maps',
              path: 'bubble-maps',
              component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
            },
            {
              name: 'line-maps',
              path: 'line-maps',
              component: lazyLoading('maps/line-maps/LineMapsPage')
            },
            {
              path: '',
              redirect: {name: 'google-maps'}
            }
          ]
        }
      ]
    }
  ]
})
