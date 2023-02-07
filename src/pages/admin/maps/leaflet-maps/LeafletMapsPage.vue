<template>
  <div class="leaflet-maps-page">
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
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
