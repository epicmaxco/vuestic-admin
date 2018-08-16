<template>
  <div class="vuestic-vertical-timeline">
    <div v-for="step of steps">
      <vuestic-vertical-timeline-item
        :step="step"
        :date="step.date"
      >
        <vuestic-card>
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
    date: {}
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
