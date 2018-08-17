<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-horizontal-timeline
        :steps="items"
      />
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimeline from './VuesticHorizontalTimeline'

export default {
  components: {
    VuesticHorizontalTimeline
  },
  data () {
    return {
      items: [
        {
          date: 'April 10 15:00',
          content: 'The unique stripes of zebras make them one of the animals most familiar to people.',
          isActive: true
        },
        {
          date: 'May 22 10:00',
          content: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.'
        },
        {
          date: 'July 19 17:45',
          content: 'However, various anthropogenic factors have had a severe impact on zebra populations'
        }
      ]
    }
  }
}
</script>
