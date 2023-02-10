<template>
  <div class="yandex-maps-page">
    <va-card class="yandex-maps-page__widget" title="Yandex Maps">
      <yandex-map
        map-type="hybrid"
        :coords="[55.2, 38.8]"
        :zoom="8"
        :controls="['trafficControl', 'zoomControl', 'geolocationControl', 'fullscreenControl', 'searchControl']"
        style="width: 100%; height: 65vh"
      >
        <yandex-map-marker v-for="marker in markers" :key="marker['marker-id']" v-bind="marker" />
      </yandex-map>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // No TS declarations are provided - ignoring the error
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { yandexMap as YandexMap, ymapMarker as YandexMapMarker } from 'vue-yandex-maps'

  const markers = ref([
    {
      'marker-id': 0,
      coords: [54.8, 38.9],
      clusterName: '1',
      balloonTemplate: '<div>"Your custom template"</div>',
    },
  ])
</script>
