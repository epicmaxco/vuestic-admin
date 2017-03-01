<template>
  <div class="bubble-maps-page">
    <div class="row">
      <widget class="col-sm-12">
        <bubble-map v-bind:map-data="bubbleMapData"></bubble-map>
      </widget>
    </div>
  </div>
</template>

<script>
  import BubbleMap from './BubbleMap'
  import Widget from 'components/common/widget/Widget'
  import BubbleMapData from './BubbleMapData'

  export default {
    name: 'bubble-maps-page',
    components: {
      BubbleMap,
      Widget
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
