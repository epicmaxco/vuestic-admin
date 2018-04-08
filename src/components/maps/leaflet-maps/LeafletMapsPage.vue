<template>
  <div class="google-maps-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="widget-viewport-height" headerText="Leaflet Maps">
          <leaflet-map></leaflet-map>
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
      LeafletMap
    }
  }
</script>

<style lang="scss">

</style>
