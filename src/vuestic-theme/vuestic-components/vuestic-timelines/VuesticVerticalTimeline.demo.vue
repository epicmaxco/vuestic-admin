<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 45%; overflow: hidden">
      <vuestic-vertical-timeline>
        <vuestic-vertical-timeline-item :date="dateFirst">
          <span slot="date">{{ dateFirst }}</span>
          <span slot="content">{{ contentFirst }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateSecond">
          <span slot="date">{{ dateSecond }}</span>
          <span slot="content">{{ contentSecond }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateThird">
          <span slot="date">{{ dateThird }}</span>
          <span slot="content">{{ contentThird }}</span>
        </vuestic-vertical-timeline-item>
      </vuestic-vertical-timeline>
    </div>
    <div class="demo-container__item" style="width: 45%; overflow: hidden ">
      <vuestic-vertical-timeline>
        <vuestic-vertical-timeline-item :date="dateFirst" type="label">
          <span slot="date">{{ dateFirst }}</span>
          <span slot="content">{{ contentFirst }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateSecond" type="label">
          <span slot="date">{{ dateSecond }}</span>
          <span slot="content">{{ contentSecond }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateThird" type="label">
          <span slot="date">{{ dateThird }}</span>
          <span slot="content">{{ contentThird }}</span>
        </vuestic-vertical-timeline-item>
      </vuestic-vertical-timeline>
    </div>
    <div class="demo-container__item" style="overflow: hidden">
      <vuestic-vertical-timeline>
        <vuestic-vertical-timeline-item :date="dateFirst" type="centered">
          <span slot="date">{{ dateFirst }}</span>
          <span slot="content">{{ contentFirst }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateSecond" type="centered">
          <span slot="date">{{ dateSecond }}</span>
          <span slot="content">{{ contentSecond }}</span>
        </vuestic-vertical-timeline-item>
        <vuestic-vertical-timeline-item :date="dateThird" type="centered">
          <span slot="date">{{ dateThird }}</span>
          <span slot="content">{{ contentThird }}</span>
        </vuestic-vertical-timeline-item>
      </vuestic-vertical-timeline>
    </div>
  </div>
</template>

<script>
import VuesticVerticalTimeline from './VuesticVerticalTimeline'
import VuesticCard from '../vuestic-card/VuesticCard'
import VuesticVerticalTimelineItem from './VuesticVerticalTimelineItem.vue'

export default {
  components: {
    VuesticVerticalTimeline,
    VuesticCard,
    VuesticVerticalTimelineItem
  },
  data () {
    return {
      dateFirst: 'April 10 15:00',
      contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      dateSecond: 'May 22 10:00',
      contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      dateThird: 'July 19 17:45',
      contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations'
    }
  }
}
</script>
