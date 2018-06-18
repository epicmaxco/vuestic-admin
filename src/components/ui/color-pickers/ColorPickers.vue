<template>
  <div class="color-pickers-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Color Pickers" style="padding-left: 30px">
          <span class="text-uppercase simple">simple</span>
          <span class="text-uppercase slider">slider</span>
          <span class="text-uppercase advanced">advanced</span>
          <div class="row" v-model="colors">
            <colored-square :color="'#f81953'"></colored-square>
            <colored-square class="offset-1"
                            :color="'#22194c'"></colored-square>
            <colored-square class="offset-1"
                            :color="'#ffd50a'"></colored-square>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Simple Inline">
          <div class="row">
            <div class="col-md-1">
              <colored-square :color="'#f81953'"/>
            </div>
            <div class="col-md-6">
              <vuestic-color-picker/>
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
              <colored-square :color="'#22194c'"/>
            </div>
            <div class="col-md-6">
              <slider-picker v-model="colors"/>
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
              <colored-square :color="'#ffd50a'"/>
            </div>
            <div class="col-md-1">
              <chrome-picker v-model="colors"/>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    Photoshop,
    Chrome,
    Compact,
    Slider,
    Grayscale,
    Material,
    Sketch,
    Swatches
  } from 'vue-color'
  import VuesticColorPicker
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticColorPicker'
  import VuesticAlert
    from '../../../vuestic-theme/vuestic-components/vuestic-alert/VuesticAlert'
  import ColoredSquare
    from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/ColoredSquare'
  // import VuesticWidget from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
  export default {
    name: 'ColorPickers',
    components: {
      ColoredSquare,
      VuesticAlert,
      VuesticColorPicker,
      'photoshop-picker': Photoshop,
      'chrome-picker': Chrome,
      'compact-picker': Compact,
      'slider-picker': Slider,
      'grayscale-picker': Grayscale,
      'material-picker': Material,
      'sketch-picker': Sketch,
      'swatches-picker': Swatches
      // 'material-picker': material,
    },
    data () {
      return {
        colors: {
          h: 50,
          s: 0.5,
          l: 0.2
        }
      }
    },
  }
</script>

<style scoped>
  .simple {
    padding-right: 15px;
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
    padding-left: 90px;
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
    padding-left: 108px;
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
