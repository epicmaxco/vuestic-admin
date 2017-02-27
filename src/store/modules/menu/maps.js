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
      component: lazyLoading('maps/google-maps/GoogleMaps'),
      meta: {
        title: 'Google Maps'
      }
    }
  ]
}
