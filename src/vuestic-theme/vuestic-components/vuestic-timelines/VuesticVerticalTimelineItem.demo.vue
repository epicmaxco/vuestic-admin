<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100%">
      <vuestic-vertical-timeline-item
        date="April 10 15:00"
      >
        <vuestic-card>
          <template slot="title">The unique stripes of zebras</template>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.
        </vuestic-card>
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
}
</script>
