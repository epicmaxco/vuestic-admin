<template>
  <div class="sliders">
    <div class="row">
      <div class="flex md12">
        <va-card :title="$t('sliders.slider')">
          <div class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.simple')}}</div>
              <va-slider
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: this.$themes.danger}"
              >{{$t('sliders.value')}}</div>
              <va-slider
                color="danger"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
              <va-slider
                :label="$t('sliders.label')"
                color="info"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
              <va-slider
                :label="$t('sliders.label')"
                :invert-label="true"
                color="warning"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                icon="fa fa-music"
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: this.$themes.danger}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                color="danger"
                icon-right="fa fa-check-circle"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.pins')}}</div>
              <va-slider
                pins
                :step="20"
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--warning mb-3"
                :style="{color: this.$themes.warning}"
              >{{$t('sliders.pinsAndValue')}}</div>
              <va-slider
                pins
                :step="10"
                color="warning"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <va-slider
                value-visible
                v-model="value"
                with-input
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <va-slider
                color="info"
                icon="fa fa-volume-off"
                icon-right="fa fa-volume-up"
                v-model="value"
              />
            </div>
          </div>
        </va-card>
      </div>
      <div class="flex md12">
        <va-card :title="$t('sliders.range')">
          <div class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.simple')}}</div>
              <va-slider
                range
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: this.$themes.danger}"
              >{{$t('sliders.value')}}</div>
              <va-slider
                range
                color="danger"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
              <va-slider
                range
                :label="$t('sliders.label')"
                color="info"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
              <va-slider
                range
                :label="$t('sliders.label')"
                :invert-label="true"
                color="warning"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                range
                icon="fa fa-music"
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: this.$themes.danger}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                range
                color="danger"
                icon-right="fa fa-check-circle"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: this.$themes.primary}"
              >{{$t('sliders.pins')}}</div>
              <va-slider
                range
                pins
                :step="20"
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--warning mb-3"
                :style="{color: this.$themes.warning}"
              >{{$t('sliders.pinsAndValue')}}</div>
              <va-slider
                range
                pins
                :step="10"
                color="warning"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <va-slider
                range
                v-model="value2"
                with-input
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <va-slider
                range
                color="info"
                icon="fa fa-volume-off"
                icon-right="fa fa-volume-up"
                v-model="value2"
              />
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sliders',
  data () {
    return {
      value: 90,
      value2: [20, 60],
    }
  },
}
</script>
