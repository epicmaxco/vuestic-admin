<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100%">
      <vuestic-horizontal-timeline-item
        type="simple"
        content="Pre-sail rate 50%"
        :date="'February 20 23:59'"
        :isActive="true"
      >
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
    }
  }
}
</script>

