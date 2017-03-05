<template>
  <div class="google-maps-page">
    <div class="row">
      <widget class="col-sm-12 widget-viewport-height" header-text="Leaflet Maps">
        <leaflet-map></leaflet-map>
      </widget>
    </div>
  </div>
</template>

<script>
  import LeafletMap from './LeafletMap'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'leaflet-maps-page',
    components: {
      LeafletMap,
      Widget
    }
  }
</script>

<style lang="scss">

</style>
