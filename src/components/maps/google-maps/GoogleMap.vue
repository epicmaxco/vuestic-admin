<template>
  <div class="google-map">
  </div>
</template>

<script>
  import * as GoogleMapsLoader from 'google-maps'

  export default {
    name: 'google-map',

    mounted () {
      GoogleMapsLoader.load((google) => {
        /* eslint-disable no-new */
        new google.maps.Map(this.$el, {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })
      })
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .google-map {
    height: $widget-content-viewport-height;
  }
</style>
