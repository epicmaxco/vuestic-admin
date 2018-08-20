r
<template>
  <div class="vuestic-vertical-timeline">
    <div
      :style="{'height': 100/steps.length + '%'}"
      v-for="(step,index) in steps"
    >
      <vuestic-vertical-timeline-item
        :class="{'reverse-items': type==='centered' && index % 2 !== 0 }"
        :step="step"
        :date="step.date"
        :type="type"
        :isActive="index<=currentStep"
      >
        <vuestic-card
          :theme="theme"
          :class="{'vuestic-card--stripe-success': theme==='base'}"
        >
          <template slot="title">{{step.date}}</template>
          {{step.content}}
        </vuestic-card>
      </vuestic-vertical-timeline-item>
    </div>
  </div>
</template>

<script>
import VuesticVerticalTimelineItem from './VuesticVerticalTimelineItem'

export default {
  name: 'vuestic-vertical-timeline',
  components: {
    VuesticVerticalTimelineItem,
  },
  props: {
    steps: {},
    date: {},
    theme: {
      type: String,
      default: 'base'
    },
    type: {
      type: String,
      default: 'simple'
    },
    currentStep: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.vuestic-vertical-timeline {
  @media (min-width: 991px) {
    .reverse-items {
      flex-direction: row-reverse;
      .vuestic-vertical-timeline-item__date-content {
        width: 100px;
      }
    }
  }
  overflow: hidden;
  .vuestic-vertical-timeline__indicator.vuestic-vertical-timeline__indicator {
    position: relative;
  }
}
</style>
