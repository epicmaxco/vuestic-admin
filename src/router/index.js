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
      name: 'separate-auth',
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '/auth/login',
          component: lazyLoading('auth/login/Login'),
          default: true,
        },
        {
          path: '/auth/signup',
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
          path: '/admin/dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true
        },
        {
          name: 'statistics',
          path: '/admin/statistics'
        },
        {
          name: 'charts',
          path: '/admin/statistics/charts',
          component: lazyLoading('statistics/charts/Charts')
        },
        {
          name: 'progress-bars',
          path: '/admin/statistics/progress-bars',
          component: lazyLoading('statistics/progress-bars/ProgressBars'),
        },
        {
          name: 'forms',
          path: '/admin/forms'
        },
        {
          name: 'form-elements',
          path: '/admin/forms/form-elements',
          component: lazyLoading('forms/form-elements/FormElements')
        },
        {
          name: 'form-wizard',
          path: '/admin/forms/form-wizard',
          component: lazyLoading('forms/form-wizard/FormWizard')
        },
        {
          name: 'medium-editor',
          path: '/admin/forms/medium-editor',
          component: lazyLoading('forms/medium-editor/MediumEditor')
        },
        {
          name: 'tables',
          path: '/admin/tables',
          component: lazyLoading('tables/Table')
        },
        {
          name: 'ui-elements',
          path: '/admin/ui'
        },
        {
          name: 'typography',
          path: '/admin/ui/typography',
          component: lazyLoading('ui/typography/Typography')
        },
        {
          name: 'buttons',
          path: '/admin/ui/buttons',
          component: lazyLoading('ui/buttons/Buttons')
        },
        {
          name: 'notifications',
          path: '/admin/ui/notifications',
          component: lazyLoading('ui/notifications/Notifications')
        },
        {
          path: '/admin/ui/icons',
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
          path: '/admin/ui/spinners',
          component: lazyLoading('ui/spinners/Spinners')
        },
        {
          name: 'grid',
          path: '/admin/ui/grid',
          component: lazyLoading('ui/grid/Grid')
        },
        {
          name: 'modals',
          path: '/admin/ui/modals',
          component: lazyLoading('ui/modals/Modals')
        },
        {
          name: 'tree-view',
          path: '/admin/ui/tree-view',
          component: lazyLoading('ui/tree-view/TreeView')
        },
        {
          name: 'extra',
          path: '/admin/extra',
          component: lazyLoading('extra/Extra')
        },
        {
          name: 'auth',
          path: '/admin/auth'
        },
        {
          name: 'login',
          path: '/admin/auth/login',
          component: lazyLoading('auth/login/Login')
        },
        {
          name: 'signup',
          path: '/admin/auth/signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          name: 'maps',
          path: '/admin/maps'
        },
        {
          name: 'google-maps',
          path: '/admin/maps/google-maps',
          component: lazyLoading('maps/google-maps/GoogleMapsPage')
        },
        {
          name: 'yandex-maps',
          path: '/admin/maps/yandex-maps',
          component: lazyLoading('maps/yandex-maps/YandexMapsPage')
        },
        {
          name: 'leaflet-maps',
          path: '/admin/maps/leaflet-maps',
          component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
        },
        {
          name: 'bubble-maps',
          path: '/admin/maps/bubble-maps',
          component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
        },
        {
          name: 'line-maps',
          path: '/admin/maps/line-maps',
          component: lazyLoading('maps/line-maps/LineMapsPage')
        }
      ]
    }
  ]
})
