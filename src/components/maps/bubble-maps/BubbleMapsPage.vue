<template>
  <div class="bubble-maps-page">
    <div class="row">
      <vuestic-widget class="col-sm-12 widget-viewport-height" headerText="Bubble Maps">
        <bubble-map v-bind:map-data="bubbleMapData"></bubble-map>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import BubbleMap from './BubbleMap'
  import BubbleMapData from './BubbleMapData'

  export default {
    name: 'bubble-maps-page',
    components: {
      BubbleMap
    },
    data: function () {
      return {
        bubbleMapData: BubbleMapData
      }
    }
  }
</script>

<style lang="scss">

</style>
