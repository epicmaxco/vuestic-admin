export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      meta: {
        icon: 'vuestic-iconset-maps',
      },
      disabled: true,
      children: [
        {
          name: 'maplibre-maps',
          displayName: 'menu.maplibre-maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'menu.yandex-maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'menu.leaflet-maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'menu.bubble-maps',
        },
        {
          name: 'line-maps',
          displayName: 'menu.line-maps',
        },
      ],
    },
    {
      name: 'payments',
      displayName: 'menu.payments',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'payment-methods',
          displayName: 'menu.payment-methods',
        },
        {
          name: 'preferences',
          displayName: 'menu.preferences',
        },
        {
          name: 'pricing-plans',
          displayName: 'menu.pricing-plans',
        },
        {
          name: 'billing',
          displayName: 'menu.billing',
        },
      ],
    },
    {
      name: 'auth',
      displayName: 'menu.auth',
      meta: {
        icon: 'login',
      },
      children: [
        {
          name: 'login',
          displayName: 'menu.login',
        },
        {
          name: 'signup',
          displayName: 'menu.signup',
        },
        {
          name: 'recover-password',
          displayName: 'menu.recover-password',
        },
        {
          name: 'recover-password-email',
          displayName: 'menu.recover-password-email',
        },
      ],
    },
    {
      name: 'faq',
      displayName: 'menu.faq',
      meta: {
        icon: 'quiz',
      },
    },
    {
      name: '404',
      displayName: 'menu.404',
      meta: {
        icon: 'vuestic-iconset-files',
      },
    },
  ] as INavigationRoute[],
}
