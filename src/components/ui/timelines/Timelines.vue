<template>
  <div class="timelines">
    <va-card
      :title="$t('timelines.horizontalSimple')"
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
    </va-card>

    <va-card class="timelines__horizontal-long"
             :title="$t('timelines.horizontalCards')">
      <vuestic-timeline class="timelines__horizontal-long__timeline">
        <vuestic-timeline-item active>
          <va-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateFirst }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
        <vuestic-timeline-item active>
          <va-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateSecond }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
        <vuestic-timeline-item>
          <va-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateThird }}</template>
            {{ contentThird }}
          </va-card>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </va-card>

    <va-card :title="$t('timelines.verticalSimple')">
      <div class="va-row">
        <div class="xs12 md6 flex">
          <vuestic-timeline vertical>
            <vuestic-timeline-item active>
              <va-card
                slot="after"
              >
                <template slot="title">{{ dateFirst }}</template>
                {{ contentFirst }}
              </va-card>
            </vuestic-timeline-item>
            <vuestic-timeline-item>
              <va-card
                slot="after"
              >
                <template slot="title">{{ dateSecond }}</template>
                {{ contentFirst }}
              </va-card>
            </vuestic-timeline-item>
          </vuestic-timeline>
        </div>
        <div class="xs12 md6 flex">
          <vuestic-timeline vertical>
            <vuestic-timeline-item active>
              <va-card
                theme="dark"
                slot="after"
              >
                <template slot="title">{{ dateFirst }}</template>
                {{ contentFirst }}
              </va-card>
            </vuestic-timeline-item>
            <vuestic-timeline-item>
              <va-card
                theme="dark"
                slot="after"
              >
                <template slot="title">{{ dateSecond }}</template>
                {{ contentFirst }}
              </va-card>
            </vuestic-timeline-item>
          </vuestic-timeline>
        </div>
      </div>
    </va-card>

    <va-card :title="$t('timelines.verticalLabel')">
      <vuestic-timeline vertical>
        <vuestic-timeline-item active>
          <span class="vuestic-timeline-item__text" slot="before">{{ dateFirst }}</span>
          <va-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ titleFirst }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
        <vuestic-timeline-item>
          <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <va-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </va-card>

    <va-card :title="$t('timelines.verticalCentered')">
      <vuestic-timeline vertical centered>
        <vuestic-timeline-item active>
          <span class="vuestic-timeline-item__text" slot="before">{{ dateFirst }}</span>
          <va-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleFirst }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
        <vuestic-timeline-item>
          <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <va-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
        <vuestic-timeline-item>
          <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <va-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </va-card>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </va-card>

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
