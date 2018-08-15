<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-horizontal-timeline
        :steps="horizontalSimpleEvents"
        :currentStep="1"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-horizontal-timeline
        :steps="horizontalCardsEvents"
        :currentStep="0"
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
      horizontalCardsEvents: {
        type: 'cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'cards.contentText',
            theme: 'base'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.cardsSecondInfo',
            theme: 'dark'
          },
          {
            label: this.$t('timelines.thirdDate'),
            cardInfo: 'timelines.cardsThirdInfo',
            theme: 'base'
          },
        ],
      },
      horizontalSimpleEvents: {
        type: 'simple',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            info: 'cards.contentText',
            theme: 'base'
          },
          {
            label: this.$t('timelines.secondDate'),
            info: 'timelines.cardsSecondInfo',
            theme: 'dark'
          },
          {
            label: this.$t('timelines.thirdDate'),
            info: 'timelines.cardsThirdInfo',
            theme: 'base'
          },
        ],
      }
    }
  }
}
</script>
