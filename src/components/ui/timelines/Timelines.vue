<template>
  <div class="timelines">
    <vuestic-widget
      class="no-h-padding no-v-padding"
      :headerText="$t('timelines.horizontalSimple')"
    >
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

    <vuestic-widget class="no-h-padding no-v-padding timelines__horizontal-long"
                    :headerText="$t('timelines.horizontalCards')">
      <vuestic-timeline class="timelines__horizontal-long__timeline">
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

    <vuestic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalSimple')">
      <div class="va-row">
        <div class="xs12 md6 flex">
          <vuestic-timeline vertical>
            <vuestic-timeline-item active>
              <vuestic-card
                slot="after"
              >
                <template slot="title">{{ dateFirst }}</template>
                {{ contentFirst }}
              </vuestic-card>
            </vuestic-timeline-item>
            <vuestic-timeline-item>
              <vuestic-card
                slot="after"
              >
                <template slot="title">{{ dateSecond }}</template>
                {{ contentFirst }}
              </vuestic-card>
            </vuestic-timeline-item>
          </vuestic-timeline>
        </div>
        <div class="xs12 md6 flex">
          <vuestic-timeline vertical>
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
        </div>
      </div>
    </vuestic-widget>

    <vuestic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalLabel')">
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

    <vuestic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalCentered')">
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
</template>

<script>

export default {
  name: 'timelines',
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
.timelines {
  &__horizontal-long {
    .widget-body {
      overflow-x: auto;
    }

    &__timeline {
      min-width: 800px;
    }
  }
}
</style>
