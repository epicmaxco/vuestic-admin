<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 45%">
      <vuestic-vertical-timeline :steps="items"/>
    </div>
    <div class="demo-container__item" style="width: 45%">
      <vuestic-vertical-timeline
        :steps="items"
        :type="'label'"
        :currentStep="1"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-vertical-timeline
        :steps="items"
        :type="'centered'"
        :theme="'dark'"
      />
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
      items: [
        {
          date: 'April 10 15:00',
          content: 'The unique stripes of zebras make them one of the animals most familiar to people.',
        },
        {
          date: 'May 22 10:00',
          content: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
        },
        {
          date: 'July 19 17:45',
          content: 'However, various anthropogenic factors have had a severe impact on zebra populations'
        },
      ]
    }
  }
}
</script>
