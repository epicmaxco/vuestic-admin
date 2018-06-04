import lazyLoading from './lazyLoading'

export default {
  name: 'Maps',
  meta: {
    expanded: false,
    title: 'menu.maps',
    iconClass: 'vuestic-icon vuestic-icon-maps'
  },

  children: [
    {
      name: 'GoogleMaps',
      path: '/maps/google-maps',
      component: lazyLoading('maps/google-maps/GoogleMapsPage'),
      meta: {
        title: 'Google Maps',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'YandexMaps',
      path: '/maps/yandex-maps',
      component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
      meta: {
        title: 'Yandex Maps',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'LeafletMaps',
      path: '/maps/leaflet-maps',
      component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
      meta: {
        title: 'Leaflet Maps',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'BubbleMaps',
      path: '/maps/bubble-maps',
      component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
      meta: {
        title: 'Bubble Maps',
        iconClass: 'fa fa-circle-o'
      }
    },
    {
      name: 'LineMaps',
      path: '/maps/line-maps',
      component: lazyLoading('maps/line-maps/LineMapsPage'),
      meta: {
        title: 'Line Maps',
        iconClass: 'fa fa-circle-o'
      }
    }
  ]
}
