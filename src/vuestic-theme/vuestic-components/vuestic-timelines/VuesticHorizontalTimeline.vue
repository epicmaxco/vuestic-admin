<template>
  <div class="vuestic-horizontal-timeline">
    <div
      v-for="(step, index) in steps"
      :style="{'width': 100/steps.length + '%'}"
    >
      <vuestic-horizontal-timeline-item
        :step="step"
        :date="step.date"
        :isActive="index<=currentStep"
        :type="type"
        :indexCurrent="index"
        :indexMax="currentStep"
      >
        <vuestic-card
          class="vuestic-horizontal-timeline__card"
          v-if="type==='card'"
          :class="{'vuestic-card--stripe-success': theme==='base'}"
        >
          <template slot="title">{{step.date}}</template>
          {{step.content}}
        </vuestic-card>
      </vuestic-horizontal-timeline-item>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimelineItem from './VuesticHorizontalTimelineItem'

export default {
  name: 'vuestic-horizontal-timeline',
  components: {
    VuesticHorizontalTimelineItem
  },
  props: {
    steps: {},
    currentStep: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      validator: (val) => ['simple', 'card'].includes(val),
      default: 'simple'
    },
    theme: {
      type: String,
      default: 'base'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.vuestic-horizontal-timeline {
  @include media-breakpoint-down(xs) {
    &__card {
      font-size: 9px;
    }
  }
  display: inline-flex;
  width: 100%;
}
</style>
