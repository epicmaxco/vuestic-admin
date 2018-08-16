<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-vertical-timeline-item
        :step="item"
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
  data () {
    return {
      item: {}
    }
  }
}
</script>

