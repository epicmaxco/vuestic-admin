<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-horizontal-cards-timeline :steps="horizontalCardsEvents"/>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalCardsTimeline from './VuesticHorizontalCardsTimeline'

export default {
  components: {
    VuesticHorizontalCardsTimeline
  },
  data () {
    return {
      horizontalCardsEvents: {
        type: 'horizontal-cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'cards.contentText'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.cardsSecondInfo'
          },
          {
            label: this.$t('timelines.thirdDate'),
            cardInfo: 'timelines.cardsThirdInfo'
          },
        ],
      }
    }
  }
}
</script>
