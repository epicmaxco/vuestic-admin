<template>
  <div class="row spinners">
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('spinners.title')" class="spinners__widget">
        <div class="spinners__customization">
          <div class="row">
            <div class="col-md-5">
              <div class="row">
                <img src="https://i.imgur.com/XQ9F56E.png" class="spinners__icon-small" alt="">
                <div class="spinners__size-picker">
                  <vuestic-slider v-model="config.size" :options="sliderSize"/>
                </div>
                <img src="https://i.imgur.com/0hR7ogN.png" alt="">
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <img src="https://i.imgur.com/UFPJDqP.png" class="spinners__icon-duration" alt="">
                <div class="spinners__duration-picker">
                  <vuestic-slider v-model="config.duration" :options="sliderDuration"/>
                </div>
                <img src="https://i.imgur.com/LvhG69I.png" class="spinners__icon-duration" alt="">
              </div>
            </div>
            <div class="col-md-2">
              <vuestic-pallet-custom :palette="paletteArray" v-model="color" class="spinners__color-picker"/>
            </div>
          </div>
          <div class="row">
            <div class="spinners__divider-copy">

            </div>
          </div>
        </div>
        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="col-sm-12 col-md-3">
            <div class="spinner-box-container">
              <div class="spinner-box">
                <component
                  :animation-duration="config.duration"
                  :is="item"
                  :color="color"
                  :size="config.size">
                </component>
              </div>
              <span>{{item | displayName}}</span>
            </div>
          </div>
        </div>
        <div class="row align-center">
          <div class="col text-center">
            {{'spinners.poweredBy' | translate}}
            <a :href="'http://epic-spinners.epicmax.co/'" target="_blank">Epic Spinners</a>
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

export default {
  components: {
    ...spinners,
    VuesticPalletCustom,
    VuesticSlider
  },
  data () {
    return {
      config: {
        size: 80,
        group: 4,
        duration: 1500
      },
      paletteArray: colorArray,
      color: '#4AE387',
      sliderSize: {
        formatter: v => `${v}px`,
        min: 40,
        max: 100
      },
      sliderDuration: {
        min: 1000,
        max: 2000
      }
    }
  },
  computed: {
    ...mapGetters(['palette']),

    groups () {
      return this.groupItems(Object.keys(spinners), this.config.group)
    }
  },
  filters: {
    displayName (name) {
      return name.replace('Spinner', '').match(/[A-Z][a-z]+/g).join(' ')
    }
  },
  methods: {
    groupItems (items, groupSize) {
      let grouped = []

      for (let i = 0; i < items.length; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize))
      }

      return grouped
    }
  }
}
</script>

<style lang="scss" scoped>

.spinners {

  &__customization {

  }

  &__widget {

  }

  &__color-picker {

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
    width: 1377px;
    height: 2px;
    background-color: #eeeeee;
  }

  &__icon-small {
    margin-top: 5px;
    margin-left: 30px;
  }

  &__icon-duration {
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
