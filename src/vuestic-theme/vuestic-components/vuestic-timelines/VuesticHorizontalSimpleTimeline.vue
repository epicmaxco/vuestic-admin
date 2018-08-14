<template>
  <div class="vuestic-horizontal-simple-timeline">
    <simple-horizontal-indicator class="vuestic-horizontal-simple-timeline__indicator" :completed:="true" :steps="steps.items" :type="steps.type"/>
  </div>
</template>

<script>
import SimpleHorizontalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleHorizontalIndicator.vue'

export default {
  name: 'vuestic-horizontal-simple-timeline',
  components: {
    SimpleHorizontalIndicator
  },
  props: {
    steps: {}
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.vuestic-horizontal-simple-timeline {
  & &__indicator {
    .wizard-step .wizard-step-label {
      font-size: 14px;
      color: $vue-green
    }
    .wizard-step.active.current .wizard-step-label {
      font-size: 14px;
      color: $vue-green
    }
    .wizard-step {
      height: 4.75rem;
    }
  }
}
</style>
