import lazyLoading from './lazyLoading'

export default {
  name: 'Maps',
  meta: {
    expanded: false,
    title: 'Maps',
    iconClass: 'fa fa-location-arrow'
  },

  children: [
    {
      name: 'GoogleMaps',
      path: '/maps/google-maps',
      component: lazyLoading('maps/google-maps/GoogleMapsPage'),
      meta: {
        title: 'Google Maps'
      }
    },
    {
      name: 'LeafletMaps',
      path: '/maps/leaflet-maps',
      component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
      meta: {
        title: 'Leaflet Maps'
      }
    }
  ]
}
