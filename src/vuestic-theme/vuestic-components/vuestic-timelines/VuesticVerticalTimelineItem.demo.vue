<template>
  <div class="demo-container">
    <div class="demo-container__item" style="overflow: hidden">
      <vuestic-vertical-timeline-item
        date="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
    </div>
  </div>
</template>

<script>
import VuesticVerticalTimelineItem from './VuesticVerticalTimelineItem.vue'
import VuesticCard from '../vuestic-card/VuesticCard'

export default {
  components: {
    VuesticCard,
    VuesticVerticalTimelineItem,
  },
  data () {
    return {
      VerticalCardDateFirst: 'April 10 15:00',
      verticalCardContentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
    }
  }
}
</script>

