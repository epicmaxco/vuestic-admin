<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-vertical-timeline
        :steps="verticalCardsEventsFirst"
        class="vuestic-timelines__vertical-label-indicator"
        :currentStep="stepFirst"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-vertical-timeline
        :steps="verticalCardsEventsSecond"
        class="vuestic-timelines__vertical-label-indicator"
        :currentStep="stepSecond"
      />
    </div>
  </div>
</template>

<script>
import VuesticVerticalTimeline from './VuesticVerticalTimeline'

export default {
  components: {
    VuesticVerticalTimeline
  },
  data () {
    return {
      verticalCardsEventsFirst: {
        type: 'label-cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'timelines.verticalSimpleCardsFirstInfo',
            theme: 'base'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.verticalSimpleCardsSecondInfo',
            theme: 'dark'
          }
        ]
      },
      verticalCardsEventsSecond: {
        type: 'cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'timelines.verticalSimpleCardsFirstInfo',
            theme: 'base'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.verticalSimpleCardsSecondInfo',
            theme: 'dark'
          }
        ]
      },
      stepFirst: 1,
      stepSecond: 0
    }
  }
}
</script>
