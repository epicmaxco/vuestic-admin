<template>
<va-card :title="$t('spinners.title')">
  <div class="row align--center">
    <div class="d-flex flex sm12 md3 lg3 xl4">
      <span class="shrink pr-2">A</span>
      <va-slider
        value-visible
        v-model="config.size"
        :label-value="`${config.size}px`"
        :min="sliderSize.min"
        :max="sliderSize.max"
      />
      <span class="shrink pl-2">A</span>
    </div>

    <div class="d-flex flex sm12 md3 lg3 xl4">
      <div class="spinners__icon-duration-slower">
        <va-icon-slower/>
      </div>
      <div class="spinners__duration-picker">
        <va-slider
          value-visible
          v-model="currentDuration"
          :min="sliderDuration.min"
          :max="sliderDuration.max"
        />
      </div>
      <div class="spinners__icon-duration-faster">
        <va-icon-faster/>
      </div>
    </div>

    <div class="d-flex flex sm12 md6 lg6 xl4">
      <va-palette-custom
        :palette="paletteArray"
        v-model="spinnersColor"
        class="spinners__color-picker"
      />
    </div>
  </div>

  <hr>

  <div
    v-for="(group, i) in groups"
    :key="i"
    class="row"
  >
    <div
      v-for="item in group"
      :key="item"
      class="flex xs6 md3"
    >
      <div class="spinner-box-container text--center pb-5">
        <div class="spinner-box flex-center">
          <component
            :animation-duration="speed"
            :is="item"
            :color="spinnersColor"
            :size="config.size"
          >
          </component>
        </div>
        <div>{{ $t(item) }}</div>
      </div>
    </div>
  </div>
</va-card>
</template>

<script>
import * as spinners from 'epic-spinners'
import { mapGetters } from 'vuex'
import VaPaletteCustom
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaPaletteCustom'
import VaSlider
  from '../../../vuestic-theme/vuestic-components/va-slider/VaSlider'
import VaIconFaster
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFaster'
import VaIconSlower
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconSlower'

export default {
  components: {
    ...spinners,
    VaPaletteCustom,
    VaSlider,
    VaIconFaster,
    VaIconSlower,
  },
  data () {
    return {
      config: {
        size: 80,
        group: 4,
        duration: 1500,
      },
      spinnersColor: this.$themes.primary,
      currentDuration: 1500,
      sliderSize: {
        formatter: v => `${v}px`,
        min: 40,
        max: 100,
      },
      sliderDuration: {
        min: 1000,
        max: 2000,
      },
    }
  },
  computed: {
    ...mapGetters(['palette']),

    speed () {
      return this.sliderDuration.min + this.sliderDuration.max - this.currentDuration
    },

    groups () {
      return this.groupItems(Object.keys(spinners), this.config.group)
    },

    paletteArray () {
      return Object.values(this.$themes)
    },
  },

  filters: {
    displayName (name) {
      return name.replace('Spinner', '').match(/[A-Z][a-z]+/g).join(' ')
    },
  },
  methods: {
    groupItems (items, groupSize) {
      let grouped = []

      for (let i = 0; i < items.length; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize))
      }

      return grouped
    },
  },
}
</script>
