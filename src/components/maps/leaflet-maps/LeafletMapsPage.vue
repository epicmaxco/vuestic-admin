<template>
  <div class="leaflet-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="leaflet-maps-page__widget"
          title="Leaflet Maps"
        >
          <leaflet-map/>
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

<style lang="scss">
.leaflet-maps-page {
  &__widget {
    .va-card__body {
      height: 65vh;
    }
  }
}
</style>
