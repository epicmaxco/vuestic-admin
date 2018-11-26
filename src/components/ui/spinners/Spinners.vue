<template>
  <div class="va-row spinners">
    <div class="flex md12 xs12">
      <vuestic-widget :headerText="$t('spinners.title')"
                      class="spinners__widget">
        <div class="spinners__customization">
          <div class="va-row">
            <div class="flex md3 lg4">
              <div class="row spinners__size">
                <h5 class="spinners__icon-small">A</h5>
                <div class="spinners__size-picker">
                  <vuestic-slider v-model="config.size" :options="sliderSize"/>
                </div>
                <h3 class="spinners__icon-large">A</h3>
              </div>
            </div>
            <div class="flex md3 lg4">
              <div class="va-row spinners__duration">
                <div class="spinners__icon-duration-slower">
                  <vuestic-icon-slower/>
                </div>
                <div class="spinners__duration-picker">
                  <vuestic-slider v-model="currentDuration"
                                  :options="sliderDuration"/>
                </div>
                <div class="spinners__icon-duration-faster">
                  <vuestic-icon-faster/>
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
          <div v-for="item in group" :key="item" class="flex sm12 md3">
            <div class="spinner-box-container">
              <div class="spinner-box">
                <component
                  :animation-duration="speed"
                  :is="item"
                  :color="color"
                  :size="config.size"
                >
                </component>
              </div>
              <span>{{item | displayName}}</span>
            </div>
          </div>
        </div>
        <div class="va-row align-center">
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
import VuesticSlider
  from '../../../vuestic-theme/vuestic-components/vuestic-slider/VuesticSlider'
import VuesticIconFaster
  from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconFaster'
import VuesticIconSlower
  from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconSlower'

export default {
  components: {
    ...spinners,
    VuesticPalletCustom,
    VuesticSlider,
    VuesticIconFaster,
    VuesticIconSlower,
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
    &__duration-picker {
      margin-top: 30px;
    }

    & &__icon-small {
      margin-left: 0;
    }

    &__duration {
      margin: 0;
      justify-content: center;
    }

    &__size {
      justify-content: center;
    }

    & &__icon-duration-faster {
      margin-top: 33px;
    }

    & &__icon-duration-slower {
      margin-top: 33px;
    }

    &__color {
      justify-content: center;
      margin-left: 12px;
    }

    &__color-picker {
      margin-top: 50px;
      padding-left: 15px;
      .vuestic-dropdown__content {
        right: 40px;
      }
    }
  }

  &__size-picker {
    padding-top: 10px;
    object-fit: contain;
    width: 136px;
  }

  &__duration-picker {
    width: 136px;
    padding-top: 10px;
  }

  &__divider-copy {
    width: 1700px;
    height: 2px;
    background-color: #eeeeee;
  }

  &__icon-small {
    margin-top: 7px;
    margin-left: 30px;
  }

  &__icon-large {
    margin-top: 2px;
  }

  &__icon-duration-faster {
    margin-top: 5px;
  }

  &__icon-duration-slower {
    margin-top: 5px;
  }

  .spinner-box-container {
    text-align: center;
    padding-bottom: 40px;

    span {
      font-size: .8rem;
    }
  }

  .spinner-box {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
