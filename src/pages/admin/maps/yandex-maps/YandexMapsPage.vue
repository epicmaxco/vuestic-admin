<template>
  <div class="yandex-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="yandex-maps-page__widget" title="Yandex Maps">
          <yandex-map
            :use-object-manager:="true"
            :coords="[55.2, 38.8]"
            :zoom="8"
            style="width: 100%; height: 65vh"
            :behaviors="['default']"
            :controls="['trafficControl', 'zoomControl', 'geolocationControl', 'fullscreenControl', 'searchControl']"
            :placemarks="placemarks"
            map-type="hybrid"
          >
          </yandex-map>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { yandexMap as YandexMap } from "vue-yandex-maps";
  import { ref } from "vue";

  const placemarks = ref([
    {
      coords: [54.8, 38.9],
      properties: {},
      options: {},
      clusterName: "1",
      balloonTemplate: '<div>"Your custom template"</div>',
      callbacks: {},
    },
  ]);
</script>
