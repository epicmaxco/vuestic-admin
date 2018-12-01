<template>
  <div class="leaflet-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget
          class="leaflet-maps-page__widget"
          headerText="Leaflet Maps"
        >
          <leaflet-map/>
        </vuestic-widget>
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
    height: 70vh;
    .vuestic-widget-body {
      height: 65vh;
    }
  }
}
</style>
