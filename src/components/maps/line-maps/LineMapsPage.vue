<template>
  <div class="line-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget
          class="line-maps-page__widget"
          headerText="Line Maps"
        >
          <line-map v-bind:map-data="lineMapData"/>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import LineMap from './LineMap'
import LineMapData from 'data/maps/LineMapData'

export default {
  name: 'line-maps-page',
  components: {
    LineMap,
  },
  data () {
    return {
      lineMapData: LineMapData,
    }
  },
}
</script>

<style lang="scss">
.line-maps-page {
  &__widget {
    height: 70vh;
    .vuestic-widget-body {
      height: 65vh;
    }
  }
}
</style>
