<template>
  <div class="color-pickers-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('menu.colorPickers')">
          <div class="row">
            <div class="col-md-2 color-pickers-text">
              <span class="text-uppercase">simple</span>
            </div>
            <div class="col-md-2">
              <span class="text-uppercase offset-1">slider</span>
            </div>
            <div class="col-md-2">
              <span class="text-uppercase offset-1">advanced</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <vuestic-color-square :color="simpleColor"/>
            </div>
            <div class="col-md-2">
              <vuestic-color-square
                class="offset-1"
                :color="sliderColor"
              />
            </div>
            <div class="col-md-2">
              <vuestic-color-square
                class="offset-1"
                :color="advancedColor"
              />
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Simple Inline">
          <div class="row">
            <div class="col-md-1">
              <vuestic-color-square :color="simpleColor"/>
            </div>
            <div class="col-md-2">
              <vuestic-simple-palette-picker
                :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
                v-model="simpleColor"/>
            </div>
            <div class="col-md-2">
              <vuestic-color-input v-model="simpleColor"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Slider">
          <div class="row">
            <div class="col-md-1">
              <vuestic-color-square :color="sliderColor"/>
            </div>
            <div class="col-md-6">
              <vuestic-slider-color-picker v-model="sliderColor"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Advanced">
          <div class="row">
            <div class="col-md-1">
              <vuestic-color-square :color="advancedColor"/>
            </div>
            <div class="col-md-1">
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

export default {
  name: 'color-pickers',
  components: {
    VuesticColorInput,
    VuesticAdvancedColorPicker,
    VuesticSliderColorPicker,
    VuesticColorSquare,
    VuesticSimplePalettePicker,
  },
  data () {
    return {
      sliderColor: '#34495e',
      advancedColor: '#ffd50a',
      simpleColor: '#f81953',
    }
  },
}
</script>
