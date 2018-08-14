<template>
  <div class="vuestic-horizontal-cards-timeline">
    <simple-horizontal-indicator class="vuestic-horizontal-simple-timeline__indicator" :completed:="true" :steps="steps.items" :cardTheme="cardTheme" :type="steps.type"/>
  </div>
</template>

<script>
import SimpleHorizontalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleHorizontalIndicator.vue'
import VuesticWidget from '../vuestic-widget/VuesticWidget'
import VuesticCard
  from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'

export default {
  name: 'vuestic-horizontal-cards-timeline',
  components: {
    VuesticWidget,
    SimpleHorizontalIndicator,
    VuesticCard
  },
  props: {
    steps: {},
    cardTheme: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.vuestic-horizontal-cards-timeline {
  .wizard-step {
    height: 0.75rem;
  }
}
</style>
