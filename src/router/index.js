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
          name: 'Charts',
          path: '/admin/statistics/charts',
          component: lazyLoading('statistics/charts/Charts')
        },
        {
          name: 'Progress Bars',
          path: '/admin/statistics/progress-bars',
          component: lazyLoading('statistics/progress-bars/ProgressBars'),
        },
        {
          name: 'Forms',
          path: '/admin/forms'
        },
        {
          name: 'Form Elements',
          path: '/admin/forms/form-elements',
          component: lazyLoading('forms/form-elements/FormElements')
        },
        {
          name: 'Form Wizard',
          path: '/admin/forms/form-wizard',
          component: lazyLoading('forms/form-wizard/FormWizard')
        },
        {
          name: 'Medium Editor',
          path: '/admin/forms/medium-editor',
          component: lazyLoading('forms/medium-editor/MediumEditor')
        },
        {
          name: 'Tables',
          path: '/admin/tables',
          component: lazyLoading('tables/Table')
        },
        {
          name: 'Ui Elements',
          path: '/admin/ui'
        },
        {
          name: 'Typography',
          path: '/admin/ui/typography',
          component: lazyLoading('ui/typography/Typography')
        },
        {
          name: 'Buttons',
          path: '/admin/ui/buttons',
          component: lazyLoading('ui/buttons/Buttons')
        },
        {
          name: 'Notifications',
          path: '/admin/ui/notifications',
          component: lazyLoading('ui/notifications/Notifications')
        },
        {
          path: '/admin/ui/icons',
          component: lazyLoading('ui/icons/Icons'),
          children: [
            {
              name: 'Icons',
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
          name: 'Spinners',
          path: '/admin/ui/spinners',
          component: lazyLoading('ui/spinners/Spinners')
        },
        {
          name: 'Grid',
          path: '/admin/ui/grid',
          component: lazyLoading('ui/grid/Grid')
        },
        {
          name: 'Modals',
          path: '/admin/ui/modals',
          component: lazyLoading('ui/modals/Modals')
        },
        {
          name: 'Tree View',
          path: '/admin/ui/tree-view',
          component: lazyLoading('ui/tree-view/TreeView')
        },
        {
          name: 'Extra',
          path: '/admin/extra',
          component: lazyLoading('extra/Extra')
        },
        {
          name: 'Auth',
          path: '/admin/auth'
        },
        {
          name: 'Login',
          path: '/admin/auth/login',
          component: lazyLoading('auth/login/Login')
        },
        {
          name: 'Signup',
          path: '/admin/auth/signup',
          component: lazyLoading('auth/signup/Signup')
        },
        {
          name: 'Maps',
          path: '/admin/maps'
        },
        {
          name: 'Google Maps',
          path: '/admin/maps/google-maps',
          component: lazyLoading('maps/google-maps/GoogleMapsPage')
        },
        {
          name: 'Yandex Maps',
          path: '/admin/maps/yandex-maps',
          component: lazyLoading('maps/yandex-maps/YandexMapsPage')
        },
        {
          name: 'Leaflet Maps',
          path: '/admin/maps/leaflet-maps',
          component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
        },
        {
          name: 'Bubble Maps',
          path: '/admin/maps/bubble-maps',
          component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
        },
        {
          name: 'Line Maps',
          path: '/admin/maps/line-maps',
          component: lazyLoading('maps/line-maps/LineMapsPage')
        }
      ]
    }
  ]
})
