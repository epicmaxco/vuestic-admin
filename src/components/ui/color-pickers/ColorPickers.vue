<template>
  <div class="color-pickers-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Color Pickers">
          <span class="text-uppercase simple">simple</span>
          <span class="text-uppercase slider">slider</span>
          <span class="text-uppercase advanced">advanced</span>
          <div class="row">
            <div class="col-simple">
            </div>
            <div class="col-slider offset-1"></div>
            <div class="col-advanced offset-1"></div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Simple Inline">
          <photoshop-picker />
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Slider">
          <div class="vc-hue-container"></div>
          <div class="vue-slider">
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget headerText="Advanced"></vuestic-widget>
      </div>
    </div>
  </div>

</template>

<script>
  import { Photoshop } from 'vue-color'
// import VuesticWidget from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'

export default {
    name: 'ColorPickers',
    components: {
      Photoshop
      // 'color-picker': ColorPicker,
      // 'material-picker': material,
    }
  }
</script>

<style scoped>

  .col-simple {
    width: 48px;
    height: 48px;
    background-color: #f81953;
  }

  .col-slider {
    width: 48px;
    height: 48px;
    background-color: #22194c;
  }

  .col-advanced {
    width: 48px;
    height: 48px;
    background-color: #ffd50a;
  }

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
    padding-left: 45px;
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
    padding-left: 78px;
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
