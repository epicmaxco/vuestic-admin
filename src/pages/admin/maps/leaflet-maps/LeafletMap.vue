<template>
  <div class="leaflet-map fill-height">
  </div>
</template>

<script>
import 'leaflet-map'
import * as Leaflet from 'leaflet'

export default {
  name: 'leaflet-map',

  mounted () {
    Leaflet.Icon.Default.imagePath = process.env.BASE_URL + 'img/vendor/leaflet/'

    const map = Leaflet.map(this.$el).setView([51.505, -0.09], 13)

    Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    Leaflet.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup()
  },
}
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
</style>
