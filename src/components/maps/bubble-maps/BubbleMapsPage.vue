<template>
  <div class="bubble-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="bubble-maps-page__widget"
          title="Bubble Maps"
        >
          <bubble-map v-bind:map-data="bubbleMapData"/>
        </va-card>
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
    BubbleMap,
  },
  data () {
    return {
      bubbleMapData: BubbleMapData,
    }
  },
}
</script>

<style lang="scss">
.bubble-maps-page {
  &__widget {
    .va-card__body {
      height: 65vh;
    }
  }
}
</style>
