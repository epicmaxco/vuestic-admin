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
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    {{ $t('timelines.firstDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('timelines.horizontalActionFirst') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    {{ $t('timelines.secondDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('timelines.horizontalActionSecond') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template v-slot:before>
                  <div class="title title--gray text--center">
                    {{ $t('timelines.thirdDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ $t('timelines.horizontalActionThird') }}
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
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    {{ $t('timelines.firstDate') }}
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="warning"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleDateFirst') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentFirst') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item active>
                <template v-slot:before>
                  <div
                    class="title text--center"
                    :style="{color: $themes.primary}"
                  >
                    {{ $t('timelines.secondDate') }}
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="info"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleDateSecond') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentSecond') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item>
                <template v-slot:before>
                  <div class="title title--gray text--center">
                    {{ $t('timelines.thirdDate') }}
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="info"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleDateThird') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentThird') }}</va-card-content>
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
                  {{ $t('timelines.firstDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleFirst') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentFirst') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item active>
                <span
                  slot="before"
                  class="title va-timeline-item__text"
                  :style="{color: $themes.primary}"
                >
                  {{ $t('timelines.secondDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleSecond') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentSecond') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item>
                <span class="title title--gray va-timeline-item__text" slot="before">
                  {{ $t('timelines.thirdDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="success"
                >
                  <va-card-title>{{ $t('timelines.titleThird') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentThird') }}</va-card-content>
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
                  {{ $t('timelines.firstDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleFirst') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentFirst') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <span
                  slot="before"
                  class="title title--danger va-timeline-item__text"
                  :style="{color: $themes.danger}"
                >
                  {{ $t('timelines.secondDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                >
                  <va-card-title>{{ $t('timelines.titleSecond') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentSecond') }}</va-card-content>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <span
                  slot="before"
                  class="title title--danger va-timeline-item__text"
                  :style="{color: $themes.danger}"
                >
                  {{ $t('timelines.thirdDate') }}
                </span>
                <va-card
                  slot="after"
                  stripe
                  stripe-color="danger"
                  class="mb-0"
                >
                  <va-card-title>{{ $t('timelines.titleThird') }}</va-card-title>
                  <va-card-content>{{ $t('timelines.contentThird') }}</va-card-content>
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
    return {}
  },
}
</script>
