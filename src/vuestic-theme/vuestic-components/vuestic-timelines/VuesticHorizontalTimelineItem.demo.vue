<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-horizontal-timeline-item
        :step="item"
        :date="'February 20 23:59'"
      />
      <vuestic-horizontal-timeline-item
        :step="item"
        :date="'February 20 23:59'"
      >
        <vuestic-card>
          <template slot="title">The unique stripes of zebras</template>
          The unique stripes of zebras make them one of the animals most familiar to people.
        </vuestic-card>
      </vuestic-horizontal-timeline-item>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimelineItem from './VuesticHorizontalTimelineItem.vue'
import VuesticCard from '../vuestic-card/VuesticCard'

export default {
  components: {
    VuesticCard,
    VuesticHorizontalTimelineItem,
  },
  data () {
    return {
      item: {}
    }
  }
}
</script>

