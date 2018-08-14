<template>
  <div class="vuestic-vertical-label-timeline">
    <simple-vertical-indicator :steps="steps.items" class="vuestic-vertical-label-timeline__indicator" :cardTheme="cardTheme" :type="steps.type"/>
  </div>
</template>

<script>
import SimpleVerticalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleVerticalIndicator.vue'

export default {
  name: 'vuestic-vertical-label-timeline',
  components: {
    SimpleVerticalIndicator
  },
  props: {
    steps: {},
    cardTheme: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss">
.vuestic-vertical-label-timeline {
  .vuestic-vertical-label-timeline__indicator.vuestic-vertical-label-timeline__indicator {
    position: relative;
  }
}
</style>
