<template>
  <div class="yandex-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="yandex-maps-page__widget"
          title="Yandex Maps"
        >
          <yandex-map
            :use-object-manager:="true"
            :coords="[55.2, 38.8]"
            :zoom="8"
            style="width: 100%; height: 100%"
            :behaviors="['default']"
            :controls="['trafficControl','zoomControl', 'geolocationControl','fullscreenControl', 'searchControl']"
            :placemarks="placemarks"
            map-type="hybrid">
          </yandex-map>
        </va-card>
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
    ymapMarker,
  },
  data () {
    return {
      placemarks: [
        {
          coords: [54.8, 38.9],
          properties: {},
          options: {},
          clusterName: '1',
          balloonTemplate: '<div>"Your custom template"</div>',
          callbacks: {
            click: function () {
            },
          },
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.yandex-maps-page {
  &__widget {
    .va-card__body {
      height: 65vh;
    }
  }
}
</style>
