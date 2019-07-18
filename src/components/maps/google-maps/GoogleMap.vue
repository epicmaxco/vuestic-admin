<template>
  <div class="google-map fill-height" />
</template>

<script>
import * as GoogleMapsLoader from 'google-maps'

export default {
  name: 'google-map',

  mounted () {
    if (!process.env.VUE_APP_GOOGLE_MAPS_API_KEY) {
      throw new Error('Please provide google maps api key from env (VUE_APP_GOOGLE_MAPS_API_KEY)')
    }

    GoogleMapsLoader.KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    /* We stick to version updates instead of weekly channel update because
       using weekly updates you need to test them, but we prefer to use stable
       versions. */
    GoogleMapsLoader.VERSION = '3.35'
    GoogleMapsLoader.load((google) => {
      /* eslint-disable no-new */
      new google.maps.Map(this.$el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      })
    })
  },
}
</script>
