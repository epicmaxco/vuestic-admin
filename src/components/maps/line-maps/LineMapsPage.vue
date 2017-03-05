<template>
  <div class="bubble-maps-page">
    <div class="row">
      <widget class="col-sm-12 widget-viewport-height"  header-text="Line Maps">
        <line-map v-bind:map-data="lineMapData"></line-map>
      </widget>
    </div>
  </div>
</template>

<script>
  import LineMap from './LineMap'
  import LineMapData from './LineMapData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'line-maps-page',
    components: {
      LineMap,
      Widget
    },
    data: function () {
      return {
        lineMapData: LineMapData
      }
    }
  }
</script>

<style lang="scss">

</style>
