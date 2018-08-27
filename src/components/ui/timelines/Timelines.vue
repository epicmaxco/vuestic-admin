<template>
  <div class="vuestic-timelines">
    <div class="vuestic-timelines__horizontal-simple">
      <vuestic-widget class="no-h-padding" :headerText="$t('timelines.horizontalSimple')">
        <vuestic-horizontal-timeline>
          <vuestic-horizontal-timeline-item :date=dateFirst :content=horizontalSimpleContentFirst type="simple" class="active"/>
          <vuestic-horizontal-timeline-item :date=dateSecond :content=horizontalSimpleContentSecond type="simple" class="active"/>
          <vuestic-horizontal-timeline-item :date=dateThird :content=horizontalSimpleContentThird type="simple"/>
        </vuestic-horizontal-timeline>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__horizontal-cards">
      <vuestic-widget class="no-h-padding vuestic-timelines__horizontal-cards-widget" :headerText="$t('timelines.horizontalCards')">
        <vuestic-horizontal-timeline>
          <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 50%" type="card" class="active">
            <span slot="date">{{ dateFirst}}</span>
            <span slot="content">{{ contentFirst }}</span>
          </vuestic-horizontal-timeline-item>
          <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 40%" type="card" class="active">
            <span slot="date">{{ dateSecond }}</span>
            <span slot="content">{{ contentSecond }}</span>
          </vuestic-horizontal-timeline-item>
          <vuestic-horizontal-timeline-item date="April 10 15:00" content="Pre-sail rate: 20%" type="card">
            <span slot="date">{{ dateThird }}</span>
            <span slot="content">{{ contentThird }}</span>
          </vuestic-horizontal-timeline-item>
        </vuestic-horizontal-timeline>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-simple">
      <vuestic-widget class="no-h-padding no-v-padding vuestic-timelines__vertical-cards-widget" :headerText="$t('timelines.verticalSimple')">
        <vuestic-vertical-timeline class="vuestic-timelines__vertical-simple-indicator col-md-6">
          <vuestic-vertical-timeline-item :date="dateFirst" class="active">
            <span slot="date">{{ dateFirst }}</span>
            <span slot="content">{{ contentFirst }}</span>
          </vuestic-vertical-timeline-item>
          <vuestic-vertical-timeline-item :date="dateSecond">
            <span slot="date">{{ dateSecond }}</span>
            <span slot="content">{{ contentSecond }}</span>
          </vuestic-vertical-timeline-item>
        </vuestic-vertical-timeline>
        <vuestic-vertical-timeline class="vuestic-timelines__vertical-simple-indicator-dark col-md-6">
          <vuestic-vertical-timeline-item :date="dateFirst" theme="dark" class="active">
            <span slot="date">{{ dateFirst }}</span>
            <span slot="content">{{ contentFirst }}</span>
          </vuestic-vertical-timeline-item>
          <vuestic-vertical-timeline-item :date="dateSecond" theme="dark">
            <span slot="date">{{ dateSecond }}</span>
            <span slot="content">{{ contentSecond }}</span>
          </vuestic-vertical-timeline-item>
        </vuestic-vertical-timeline>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding no-v-padding vuestic-timelines__vertical-label-cards-widget" :headerText="$t('timelines.verticalLabel')">
        <vuestic-vertical-timeline class="vuestic-timelines__vertical-label-indicator">
          <vuestic-vertical-timeline-item :date="dateFirst" type="label" class="active">
            <span slot="title">{{ titleFirst }}</span>
            <span slot="content">{{ contentFirst }}</span>
          </vuestic-vertical-timeline-item>
          <vuestic-vertical-timeline-item :date="dateSecond" type="label">
            <span slot="title">{{ titleSecond }}</span>
            <span slot="content">{{ contentSecond }}</span>
          </vuestic-vertical-timeline-item>
        </vuestic-vertical-timeline>
      </vuestic-widget>
    </div>
    <div class="vuestic-timelines__vertical-label">
      <vuestic-widget class="no-h-padding no-v-padding vuestic-timelines__vertical-centered-cards-widget" :headerText="$t('timelines.verticalCentered')">
        <vuestic-vertical-timeline class="vuestic-timelines__vertical-centered-indicator">
          <vuestic-vertical-timeline-item :date="dateFirst" type="label" theme="dark" class="active">
            <span slot="title">{{ titleFirst }}</span>
            <span slot="content">{{ contentFirst }}</span>
          </vuestic-vertical-timeline-item>
          <vuestic-vertical-timeline-item :date="dateSecond" type="centered" theme="dark">
            <span slot="title">{{ titleSecond }}</span>
            <span slot="content">{{ contentSecond }}</span>
          </vuestic-vertical-timeline-item>
          <vuestic-vertical-timeline-item :date="dateThird" type="label" theme="dark">
            <span slot="title">{{ titleThird }}</span>
            <span slot="content">{{ contentThird }}</span>
          </vuestic-vertical-timeline-item>
        </vuestic-vertical-timeline>
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
    VuesticVerticalTimelineItem
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
  }
}
</script>

<style lang="scss">
.vuestic-timelines {
  &__horizontal-simple {
    width: 100%;
  }
  &__horizontal-cards {
  }
  &__vertical-simple {
    overflow: hidden;
  }
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
  .vuestic-timelines__vertical-label-cards-widget {
    .widget-body {
      padding-right: 1px;
      @media(min-width: 1300px) {
        justify-content: center;
      }
      width: 100%;
      display: inline-flex;
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
