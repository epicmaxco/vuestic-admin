<template>
  <div class="row spinners">
    <div class="flex md12 xs12">
      <va-card
        :title="$t('spinners.title')"
        class="spinners__widget"
      >
        <div class="spinners__customization">
          <div class="row">
            <div class="flex xs12 md4">
              <div class="row spinners__size justify--center ma-0">
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
            <div class="flex xs12 md4">
              <div class="row spinners__duration justify--center ma-0">
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
            <div class="flex xs12 md4 spinners__color">
              <va-palette-custom
                :palette="paletteArray"
                v-model="spinnersColor"
                class="spinners__color-picker"
              />
            </div>
          </div>
          <div class="row">
            <div class="spinners__divider-copy"/>
          </div>
        </div>
        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="flex xs6 md3">
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
        <div class="row justify--center align-center">
          <div class="text-center">
            {{ $t('spinners.poweredBy') }}
            <a :href="'http://epic-spinners.epicmax.co/'" target="_blank">Epic
              Spinners
            </a>
          </div>
        </div>
      </va-card>
    </div>
  </div>
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

<style lang="scss">

.spinners {
  @include media-breakpoint-down(xs) {

    &__color-picker {
      .va-color-dropdown__content {
        right: 40px;
      }
    }
  }

  &__size, &__duration {
    // not sure, maybe it's better to include this into @no-wrap mixin?
    flex-wrap: nowrap;
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
