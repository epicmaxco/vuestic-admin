<template>
  <div class="vuestic-timelines">
    <div class="vuestic-timelines__horizontal-simple">
      <vuestic-widget class="no-h-padding" :headerText="$t('timelines.horizontalSimple')">
        <vuestic-horizontal-timeline :steps="horizontalSimpleEvents"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__horizontal-cards">
      <vuestic-widget class="no-h-padding vuestic-timelines__horizontal-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-horizontal-timeline :steps="horizontalCardsEvents"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-simple">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.verticalSimple')">
        <vuestic-vertical-timeline :steps="verticalCardsEvents" class="vuestic-timelines__vertical-simple-indicator"/>
        <vuestic-vertical-timeline :steps="verticalCardsEventsDark" class="vuestic-timelines__vertical-simple-indicator-dark"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-label-widget" :headerText="$t('timelines.verticalLabel')">
        <vuestic-vertical-timeline :steps="verticalLabelCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-centered">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-label-widget" :headerText="$t('timelines.verticalCentered')">
        <vuestic-vertical-timeline :steps="verticalCenteredCardsEvents" class="vuestic-timelines__vertical-label-indicator"/>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticHorizontalTimeline'
import VuesticVerticalTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticVerticalTimeline'

export default {
  name: 'timelines',
  components: {
    VuesticVerticalTimeline,
    VuesticHorizontalTimeline
  },
  data () {
    return {
      horizontalSimpleEvents: {
        type: 'simple',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            info: 'Pre-sail rate: 50%',
            theme: 'base'
          },
          {
            label: this.$t('timelines.secondDate'),
            info: 'Pre-sail rate: 40%',
            theme: 'base'
          },
          {
            label: this.$t('timelines.thirdDate'),
            info: 'Pre-sail rate: 20%',
            theme: 'base'
          },
        ],
      },
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
            theme: 'base'
          },
          {
            label: this.$t('timelines.thirdDate'),
            cardInfo: 'timelines.cardsThirdInfo',
            theme: 'base'
          },
        ],
      },
      verticalCardsEvents: {
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
            theme: 'base'
          }
        ]
      },
      verticalCardsEventsDark: {
        type: 'cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'timelines.verticalSimpleCardsFirstInfo',
            theme: 'dark'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.verticalSimpleCardsSecondInfo',
            theme: 'dark'
          }
        ]
      },
      verticalLabelCardsEvents: {
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
            theme: 'base'
          }
        ]
      },
      verticalCenteredCardsEvents: {
        type: 'label-cards',
        items: [
          {
            label: this.$t('timelines.firstDate'),
            cardInfo: 'cards.contentText',
            theme: 'dark'
          },
          {
            label: this.$t('timelines.secondDate'),
            cardInfo: 'timelines.cardsSecondInfo',
            theme: 'dark'
          },
          {
            label: this.$t('timelines.thirdDate'),
            cardInfo: 'timelines.cardsThirdInfo',
            theme: 'dark'
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
