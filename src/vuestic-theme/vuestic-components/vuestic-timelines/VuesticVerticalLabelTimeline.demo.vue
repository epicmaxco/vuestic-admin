<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-vertical-label-timeline :steps="verticalLabelCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
    </div>
  </div>
</template>

<script>
import VuesticVerticalLabelTimeline from './VuesticVerticalLabelTimeline'

export default {
  components: {
    VuesticVerticalLabelTimeline
  },
  data () {
    return {
      verticalLabelCardsEvents: {
        type: 'vertical-label-cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'timelines.verticalSimpleCardsFirstInfo'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.verticalSimpleCardsSecondInfo'
          }
        ]
      }
    }
  }
}
</script>
