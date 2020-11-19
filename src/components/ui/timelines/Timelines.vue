<template>
  <div class="timelines">
    <div class="row">
      <div class="flex xs12">
        <va-card
          no-padding-h
          style="overflow-x: auto;"
        >
          <va-card-title>{{ $t('timelines.horizontalSimple') }}</va-card-title>
          <va-card-content>
            <va-timeline style="min-width: 400px;">
              <va-timeline-item active>
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    February 2018
                  </div>
                  <div class="va-timeline-item__description">
                    Complete drafts
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    April 2018
                  </div>
                  <div class="va-timeline-item__description">
                    Push site live
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template slot="before">
                  <div class="title title--gray text--center">
                    June 2018
                  </div>
                  <div class="va-timeline-item__description">
                    Start ICO
                  </div>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card
          no-padding-h
          style="overflow-x: auto;"
          class="timelines__horizontal-long"
        >
          <va-card-title>{{ $t('timelines.horizontalCards') }}</va-card-title>
          <va-card-content>
            <va-timeline align-top style="min-width: 600px;" class="timelines__horizontal-long__timeline">
              <va-timeline-item active>
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    February 2018
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="warning"
                  class="mb-0"
                >
                  <va-card-title>{{ dateFirst }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item active>
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    April 2018
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="info"
                  class="mb-0"
                >
                  <va-card-title>{{ dateSecond }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item>
                <template slot="before">
                  <div class="title title--gray text--center">
                    June 2018
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="info"
                  class="mb-0"
                >
                  <va-card-title>{{ dateThird }}</va-card-title>
                  <va-card-content>{{ contentThird }}</va-card-content>
                </va-card>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card no-padding-v>
          <va-card-title>{{ $t('timelines.verticalLabel') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical>
              <va-timeline-item active>
                <span
                  slot="before"
                  class="title va-timeline-item__text"
                  :style="{color: $themes.primary}"
                >
                  Feb 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                  class="mb-0"
                >
                  <va-card-title>{{ titleFirst }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item active>
                <span
                  slot="before"
                  class="title va-timeline-item__text"
                  :style="{color: $themes.primary}"
                >
                  Apr 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                  class="mb-0"
                >
                  <va-card-title>{{ titleSecond }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item>
                <span class="title title--gray va-timeline-item__text" slot="before">
                  Jun 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                >
                  <va-card-title>{{ titleThird }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card no-padding-v>
          <va-card-title>{{ $t('timelines.verticalCentered') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical centered style="min-width: 300px;">
              <va-timeline-item color="danger" active>
                <span
                  slot="before"
                  class="title title--danger va-timeline-item__text"
                  :style="{color: $themes.danger}"
                >
                  February 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                  class="mb-0"
                >
                  <va-card-title>{{ titleFirst }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <span
                  slot="before"
                  class="title title--danger va-timeline-item__text"
                  :style="{color: $themes.danger}"
                >
                  April 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                >
                  <va-card-title>{{ titleSecond }}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <span
                  slot="before"
                  class="title title--danger va-timeline-item__text"
                  :style="{color: $themes.danger}"
                >
                  June 2018
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                  class="mb-0"
                >
                  <va-card-title>{{ titleThird}}</va-card-title>
                  <va-card-content>{{ contentFirst }}</va-card-content>
                </va-card>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'timelines',
  data () {
    return {
      dateFirst: '',
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
