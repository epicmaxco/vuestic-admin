<template>
  <div class="va-row spinners">
    <div class="flex md12 xs12">
      <vuestic-widget :headerText="$t('spinners.title')"
                      class="spinners__widget">
        <div class="spinners__customization">
          <div class="va-row">
            <div class="flex xs12 md3 lg4">
              <div class="va-row spinners__size">
                <h5 class="mt-2 ml-4 mr-3">A</h5>
                <div class="spinners__size-picker pt-3">
                  <va-slider
                    value-visible
                    v-model="config.size"
                    :label-value="`${config.size}px`"
                    :min="sliderSize.min"
                    :max="sliderSize.max"/>
                </div>
                <h3 class="mt-1 ml-3">A</h3>
              </div>
            </div>
            <div class="flex xs12 md3 lg4">
              <div class="va-row spinners__duration ma-0">
                <div class="spinners__icon-duration-slower mt-1 mr-3">
                  <va-icon-slower/>
                </div>
                <div class="spinners__duration-picker pt-3">
                  <va-slider
                    value-visible
                    v-model="currentDuration"
                    :min="sliderDuration.min"
                    :max="sliderDuration.max"
                  />
                </div>
                <div class="spinners__icon-duration-faster mt-1 ml-3">
                  <va-icon-faster/>
                </div>
              </div>
            </div>
            <div class="flex md6 lg4 xs4 spinners__color">
              <vuestic-pallet-custom :palette="paletteArray" v-model="color"
                                     class="spinners__color-picker"/>
            </div>
          </div>
          <div class="va-row">
            <div class="spinners__divider-copy"/>
          </div>
        </div>
        <div v-for="(group, i) in groups" :key="i" class="va-row">
          <div v-for="item in group" :key="item" class="flex xs6 md3">
            <div class="spinner-box-container text--center pb-5">
              <div class="spinner-box flex-center">
                <component
                  :animation-duration="speed"
                  :is="item"
                  :color="color"
                  :size="config.size"
                >
                </component>
              </div>
              <div>{{item | displayName}}</div>
            </div>
          </div>
        </div>
        <div class="va-row justify--center align-center">
          <div class="text-center">
            {{'spinners.poweredBy' | translate}}
            <a :href="'http://epic-spinners.epicmax.co/'" target="_blank">Epic
              Spinners</a>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import * as spinners from 'epic-spinners'
import { mapGetters } from 'vuex'
import VuesticPalletCustom
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticPalletCustom'
import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'
import VaSlider
  from '../../../vuestic-theme/vuestic-components/va-slider/VaSlider'
import VaIconFaster
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconFaster'
import VaIconSlower
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconSlower'

export default {
  components: {
    ...spinners,
    VuesticPalletCustom,
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
      currentDuration: 1500,
      paletteArray: colorArray,
      color: '#4AE387',
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

<style lang="scss">

.spinners {
  @include media-breakpoint-down(xs) {

    &__color-picker {
      .vuestic-color-dropdown__content {
        right: 40px;
      }
    }
  }

  &__size-picker {
    object-fit: contain;
    width: 136px;
  }

  &__duration-picker {
    width: 136px;
  }

  &__divider-copy {
    width: 1700px;
    height: 2px;
    background-color: $light-gray;
  }

  .spinner-box {
    height: 140px;
    flex-direction: column;
  }
}
</style>
