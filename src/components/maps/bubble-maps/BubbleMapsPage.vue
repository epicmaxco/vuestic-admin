<template>
  <div class="bubble-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card
          class="bubble-maps-page__widget"
          title="Bubble Maps"
        >
          <bubble-map
            :map-data="bubbleMapData"
            style="height: 65vh;"
          />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import BubbleMap from './BubbleMap'
import BubbleMapData from '../../../data/maps/BubbleMapData'

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
