<template>
  <div class="color-pickers vuestic-color-picker-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card :title="$t('menu.colorPickers')">
          <div class="va-row">
            <div class="flex md2">
              <span class="title">simple</span>
            </div>
            <div class="flex md2">
              <span class="title">slider</span>
            </div>
            <div class="flex md2">
              <span class="title">advanced</span>
            </div>
          </div>
          <div class="va-row">
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <va-color-picker-input
                  mode="palette"
                  v-model="topSimpleSquareColor"
                  :palette="palette"
                >
                  <va-color-square :value="topSimpleSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <va-color-picker-input
                  mode="slider"
                  v-model="topSliderSquareColor"
                >
                  <va-color-square :value="topSliderSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="vuestic-color-picker-page__top-square">
                <va-color-picker-input
                  mode="advanced"
                  v-model="topAdvancedSquareColor"
                >
                  <va-color-square :value="topAdvancedSquareColor"/>
                </va-color-picker-input>
              </div>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card title="Simple Inline">
          <div class="va-row">
            <div class="flex md1">
              <va-color-square :value="simpleColor"/>
            </div>
            <div class="flex md2">
              <va-pallet-custom :palette="palette" v-model="simpleColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card title="Slider">
          <div class="va-row">
            <div class="flex md1">
              <va-color-square :value="sliderColor"/>
            </div>
            <div class="flex md6 xs12">
              <va-slider-color-picker v-model="sliderColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card title="Advanced">
          <div class="va-row">
            <div class="flex md1">
              <va-color-square :value="advancedColor"/>
            </div>
            <div class="flex md7">
              <va-advanced-color-picker v-model="advancedColor"/>
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>

</template>

<script>

import VaSimplePalettePicker
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaSimplePalettePicker'
import VaColorSquare
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaColorSquare'
import VaSliderColorPicker
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaSliderColorPicker'
import VuesticAdvancedColorPicker
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaAdvancedColorPicker'
import VaColorInput
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaColorInput'
import VaColorPickerInput
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaColorPickerInput'
import { colorArray } from '../../../vuestic-theme/vuestic-components/va-color-picker/VuesticTheme'
import VaPalletCustom
  from '../../../vuestic-theme/vuestic-components/va-color-picker/VaPalletCustom'

export default {
  name: 'color-pickers',
  components: {
    VaColorInput,
    VuesticAdvancedColorPicker,
    VaSliderColorPicker,
    VaColorSquare,
    VaSimplePalettePicker,
    VaColorPickerInput,
    VaPalletCustom,
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
