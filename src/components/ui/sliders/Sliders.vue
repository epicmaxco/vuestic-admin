<template>
  <div class="sliders">
    <div class="flex md12">
      <va-card :title="$t('sliders.slider')">
        <div class="va-row">
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Simple</div>
            <va-slider
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Value</div>
            <va-slider
              color="danger"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              label="Label"
              color="info"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              label="Label"
              :invert-label="true"
              color="warning"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Label + Icon</div>
            <va-slider
              icon="fa fa-music"
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Label + Icon</div>
            <va-slider
              color="danger"
              icon-right="fa fa-check-circle"
              value-visible
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Pins</div>
            <va-slider
              pins
              :step="20"
              v-model="value"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--warning mb-3">Pins & Value</div>
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
        <div class="va-row">
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Simple</div>
            <va-slider
              range
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Value</div>
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
              label="Label"
              color="info"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
            <va-slider
              range
              label="Label"
              :invert-label="true"
              color="warning"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Label + Icon</div>
            <va-slider
              range
              icon="fa fa-music"
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--danger mb-3">Label + Icon</div>
            <va-slider
              range
              color="danger"
              icon-right="fa fa-check-circle"
              value-visible
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title mb-3">Pins</div>
            <va-slider
              range
              pins
              :step="20"
              v-model="value2"
            />
          </div>
          <div class="flex xs12 lg6 xl4 mb-2">
            <div class="title title--warning mb-3">Pins & Value</div>
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
