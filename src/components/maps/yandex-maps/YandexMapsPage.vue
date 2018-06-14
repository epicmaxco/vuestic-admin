<template>
  <div class="yandex-maps-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="widget-viewport-height" headerText="Yandex Maps">
          <yandex-map
            :use-object-manager:="true"
            :coords="[55.8, 37.8]"
            :zoom="8"
            style="width: 100%; height: 100%"
            :behaviors="['default']"
            :controls="['trafficControl','zoomControl', 'geolocationControl','fullscreenControl', 'searchControl']"
            :placemarks="placemarks"
            map-type="hybrid"  >
          </yandex-map>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>

  import { yandexMap, ymapMarker } from 'vue-yandex-maps'

  export default {
    name: 'yandex-maps-page',
    components: {
      yandexMap,
      ymapMarker
    },
    data () {
      return {
        placemarks: [
          {
            coords: [54.8, 39.8],
            properties: {},
            options: {},
            clusterName: '1',
            balloonTemplate: '<div>"Your custom template"</div>',
            callbacks: { click: function () {} }
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../sass/_variables.scss";

  .yandex-maps-page {
    height: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
