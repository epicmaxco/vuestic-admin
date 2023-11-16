<template>
  <div class="maplibre-maps-page">
    <VaCard class="maplibre-maps-page__widget" title="MapLibre Maps">
      <MapLibreMap style="height: 65vh" />
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import MapLibreMap from './MapLibreMap.vue'
</script>
