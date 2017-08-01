<template>
  <div class="google-maps-page">
    <div class="row">
      <vuestic-widget class="col-sm-12 widget-viewport-height" headerText="Leaflet Maps">
        <leaflet-map></leaflet-map>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import LeafletMap from './LeafletMap'

  export default {
    name: 'leaflet-maps-page',
    components: {
      LeafletMap
    }
  }
</script>

<style lang="scss">

</style>
