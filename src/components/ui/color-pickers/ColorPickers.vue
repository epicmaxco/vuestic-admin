<template>
  <div class="vuestic-color-picker-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget :headerText="$t('menu.colorPickers')">
          <div class="va-row">
            <div class="flex md2">
              <span class="text-uppercase vuestic-color-picker-page__text">simple</span>
            </div>
            <div class="flex md2">
              <span class="text-uppercase vuestic-color-picker-page__text">slider</span>
            </div>
            <div class="flex md2 vuestic-color-picker-page__text-advanced">
              <span class="text-uppercase vuestic-color-picker-page__text">advanced</span>
            </div>
          </div>
          <div class="va-row">
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <vuestic-color-picker-input mode="palette"
                                            v-model="topSimpleSquareColor"
                                            :palette="palette">
                  <vuestic-color-square :value="topSimpleSquareColor"/>
                </vuestic-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <vuestic-color-picker-input mode="slider"
                                            v-model="topSliderSquareColor">
                  <vuestic-color-square :value="topSliderSquareColor"/>
                </vuestic-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <vuestic-color-picker-input mode="advanced"
                                            v-model="topAdvancedSquareColor">
                  <vuestic-color-square :value="topAdvancedSquareColor"/>
                </vuestic-color-picker-input>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget headerText="Simple Inline">
          <div class="va-row">
            <div class="flex md1">
              <vuestic-color-square :value="simpleColor"/>
            </div>
            <div class="flex md2">
              <vuestic-pallet-custom :palette="palette" v-model="simpleColor"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget headerText="Slider">
          <div class="va-row">
            <div class="flex md1">
              <vuestic-color-square :value="sliderColor"/>
            </div>
            <div class="flex md6 xs12">
              <vuestic-slider-color-picker v-model="sliderColor"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget headerText="Advanced">
          <div class="va-row">
            <div class="flex md1">
              <vuestic-color-square :value="advancedColor"/>
            </div>
            <div class="flex md7">
              <vuestic-advanced-color-picker v-model="advancedColor"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>

</template>

<script>

import VuesticSimplePalettePicker
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticSimplePalettePicker'
import VuesticColorSquare
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticColorSquare'
import VuesticSliderColorPicker
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticSliderColorPicker'
import VuesticAdvancedColorPicker
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticAdvancedColorPicker'
import VuesticColorInput
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticColorInput'
import VuesticColorPickerInput
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticColorPickerInput'
import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'
import VuesticPalletCustom
  from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticPalletCustom'

export default {
  name: 'color-pickers',
  components: {
    VuesticColorInput,
    VuesticAdvancedColorPicker,
    VuesticSliderColorPicker,
    VuesticColorSquare,
    VuesticSimplePalettePicker,
    VuesticColorPickerInput,
    VuesticPalletCustom,
  },
  data () {
    return {
      topSimpleSquareColor: '#f81953',
      topSliderSquareColor: '#34495e',
      topAdvancedSquareColor: '#ffd50a',
      sliderColor: '#2e5e2a',
      advancedColor: '#ffd50a',
      simpleColor: '#f81953',
      palette: colorArray,
    }
  },
}
</script>

<style lang="scss">
.vuestic-color-picker-page {
  &__top-square {
    max-width: 48px;
  }

  &__text {
    color: $vue-green;
  }

  &__text-advanced {
    padding-left: 5px;
  }
}
</style>
