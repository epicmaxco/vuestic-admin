import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from './../../src/components/layout/AppLayout'
import lazyLoading from './../store/modules/menu/lazyLoading'

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
      name: 'Admin',
      path: '',
      component: AppLayout,
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
          meta: {
            title: 'menu.dashboard',
            iconClass: 'vuestic-icon vuestic-icon-dashboard'
          }
        },
        {
          name: 'Statistics',
          path: 'statistics',
          meta: {
            expanded: false,
            title: 'menu.statistics',
            iconClass: 'vuestic-icon vuestic-icon-statistics'
          },
          children: [
            {
              name: 'menu.charts',
              path: 'charts',
              component: lazyLoading('statistics/charts/Charts'),
              meta: {
                title: 'menu.charts'
              }
            },
            {
              name: 'menu.progressBars',
              path: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
              meta: {
                title: 'menu.progressBars'
              }
            }
          ]
        },
        {
          name: 'Forms',
          path: 'forms',
          meta: {
            expanded: false,
            title: 'menu.forms',
            iconClass: 'vuestic-icon vuestic-icon-forms'
          },
          children: [
            {
              name: 'FormElements',
              path: '/form-elements',
              component: lazyLoading('forms/form-elements/FormElements'),
              meta: {
                title: 'menu.formElements'
              }
            },
            {
              name: 'FormWizards',
              path: '/form-wizard',
              component: lazyLoading('forms/form-wizard/FormWizard'),
              meta: {
                title: 'menu.formWizards'
              }
            },
            {
              name: 'MediumEditor',
              path: '/medium-editor',
              component: lazyLoading('forms/medium-editor/MediumEditor'),
              meta: {
                title: 'Medium Editor'
              }
            }
          ]
        },
        {
          name: 'Tables',
          path: '/tables',
          meta: {
            title: 'menu.tables',
            iconClass: 'vuestic-icon vuestic-icon-tables'
          },
          component: lazyLoading('tables/Table')
        },
        {
          name: 'ui',
          path: '/ui',
          meta: {
            expanded: false,
            title: 'menu.uiElements',
            iconClass: 'vuestic-icon vuestic-icon-ui-elements'
          },
          children: [
            {
              name: 'Typography',
              path: '/typography',
              component: lazyLoading('ui/typography/Typography'),
              meta: {
                title: 'menu.typography'
              }
            },
            {
              name: 'Buttons',
              path: '/buttons',
              component: lazyLoading('ui/buttons/Buttons'),
              meta: {
                title: 'menu.buttons'
              }
            },
            {
              name: 'Notifications',
              path: '/notifications',
              component: lazyLoading('ui/notifications/Notifications'),
              meta: {
                title: 'menu.notifications'
              }
            },
            {
              path: '/icons',
              component: lazyLoading('ui/icons/Icons'),
              meta: {
                title: 'menu.icons'
              },
              children: [
                {
                  path: '',
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
              path: '/spinners',
              component: lazyLoading('ui/spinners/Spinners'),
              meta: {
                title: 'menu.spinners'
              }
            },
            {
              name: 'Grid',
              path: '/grid',
              component: lazyLoading('ui/grid/Grid'),
              meta: {
                title: 'menu.grid'
              }
            },
            {
              name: 'Modals',
              path: '/modals',
              component: lazyLoading('ui/modals/Modals'),
              meta: {
                title: 'menu.modals'
              }
            },
            {
              name: 'TreeView',
              path: '/tree-view',
              component: lazyLoading('ui/tree-view/TreeView'),
              meta: {
                title: 'menu.treeView'
              }
            },
          ]
        },
        {
          name: 'Extra',
          path: '/extra',
          component: lazyLoading('extra/Extra'),
          meta: {
            default: false,
            title: 'menu.extra',
            iconClass: 'vuestic-icon vuestic-icon-extras',
            expanded: false
          }
        },
        {
          name: 'Auth',
          path: '/auth',
          children: [
            {
              name: 'Login',
              path: '/login',
              component: lazyLoading('auth/login/Login'),
              meta: {
                default: false,
                title: 'menu.login',
                newWindow: true
              }
            },
            {
              name: 'Signup',
              path: '/signup',
              component: lazyLoading('auth/signup/Signup'),
              meta: {
                default: false,
                title: 'menu.signUp',
                newWindow: true
              }
            }
          ]
        },
        {
          name: 'Maps',
          path: '/maps',
          meta: {
            expanded: false,
            title: 'menu.maps',
            iconClass: 'vuestic-icon vuestic-icon-maps'
          },
          children: [
            {
              name: 'GoogleMaps',
              path: '/google-maps',
              component: lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta: {
                title: 'Google Maps'
              }
            },
            {
              name: 'YandexMaps',
              path: '/yandex-maps',
              component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
              meta: {
                title: 'Yandex Maps'
              }
            },
            {
              name: 'LeafletMaps',
              path: '/leaflet-maps',
              component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta: {
                title: 'Leaflet Maps'
              }
            },
            {
              name: 'BubbleMaps',
              path: '/bubble-maps',
              component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
              meta: {
                title: 'Bubble Maps'
              }
            },
            {
              name: 'LineMaps',
              path: '/line-maps',
              component: lazyLoading('maps/line-maps/LineMapsPage'),
              meta: {
                title: 'Line Maps'
              }
            }
          ]
        }
      ]
    }
  ]
})
