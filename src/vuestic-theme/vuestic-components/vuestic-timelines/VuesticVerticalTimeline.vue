<template>
  <div class="vuestic-vertical-timeline">
    <simple-vertical-indicator
      class="vuestic-vertical-timeline__indicator"
      :steps="steps.items"
      :type="steps.type"
      :class="{'cardsHeight': steps.type==='label-cards' }"
      :currentStep="currentStep"
    />
  </div>
</template>

<script>
import SimpleVerticalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleVerticalIndicator.vue'

export default {
  name: 'vuestic-vertical-timeline',
  components: {
    SimpleVerticalIndicator
  },
  props: {
    steps: {},
    currentStep: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.vuestic-vertical-timeline {
  .vuestic-vertical-timeline__indicator.vuestic-vertical-timeline__indicator {
    position: relative;
  }
}
</style>
