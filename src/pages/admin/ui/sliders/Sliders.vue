<template>
  <div class="sliders">
    <div class="row">
      <div class="flex md12">
        <va-card>
          <va-card-title>{{ $t('sliders.slider') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: theme.primary}"
              >{{$t('sliders.simple')}}</div>
              <va-slider
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: theme.danger}"
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
                :style="{color: theme.primary}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                icon="music"
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: theme.danger}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                color="danger"
                icon-right="check_circle"
                value-visible
                v-model="value"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: theme.primary}"
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
                :style="{color: theme.warning}"
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
                icon="volume_off"
                icon-right="volume_up"
                v-model="value"
              />
            </div>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md12">
        <va-card>
          <va-card-title>{{ $t('sliders.range') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: theme.primary}"
              >{{$t('sliders.simple')}}</div>
              <va-slider
                range
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: theme.danger}"
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
                :style="{color: theme.primary}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                range
                icon="music"
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title title--danger mb-3"
                :style="{color: theme.danger}"
              >{{$t('sliders.labelPlusIcon')}}</div>
              <va-slider
                range
                color="danger"
                icon-right="check_circle"
                value-visible
                v-model="value2"
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div
                class="title mb-3"
                :style="{color: theme.primary}"
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
                :style="{color: theme.warning}"
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
                icon="volume_off"
                icon-right="volume_up"
                v-model="value2"
              />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'sliders',
  data () {
    return {
      value: 90,
      value2: [20, 60],
    }
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    }
  }
}
</script>
