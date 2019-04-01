<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-slider-color-picker v-model="value"/>
      <va-slider-color-picker v-model="value" style="padding-top: 20px"/>
      {{value}}
    </div>
  </div>
</template>

<script>

import VaSliderColorPicker from './VaSliderColorPicker'

export default {
  components: {
    VaSliderColorPicker,
  },
  data () {
    return {
      value: '#34495e',
    }
  },
}
</script>
