<template>
  <div class="leaflet-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="leaflet-maps-page__widget" title="Leaflet Maps">
          <leaflet-map style="height: 65vh" />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LeafletMap from './LeafletMap.vue'
</script>
