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
      redirect: { name: 'Dashboard' }
    },
    {
      name: 'auth',
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
          name: 'Dashboard',
          path: '/admin/dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true
        },
        {
          name: 'Statistics',
          path: '/admin/statistics'
        },
        {
          path: '/admin/statistics/charts',
          component: lazyLoading('statistics/charts/Charts')
        },
        {
          path: '/admin/statistics/progress-bars',
          component: lazyLoading('statistics/progress-bars/ProgressBars'),
        },
        {
          name: 'Forms',
          path: '/admin/forms'
        },
        {
          path: '/admin/forms/form-elements',
          component: lazyLoading('forms/form-elements/FormElements')
        },
        {
          path: '/admin/forms/form-wizard',
          component: lazyLoading('forms/form-wizard/FormWizard')
        },
        {
          path: '/admin/forms/medium-editor',
          component: lazyLoading('forms/medium-editor/MediumEditor')
        },
        {
          path: '/admin/tables',
          component: lazyLoading('tables/Table')
        },
        {
          name: 'UiElements',
          path: '/admin/ui'
        },
        {
          path: '/admin/ui/typography',
          component: lazyLoading('ui/typography/Typography')
        },
        {
          path: '/admin/ui/buttons',
          component: lazyLoading('ui/buttons/Buttons')
        },
        {
          path: '/admin/ui/notifications',
          component: lazyLoading('ui/notifications/Notifications')
        },
        {
          path: '/admin/ui/icons',
          component: lazyLoading('ui/icons/Icons'),
          children: [
            {
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
          path: '/admin/ui/spinners',
          component: lazyLoading('ui/spinners/Spinners')
        },
        {
          path: '/admin/ui/grid',
          component: lazyLoading('ui/grid/Grid')
        },
        {
          path: '/admin/ui/modals',
          component: lazyLoading('ui/modals/Modals')
        },
        {
          path: '/admin/ui/tree-view',
          component: lazyLoading('ui/tree-view/TreeView')
        },
        {
          path: '/admin/extra',
          component: lazyLoading('extra/Extra')
        },
        {
          name: 'Auth',
          path: '/admin/auth'
        },
        {
          path: '/admin/auth/login',
          component: lazyLoading('auth/login/Login')
        },
        {
          path: '/admin/auth/signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          name: 'Maps',
          path: '/admin/maps'
        },
        {
          path: '/admin/maps/google-maps',
          component: lazyLoading('maps/google-maps/GoogleMapsPage')
        },
        {
          path: '/admin/maps/yandex-maps',
          component: lazyLoading('maps/yandex-maps/YandexMapsPage')
        },
        {
          path: '/admin/maps/leaflet-maps',
          component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
        },
        {
          path: '/admin/maps/bubble-maps',
          component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
        },
        {
          path: '/admin/maps/line-maps',
          component: lazyLoading('maps/line-maps/LineMapsPage')
        }
      ]
    }
  ]
})
