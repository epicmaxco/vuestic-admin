export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        iconClass: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'statistics',
      displayName: 'menu.statistics',
      meta: {
        iconClass: 'vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      meta: {
        iconClass: 'vuestic-iconset-forms',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'lists',
      displayName: 'menu.lists',
      meta: {
        iconClass: 'vuestic-iconset-files', // TODO use vuestic list icon when ready
      },
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
      meta: {
        iconClass: 'vuestic-iconset-tables',
      },
      children: [
        {
          name: 'markup',
          displayName: 'menu.markupTables',
        },
        {
          name: 'data',
          displayName: 'menu.dataTables',
        },
      ],
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      meta: {
        iconClass: 'vuestic-iconset-ui-elements',
      },
      disabled: true,
      children: [
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'collapses',
          displayName: 'menu.collapses',
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'chips',
          displayName: 'menu.chips',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
        {
          name: 'colors',
          displayName: 'menu.colors',
        },
        {
          name: 'spacing',
          displayName: 'menu.spacing',
        },
        {
          name: 'sliders',
          displayName: 'menu.sliders',
        },
        {
          name: 'popovers',
          displayName: 'menu.popovers',
        },
        {
          name: 'chat',
          displayName: 'menu.chat',
        },
        {
          name: 'rating',
          displayName: 'menu.rating',
        },
      ],
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      meta: {
        iconClass: 'vuestic-iconset-maps',
      },
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'Google Maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'Yandex Maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'Leaflet Maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'Bubble Maps',
        },
        {
          name: 'line-maps',
          displayName: 'Line Maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      meta: {
        iconClass: 'vuestic-iconset-files',
      },
      disabled: true,
      children: [
        {
          name: 'login',
          displayName: 'Login/Signup',
        },
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
  ],
}
