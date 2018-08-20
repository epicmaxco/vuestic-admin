<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100%">
      <vuestic-horizontal-timeline
        :steps="items"
        :type="'card'"
        :currentStep="1"
      />
    </div>
    <div class="demo-container__item" style="width: 100%">
      <vuestic-horizontal-timeline
        :steps="horizontalSimpleItems"
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
      horizontalSimpleItems: [
        {
          date: 'April 10 15:00',
          content: 'Pre-sail rate: 50%',
        },
        {
          date: 'May 22 10:00',
          content: 'Pre-sail rate: 40%'
        },
        {
          date: 'July 19 17:45',
          content: 'Pre-sail rate: 20%'
        }
      ],
      items: [
        {
          date: 'April 10 15:00',
          content: 'The unique stripes of zebras make them one of the animals most familiar to people.',
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
