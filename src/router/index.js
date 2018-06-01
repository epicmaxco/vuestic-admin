import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './../store/lazyLoading'

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
      name: 'auth',
      path: '/auth',
      component: AuthLayout,
      meta: {
        title: 'menu.auth',
      },
      children: [
        {
          name: 'Login',
          path: '/auth/login',
          component: lazyLoading('auth/login/Login'),
          meta: {
            default: true,
            title: 'menu.login'
          }
        },
        {
          name: 'Signup',
          path: '/auth/signup',
          component: lazyLoading('auth/signup/Signup'),
          meta: {
            title: 'menu.signUp'
          }
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
          default: true,
          meta: {
            title: 'menu.dashboard',
          }
        },
        {
          name: 'Statistics',
          path: '/admin/statistics',
          meta: {
            title: 'menu.statistics'
          }
        },
        {
          name: 'menu.charts',
          path: '/admin/statistics/charts',
          component: lazyLoading('statistics/charts/Charts'),
          meta: {
            title: 'menu.charts'
          }
        },
        {
          name: 'menu.progressBars',
          path: '/admin/statistics/progress-bars',
          component: lazyLoading('statistics/progress-bars/ProgressBars'),
          meta: {
            title: 'menu.progressBars'
          }
        },
        {
          name: 'Forms',
          path: '/admin/forms',
          meta: {
            expanded: false,
            title: 'menu.forms'
          }
        },
        {
          name: 'FormElements',
          path: '/admin/forms/form-elements',
          component: lazyLoading('forms/form-elements/FormElements'),
          meta: {
            title: 'menu.formElements'
          }
        },
        {
          name: 'FormWizards',
          path: '/admin/forms/form-wizard',
          component: lazyLoading('forms/form-wizard/FormWizard'),
          meta: {
            title: 'menu.formWizards'
          }
        },
        {
          name: 'MediumEditor',
          path: '/admin/forms/medium-editor',
          component: lazyLoading('forms/medium-editor/MediumEditor'),
          meta: {
            title: 'Medium Editor'
          }
        },
        {
          name: 'Tables',
          path: '/admin/tables',
          meta: {
            title: 'menu.tables'
          },
          component: lazyLoading('tables/Table')
        },
        {
          name: 'UiElements',
          path: '/admin/ui',
          meta: {
            title: 'menu.uiElements'
          }
        },
        {
          name: 'Typography',
          path: '/admin/ui/typography',
          component: lazyLoading('ui/typography/Typography'),
          meta: {
            title: 'menu.typography'
          }
        },
        {
          name: 'Buttons',
          path: '/admin/ui/buttons',
          component: lazyLoading('ui/buttons/Buttons'),
          meta: {
            title: 'menu.buttons'
          }
        },
        {
          name: 'Notifications',
          path: '/admin/ui/notifications',
          component: lazyLoading('ui/notifications/Notifications'),
          meta: {
            title: 'menu.notifications'
          }
        },
        {
          name: 'Icons',
          path: '/admin/ui/icons',
          component: lazyLoading('ui/icons/Icons'),
          meta: {
            title: 'menu.icons'
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
          path: '/admin/ui/spinners',
          component: lazyLoading('ui/spinners/Spinners'),
          meta: {
            title: 'menu.spinners'
          }
        },
        {
          name: 'Grid',
          path: '/admin/ui/grid',
          component: lazyLoading('ui/grid/Grid'),
          meta: {
            title: 'menu.grid'
          }
        },
        {
          name: 'Modals',
          path: '/admin/ui/modals',
          component: lazyLoading('ui/modals/Modals'),
          meta: {
            title: 'menu.modals'
          }
        },
        {
          name: 'TreeView',
          path: '/admin/ui/tree-view',
          component: lazyLoading('ui/tree-view/TreeView'),
          meta: {
            title: 'menu.treeView'
          }
        },
        {
          name: 'Extra',
          path: '/admin/extra',
          component: lazyLoading('extra/Extra'),
          meta: {
            default: false,
            title: 'menu.extra'
          }
        },
        {
          name: 'Auth',
          path: '/admin/auth'
        },
        {
          name: 'Login',
          path: '/admin/auth/login',
          component: lazyLoading('auth/login/Login'),
          meta: {
            default: false,
            title: 'menu.login'
          }
        },
        {
          name: 'Signup',
          path: '/admin/auth/signup',
          component: lazyLoading('auth/signup/Signup'),
          meta: {
            default: false,
            title: 'menu.signUp'
          }
        },
        {
          name: 'Maps',
          path: '/admin/maps',
          meta: {
            expanded: false,
            title: 'menu.maps',
            iconClass: 'vuestic-icon vuestic-icon-maps'
          }
        },
        {
          name: 'GoogleMaps',
          path: '/admin/maps/google-maps',
          component: lazyLoading('maps/google-maps/GoogleMapsPage'),
          meta: {
            title: 'Google Maps'
          }
        },
        {
          name: 'YandexMaps',
          path: '/admin/maps/yandex-maps',
          component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
          meta: {
            title: 'Yandex Maps'
          }
        },
        {
          name: 'LeafletMaps',
          path: '/admin/maps/leaflet-maps',
          component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
          meta: {
            title: 'Leaflet Maps'
          }
        },
        {
          name: 'BubbleMaps',
          path: '/admin/maps/bubble-maps',
          component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
          meta: {
            title: 'Bubble Maps'
          }
        },
        {
          name: 'LineMaps',
          path: '/admin/maps/line-maps',
          component: lazyLoading('maps/line-maps/LineMapsPage'),
          meta: {
            title: 'Line Maps'
          }
        }
      ]
    }
  ]
})
