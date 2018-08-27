<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100%">
      <vuestic-horizontal-timeline type="simple">
        <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 50%" type="simple"/>
        <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 40%" type="simple"/>
        <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 20%" type="simple"/>
      </vuestic-horizontal-timeline>
    </div>
    <div class="demo-container__item" style="width: 100%">
      <vuestic-horizontal-timeline type="card">
        <vuestic-horizontal-timeline-item type="card" class="item">
          <span slot="date">{{dateFirst}}</span>
          <span slot="content">{{contentFirst}}</span>
        </vuestic-horizontal-timeline-item>
        <vuestic-horizontal-timeline-item type="card" class="item active">
          <span slot="date">{{dateSecond}}</span>
          <span slot="content">{{contentSecond}}</span>
        </vuestic-horizontal-timeline-item>
        <vuestic-horizontal-timeline-item type="card" class="item">
          <span slot="date">{{dateThird}}</span>
          <span slot="content">{{contentThird}}</span>
        </vuestic-horizontal-timeline-item>
      </vuestic-horizontal-timeline>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimeline from './VuesticHorizontalTimeline'
import VuesticHorizontalTimelineItem from './VuesticHorizontalTimelineItem'

export default {
  components: {
    VuesticHorizontalTimeline,
    VuesticHorizontalTimelineItem
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
