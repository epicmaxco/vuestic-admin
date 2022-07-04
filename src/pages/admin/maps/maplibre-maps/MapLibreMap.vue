<template>
  <div ref="mapRef" class="maplibre-map fill-height" />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import maplibregl from 'maplibre-gl'
  import 'maplibre-gl/dist/maplibre-gl.css'

  const mapRef = ref()

  onMounted(() => {
    const map = new maplibregl.Map({
      container: mapRef.value,
      style: 'https://demotiles.maplibre.org/style.json',
    })

    map.addControl(new maplibregl.NavigationControl({}))
  })
</script>
