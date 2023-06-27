<template>
  <div ref="mapRef" class="leaflet-map h-full" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import 'leaflet-map'
  import 'leaflet/dist/leaflet.css'
  import * as Leaflet from 'leaflet'

  Leaflet.Icon.Default.imagePath = '/vendor/leaflet/'

  const mapRef = ref()

  onMounted(() => {
    const map = Leaflet.map(mapRef.value).setView([51.505, -0.09], 13)

    Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    Leaflet.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup()
  })
</script>
