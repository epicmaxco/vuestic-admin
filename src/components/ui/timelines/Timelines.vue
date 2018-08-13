<template>
  <div class="vuestic-timelines">
    <div class="vuestic-timelines__horizontal-simple">
      <vuestic-widget class="no-h-padding" :headerText="$t('timelines.horizontalSimple')">
        <vuestic-horizontal-simple-timeline :steps="horizontalSimpleEvents"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__horizontal-cards">
      <vuestic-widget class="no-h-padding vuestic-timelines__horizontal-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-horizontal-cards-timeline :steps="horizontalCardsEvents"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-vertical-label-timeline :steps="verticalCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
        <vuestic-vertical-label-timeline :steps="verticalCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalSimpleTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticHorizontalSimpleTimeline'
import VuesticHorizontalCardsTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticHorizontalCardsTimeline'
import VuesticVerticalLabelTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticVerticalLabelTimeline'

export default {
  name: 'timelines',
  components: {
    VuesticVerticalLabelTimeline,
    VuesticHorizontalSimpleTimeline,
    VuesticHorizontalCardsTimeline
  },
  data () {
    return {
      horizontalSimpleEvents: [
        {
          label: this.$t('timelines.firstDate'),
          info: 'Pre-sail rate: 50%'
        },
        {
          label: this.$t('timelines.secondDate'),
          info: 'Pre-sail rate: 40%'
        },
        {
          label: this.$t('timelines.thirdDate'),
          info: 'Pre-sail rate: 20%'
        },
      ],
      horizontalCardsEvents: [
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
      verticalCardsEvents: [
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
</script>

<style lang="scss">
.vuestic-timelines {
  &__horizontal-simple {
    width: 100%;
  }
  &__horizontal-cards-widget {
    .widget-body {
      height: 200px;
    }
  }
  &__vertical-cards-widget {
    .widget-body {
      display: inline-flex;
    }
  }
  &__vertical-label-indicator {
    padding-left: 20px;
  }
}
</style>
