<template>
  <div class="vuestic-timelines">
    <div class="vuestic-timelines__horizontal-simple">
      <vuestic-widget class="no-h-padding" :headerText="$t('timelines.horizontalSimple')">
        <vuestic-horizontal-timeline :steps="horizontalSimpleItems"/>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__horizontal-cards">
      <vuestic-widget class="no-h-padding vuestic-timelines__horizontal-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-horizontal-timeline
          :steps="horizontalCardsItems"
          :type="'card'"
        />
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-simple">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.verticalSimple')">
        <vuestic-vertical-timeline :steps="simpleVerticalitems" class="vuestic-timelines__vertical-simple-indicator"/>
        <vuestic-vertical-timeline
          :steps="simpleVerticalitems"
          class="vuestic-timelines__vertical-simple-indicator-dark"
          :theme="'dark'"
        />
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-label-cards-widget" :headerText="$t('timelines.verticalLabel')">
        <vuestic-vertical-timeline
          :steps="labelVerticalItems"
          class="vuestic-timelines__vertical-label-indicator"
          :type="'label'"
        />
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding vuestic-timelines__vertical-label-cards-widget" :headerText="$t('timelines.verticalLabel')">
        <vuestic-vertical-timeline
          :steps="labelVerticalItems"
          class="vuestic-timelines__vertical-label-indicator"
          :type="'centered'"
          :theme="'dark'"
        />
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
      horizontalCardsItems: [
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
      ],
      simpleVerticalitems: [
        {
          date: 'April 10 15:00',
          content: 'The unique stripes of zebras make them one of the animals most familiar to people.',
        },
        {
          date: 'July 19 17:45',
          content: 'However, various anthropogenic factors have had a severe impact on zebra populations'
        }
      ],
      labelVerticalItems: [
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
      ],
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
      height: 250px;
    }
  }
  &__vertical-cards-widget {
    .widget-body.widget-body {
      width: 100%;
      display: inline-flex;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .vuestic-timelines__vertical-label-cards-widget.vuestic-timelines__vertical-label-cards-widget {
    .widget-body {
      padding-right: 1px;
      justify-content: center;
      width: 100%;
      display: inline-flex;
    }
  }
  &__vertical-simple-indicator {
    padding-left: 20px;
  }
  &__vertical-simple-indicator-dark {
    padding-left: 0;
  }
  &__vertical-label-indicator {
    padding-left: 0;
    max-width: 700px;
  }
  @include media-breakpoint-down(xs) {
    &__vertical-simple-indicator-dark {
      padding-left: 0;
    }
  }
  @include media-breakpoint-down(xs) {
    &__vertical-label-indicator {
      padding-left: 0;
    }
  }
}
</style>
