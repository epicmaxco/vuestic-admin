<template>
  <div class="vuestic-timelines">
    <div class="vuestic-timelines__horizontal-simple">
      <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.horizontalSimple')">
        <vuestic-timeline>
          <vuestic-timeline-item active>
            <template slot="before">
              <div class="vuestic-timeline-item__title">
                February 2018
              </div>
              <div class="vuestic-timeline-item__description">
                Pre-sail rate: 50%
              </div>
            </template>
          </vuestic-timeline-item>
          <vuestic-timeline-item active>
            <template slot="before">
              <div class="vuestic-timeline-item__title">
                March 2018
              </div>
              <div class="vuestic-timeline-item__description">
                Pre-sail rate: 40%
              </div>
            </template>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <template slot="before">
              <div class="vuestic-timeline-item__title">
                April 2018
              </div>
              <div class="vuestic-timeline-item__description">
                Pre-sail rate: 20%
              </div>
            </template>
          </vuestic-timeline-item>
        </vuestic-timeline>
      </vuestic-widget>
    </div>

    <div class="vuestic-timelines__horizontal-cards">
      <vuestic-widget class="no-h-padding no-v-padding vuestic-timelines__horizontal-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-timeline style="min-width: 800px">
          <vuestic-timeline-item active>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ dateFirst }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item active>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ dateSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ dateThird }}</template>
              {{ contentThird }}
            </vuestic-card>
          </vuestic-timeline-item>
        </vuestic-timeline>
      </vuestic-widget>
    </div>

    <div class="vuestic-timelines__vertical-simple">
      <vuestic-widget class="no-h-padding no-v-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.verticalSimple')">
        <vuestic-timeline  class="vuestic-timelines__vertical-simple-indicator col-md-6" vertical>
          <vuestic-timeline-item active>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ dateFirst }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ dateSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
        </vuestic-timeline>
        <vuestic-timeline  class="vuestic-timelines__vertical-simple-indicator col-md-6" vertical>
          <vuestic-timeline-item active>
            <vuestic-card
              theme="dark"
              slot="after"
            >
              <template slot="title">{{ dateFirst }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <vuestic-card
              theme="dark"
              slot="after"
            >
              <template slot="title">{{ dateSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
        </vuestic-timeline>
      </vuestic-widget>
    </div>

    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.verticalLabel')">
        <vuestic-timeline vertical>
          <vuestic-timeline-item active>
            <span class="vuestic-timeline-item__text" slot="before">{{ dateFirst }}</span>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ titleFirst }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
            <vuestic-card
              slot="after"
              stripe="success"
            >
              <template slot="title">{{ titleSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
        </vuestic-timeline>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.verticalCentered')">
        <vuestic-timeline vertical centered>
          <vuestic-timeline-item active>
            <span class="vuestic-timeline-item__text" slot="before">{{ dateFirst }}</span>
            <vuestic-card
              slot="after"
              theme="dark"
            >
              <template slot="title">{{ titleFirst }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
            <vuestic-card
              slot="after"
              theme="dark"
            >
              <template slot="title">{{ titleSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
          <vuestic-timeline-item>
            <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
            <vuestic-card
              slot="after"
              theme="dark"
            >
              <template slot="title">{{ titleSecond }}</template>
              {{ contentFirst }}
            </vuestic-card>
          </vuestic-timeline-item>
        </vuestic-timeline>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VuesticHorizontalTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticHorizontalTimeline'
import VuesticHorizontalTimelineItem
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticHorizontalTimelineItem'
import VuesticVerticalTimelineItem
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticVerticalTimelineItem'
import VuesticVerticalTimeline
  from '../../../vuestic-theme/vuestic-components/vuestic-timelines/VuesticVerticalTimeline'

export default {
  name: 'timelines',
  components: {
    VuesticVerticalTimeline,
    VuesticHorizontalTimeline,
    VuesticHorizontalTimelineItem,
    VuesticVerticalTimelineItem,
  },
  data () {
    return {
      dateFirst: 'April 10 15:00',
      titleFirst: 'Make design',
      titleSecond: 'Develop an app',
      titleThird: 'Submit an app',
      horizontalSimpleContentFirst: 'Pre-sail rate: 50%',
      dateSecond: 'May 22 10:00',
      horizontalSimpleContentSecond: 'Pre-sail rate: 40%',
      dateThird: 'July 19 17:45',
      horizontalSimpleContentThird: 'Pre-sail rate: 20%',
      contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations',
    }
  },
}
</script>

<style lang="scss">
.vuestic-timelines {
  &__horizontal-cards-widget {
    .widget-body {
      overflow-x: auto;
    }
  }
  &__vertical-cards-widget {
    .widget-body.widget-body {
      display: flex;
      @include media-breakpoint-down(xs) {
        flex-wrap: wrap;
      }
    }
  }
  .vuestic-timelines__vertical-centered-cards-widget {
    .widget-body {
      padding-right: 1px;
      justify-content: center;
      width: 100%;
      display: inline-flex;
    }
  }
  &__vertical-simple-indicator-dark {
    @media(min-width: 1300px) {
      padding-left: 100px;
    }
  }
  &__vertical-label-indicator {
    padding-left: 0;
    max-width: 700px;
    @media (min-width: 590px) {
      margin-right: 10rem;
    }
  }
  &__vertical-centered-indicator {
    padding-left: 0;
    max-width: 700px;
  }
  @include media-breakpoint-down(xs) {
    &__vertical-simple-indicator {
      margin-bottom: 20px;
    }
  }
}
</style>
