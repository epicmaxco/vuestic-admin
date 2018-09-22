<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-vertical-timeline-item
        date="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
      <vuestic-vertical-timeline-item
        type="label"
        date="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
      <vuestic-vertical-timeline-item
        type="centered"
        date="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
    </div>

    <div class="demo-container__item">
      <vuestic-vertical-timeline-item
        label="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
      <vuestic-vertical-timeline-item
        label="March 20 16:04"
      >
        <span slot="date">{{ verticalCardDateFirst }}</span>
        <span slot="content">{{ verticalCardContentFirst }}</span>
      </vuestic-vertical-timeline-item>
      <vuestic-vertical-timeline-item
        label="March 20 16:04"
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
      verticalCardDateFirst: 'April 10 15:00',
      verticalCardContentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
    }
  }
}
</script>
