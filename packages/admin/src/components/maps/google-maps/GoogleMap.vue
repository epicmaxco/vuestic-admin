<template>
  <div class="google-map fill-height">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as GoogleMapsLoader from 'google-maps'

export default {
  name: 'google-map',

  computed: mapGetters({
    config: 'config',
  }),

  mounted () {
    GoogleMapsLoader.KEY = this.config.googleMaps.apiKey
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
