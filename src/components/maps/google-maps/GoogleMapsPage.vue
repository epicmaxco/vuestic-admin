<template>
  <div class="google-maps-page">
    <div class="row">
      <widget class="col-sm-12 widget-viewport-height">
        <google-map></google-map>
      </widget>
    </div>
  </div>
</template>

<script>
  import GoogleMap from './GoogleMap'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'google-maps-page',
    components: {
      GoogleMap,
      Widget
    }
  }
</script>

<style lang="scss">

</style>
