<template>
  <div class="leaflet-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="leaflet-maps-page__widget">
          <va-card-title>Leaflet Maps</va-card-title>
          <va-card-content>
            <leaflet-map style="height: 65vh;" />
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import LeafletMap from './LeafletMap'

export default {
  name: 'leaflet-maps-page',
  components: {
    LeafletMap,
  },
}
</script>
