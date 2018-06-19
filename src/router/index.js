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

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' }
    },
    {
      name: 'auth',
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
          default: true,
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup')
        },
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
          name: 'statistics',
          path: 'statistics'
        },
        {
          name: 'charts',
          path: 'statistics/charts',
          component: lazyLoading('statistics/charts/Charts')
        },
        {
          name: 'progress-bars',
          path: 'statistics/progress-bars',
          component: lazyLoading('statistics/progress-bars/ProgressBars'),
        },
        {
          name: 'forms',
          path: 'forms'
        },
        {
          name: 'form-elements',
          path: 'forms/form-elements',
          component: lazyLoading('forms/form-elements/FormElements')
        },
        {
          name: 'form-wizard',
          path: 'forms/form-wizard',
          component: lazyLoading('forms/form-wizard/FormWizard')
        },
        {
          name: 'medium-editor',
          path: 'forms/medium-editor',
          component: lazyLoading('forms/medium-editor/MediumEditor')
        },
        {
          name: 'tables',
          path: 'tables',
          component: lazyLoading('tables/Table')
        },
        {
          name: 'ui-elements',
          path: 'ui'
        },
        {
          name: 'typography',
          path: 'ui/typography',
          component: lazyLoading('ui/typography/Typography')
        },
        {
          name: 'buttons',
          path: 'ui/buttons',
          component: lazyLoading('ui/buttons/Buttons')
        },
        {
          name: 'notifications',
          path: 'ui/notifications',
          component: lazyLoading('ui/notifications/Notifications')
        },
        {
          path: 'ui/icons',
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
          path: 'ui/spinners',
          component: lazyLoading('ui/spinners/Spinners')
        },
        {
          name: 'grid',
          path: 'ui/grid',
          component: lazyLoading('ui/grid/Grid')
        },
        {
          name: 'modals',
          path: 'ui/modals',
          component: lazyLoading('ui/modals/Modals')
        },
        {
          name: 'tree-view',
          path: 'ui/tree-view',
          component: lazyLoading('ui/tree-view/TreeView')
        },
        {
          name: 'extra',
          path: 'extra',
          component: lazyLoading('extra/Extra')
        },
        {
          name: 'maps',
          path: 'maps'
        },
        {
          name: 'google-maps',
          path: 'maps/google-maps',
          component: lazyLoading('maps/google-maps/GoogleMapsPage')
        },
        {
          name: 'yandex-maps',
          path: 'maps/yandex-maps',
          component: lazyLoading('maps/yandex-maps/YandexMapsPage')
        },
        {
          name: 'leaflet-maps',
          path: 'maps/leaflet-maps',
          component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
        },
        {
          name: 'bubble-maps',
          path: 'maps/bubble-maps',
          component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
        },
        {
          name: 'line-maps',
          path: 'maps/line-maps',
          component: lazyLoading('maps/line-maps/LineMapsPage')
        }
      ]
    }
  ]
})
