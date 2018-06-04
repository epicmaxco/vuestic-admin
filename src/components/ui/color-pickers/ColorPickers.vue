<template>
  <div class = "color-pickers-page">
    <div class = "row">
      <div class="col-md-12">
        <vuestic-widget headerText="Color Pickers">
          <div class="row">
            <div class="col-1 col-simple" id="col-simple">
              <label for="col-simple">SIMPLE</label>
            </div>
            <div class="col-1 offset-1 col-slider"></div>
            <div class="col-1 offset-1 col-advanced"></div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class = "row">
      <div class="col-md-12">
        <vuestic-widget headerText="Simple Inline"></vuestic-widget>
      </div>
    </div>
    <div class = "row">
      <div class = "col-md-12">
        <vuestic-widget headerText="Slider">
          <div class="vc-hue-container"></div>
          <div class="vue-slider">
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class = "row">
      <div class = "col-md-12">
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
       vueSlider,
      'photoshop-picker': Photoshop
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
</style>
