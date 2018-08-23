<template>
  <div class="vuestic-vertical-timeline">
    <slot/>
  </div>
</template>

<script>
import VuesticVerticalTimelineItem from './VuesticVerticalTimelineItem'

export default {
  name: 'vuestic-vertical-timeline',
  components: {
    VuesticVerticalTimelineItem,
  }
}
</script>

<style lang="scss">
.vuestic-vertical-timeline {
  .vuestic-vertical-timeline-item.active  {
    .vuestic-vertical-timeline-item__line {
      .vuestic-vertical-timeline-item__indicator {
        .wizard-step-line {
          background-color: $vue-green;
        }
        .wizard-step-indicator {
          background-color: $vue-green;
        }
      }
    }
  }
  .vuestic-vertical-timeline-item__date-content {
    width: 100px;
  }
  overflow: hidden;
}
</style>
