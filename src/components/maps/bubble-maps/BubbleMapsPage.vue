<template>
  <div class="bubble-maps-page">
    <div class="row">
      <widget class="col-sm-12">
        <bubble-map></bubble-map>
      </widget>
    </div>
  </div>
</template>

<script>
  import BubbleMap from './BubbleMap'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'bubble-maps-page',
    components: {
      BubbleMap,
      Widget
    }
  }
</script>

<style lang="scss">

</style>
