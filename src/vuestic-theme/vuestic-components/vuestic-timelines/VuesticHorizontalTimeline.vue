<template>
  <div class="vuestic-horizontal-timeline">
    <simple-horizontal-indicator
      class="vuestic-horizontal-timeline__indicator"
      :completed:="true"
      :steps="steps.items"
      :type="steps.type"
      :class="{'cardsHeight': steps.type==='cards'}"
      :currentStep="currentStep"
    />
  </div>
</template>

<script>
import SimpleHorizontalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleHorizontalIndicator.vue'

export default {
  name: 'vuestic-horizontal-timeline',
  components: {
    SimpleHorizontalIndicator
  },
  props: {
    steps: {},
    currentStep: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.vuestic-horizontal-timeline {
  .cardsHeight {
    .wizard-step.wizard-step {
      height: 0.75rem;
    }
  }
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
