<template>
  <div class="color-pickers-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('menu.colorPickers')">
          <div class="row">
            <div class="col-md-2 color-pickers-text">
              <span
                class="text-uppercase color-pickers-text">simple</span>
            </div>
            <div class="col-md-2">
              <span
                class="text-uppercase color-pickers-text offset-1">slider</span>
            </div>
            <div class="col-md-2">
              <span
                class="text-uppercase color-pickers-text offset-1">advanced</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <colored-square :value="simpleColor"/>
            </div>
            <div class="col-md-2">
              <colored-square class="offset-1"
                              :value="sliderColor"/>
            </div>
            <div class="col-md-2">
              <colored-square class="offset-1"
                              :value="advancedColor"/>
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
              <colored-square :value="simpleColor"/>
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
              <colored-square :value="sliderColor"/>
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
              <colored-square :value="advancedColor"/>
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
  import ColoredSquare
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/ColoredSquare'
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
      ColoredSquare,
      VuesticSimplePalettePicker
    },
    data () {
      return {
        sliderColor: '#34495e',
        advancedColor: '#ffd50a',
        simpleColor: '#f81953'
      }
    },
  }
</script>

<style lang="scss">
  .color-pickers-text {
    width: 46px;
    height: 24px;
    font-family: SourceSansPro;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: left;
    color: #4ae387;
  }
</style>
