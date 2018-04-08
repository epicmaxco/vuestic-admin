<template>
  <div class="bubble-maps-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="widget-viewport-height" headerText="Bubble Maps">
          <bubble-map v-bind:map-data="bubbleMapData"></bubble-map>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import BubbleMap from './BubbleMap'
  import BubbleMapData from 'data/maps/BubbleMapData'

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
