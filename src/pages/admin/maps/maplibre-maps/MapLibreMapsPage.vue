<template>
  <div class="maplibre-maps-page">
    <div class="row">
      <div class="flex xs:col-span-12">
        <va-card class="maplibre-maps-page__widget" title="MapLibre Maps">
          <map-libre-map style="height: 65vh" />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MapLibreMap from './MapLibreMap.vue'
</script>
