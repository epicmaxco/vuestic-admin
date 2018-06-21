<template>
  <div class="color-pickers-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Color Pickers">
          <div class="row">
            <div class="col-md-2">
              <span class="text-uppercase simple">simple</span>
            </div>
            <div class="col-md-2">
              <span class="text-uppercase slider offset-1">slider</span>
            </div>
            <div class="col-md-2">
              <span class="text-uppercase advanced offset-1">advanced</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <colored-square :value="'#f81953'"></colored-square>
            </div>
            <div class="col-md-2">
              <colored-square class="offset-1"
                              :value="'#22194c'"></colored-square>
            </div>
            <div class="col-md-2">
              <colored-square class="offset-1"
                              :value="'#ffd50a'"></colored-square>
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
            <div class="col-md-4">
              <vuestic-simple-color-picker v-model="simpleColor"/>
            </div>
            <div class="col-md-2">
              <vuestic-color-input v-model="simpleColor" style="padding-right: 30px; padding-top: 14px"></vuestic-color-input>
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
  import VuesticSimpleColorPicker
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticSimpleColorPicker'
  import ColoredSquare
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/ColoredSquare'
  import VuesticSliderColorPicker
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticSliderColorPicker'
  import VuesticAdvancedColorPicker
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticAdvancedColorPicker'
  import VuesticColorInput
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticColorInput'

  export default {
    name: 'ColorPickers',
    components: {
      VuesticColorInput,
      VuesticAdvancedColorPicker,
      VuesticSliderColorPicker,
      ColoredSquare,
      VuesticSimpleColorPicker
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

<style scoped>
  .simple {
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

  .slider {
    width: 45px;
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

  .advanced {
    width: 45px;
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
