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
    <div class="vuestic-timelines__vertical-simple">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.verticalSimple')">
        <vuestic-vertical-label-timeline :steps="verticalCardsEvents" class="vuestic-timelines__vertical-simple-indicator"/>
        <vuestic-vertical-label-timeline :steps="verticalCardsEvents" class="vuestic-timelines__vertical-simple-indicator-dark" :cardTheme="'dark'"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-label-widget" :headerText="$t('timelines.verticalLabel')">
        <vuestic-vertical-label-timeline :steps="verticalLabelCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
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
      horizontalSimpleEvents: {
        type: 'horizontal-simple',
        items: [
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
      },
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
      },
      verticalCardsEvents: {
        type: 'vertical-cards',
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
      },
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

<style lang="scss">
.vuestic-timelines {
  &__horizontal-simple {
    width: 100%;
  }
  &__horizontal-cards {
    overflow: hidden;
  }
  &__vertical-simple {
    overflow: hidden;
  }
  &__horizontal-cards-widget {
    .widget-body {
      height: 200px;
    }
  }
  &__vertical-cards-widget {
    .widget-body {
      width: 100%;
      display: inline-flex;
    }
  }
  &__vertical-simple-indicator {
    padding-left: 20px;
  }
  &__vertical-simple-indicator-dark {
    padding-left: 19%;
  }
  &__vertical-label-indicator {
    padding-left: 48%;
  }
  @include media-breakpoint-down(xs) {
    &__vertical-simple-indicator-dark {
      padding-left: 0;
    }
  }
  @include media-breakpoint-down(xs) {
    &__vertical-label-indicator {
      padding-left: 28%;
    }
  }
}
</style>
