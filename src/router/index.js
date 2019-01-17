import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book')

  demoRoutes.push(
    VueBook.createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    VueBook.createRoute({
      requireContext: require.context('./../components', true, /.vue$/),
      path: '/presentation',
    }),
  )

  Vue.use(VueBook.VueBookComponents)
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSearch'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSimple'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundCustom'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText'),
        },
      ],
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
          default: true,
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: lazyLoading('statistics/charts/Charts'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
              },
            },
          ],
        },
        {
          name: 'forms',
          path: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              name: 'form-elements',
              path: 'form-elements',
              component: lazyLoading('forms/form-elements/FormElements'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
              },
            },
            {
              name: 'form-wizards',
              path: 'form-wizards',
              component: lazyLoading('forms/form-wizard/FormWizard'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards',
              },
            },
            {
              name: 'medium-editor',
              path: 'medium-editor',
              component: lazyLoading('forms/medium-editor/MediumEditor'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
              },
            },
          ],
        },
        {
          name: 'tables',
          path: 'tables',
          component: lazyLoading('tables/Table'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
          },
        },
        {
          name: 'ui',
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'typography',
              path: 'typography',
              component: lazyLoading('ui/typography/Typography'),
            },
            {
              name: 'buttons',
              path: 'buttons',
              component: lazyLoading('ui/buttons/Buttons'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
              },
            },
            {
              name: 'color-pickers',
              path: 'color-pickers',
              component: lazyLoading('ui/color-pickers/ColorPickers'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
              },
            },
            {
              name: 'timelines',
              path: 'timelines',
              component: lazyLoading('ui/timelines/Timelines'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
              },
            },
            {
              name: 'dropdowns',
              path: 'dropdowns',
              component: lazyLoading('ui/dropdowns/Dropdowns'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns',
              },
            },
            {
              name: 'notifications',
              path: 'notifications',
              component: lazyLoading('ui/notifications/Notifications'),
            },
            {
              path: 'icons',
              component: lazyLoading('ui/icons/Icons'),
              children: [
                {
                  name: 'icon-sets',
                  path: '', // Default route
                  component: lazyLoading('ui/icons/SetsList'),
                },
                {
                  name: 'icon-set',
                  path: ':name',
                  component: lazyLoading('ui/icons/IconSet'),
                  props: true,
                },
              ],
            },
            {
              name: 'spinners',
              path: 'spinners',
              component: lazyLoading('ui/spinners/Spinners'),
            },
            {
              name: 'grid',
              path: 'grid',
              component: lazyLoading('ui/grid/Grid'),
            },
            {
              name: 'modals',
              path: 'modals',
              component: lazyLoading('ui/modals/Modals'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
              },
            },
            {
              name: 'cards',
              path: 'cards',
              component: lazyLoading('ui/cards/Cards'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
              },
            },
            {
              name: 'file-upload',
              path: 'file-upload',
              component: lazyLoading('ui/file-upload/FileUpload'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
              },
            },
            {
              name: 'tags',
              path: 'tags',
              component: lazyLoading('ui/tags/Tags'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tags',
              },
            },
            {
              name: 'tree-view',
              path: 'tree-view',
              component: lazyLoading('ui/tree-view/TreeView'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
              },
            },
            {
              name: 'collapse',
              path: 'collapse',
              component: lazyLoading('ui/collapse/Collapse')
            },
            {
              name: 'filters',
              path: 'filters',
              component: lazyLoading('ui/filters/Filters')
            }
          ]
        },
        {
          name: 'extra',
          path: 'extra',
          component: lazyLoading('extra/Extra'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
          },
        },
        {
          name: 'maps',
          path: 'maps',
          component: EmptyParentComponent,
          children: [
            {
              name: 'google-maps',
              path: 'google-maps',
              component: lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'yandex-maps',
              path: 'yandex-maps',
              component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'leaflet-maps',
              path: 'leaflet-maps',
              component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'bubble-maps',
              path: 'bubble-maps',
              component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'line-maps',
              path: 'line-maps',
              component: lazyLoading('maps/line-maps/LineMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
          ],
        },
        {
          name: 'pages',
          path: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              name: '404-pages',
              path: '404-pages',
              component: lazyLoading('pages/404-pages/404PagesPage'),
            },
          ],
        },
      ],
    },
  ],
})
