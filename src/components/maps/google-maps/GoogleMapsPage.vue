<template>
  <div class="google-maps-page">
    <div class="row">
      <vuestic-widget class="col-sm-12 widget-viewport-height" headerText="Google Maps">
        <google-map></google-map>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import GoogleMap from './GoogleMap'

  export default {
    name: 'google-maps-page',
    components: {
      GoogleMap
    }
  }
</script>

<style lang="scss">

</style>
