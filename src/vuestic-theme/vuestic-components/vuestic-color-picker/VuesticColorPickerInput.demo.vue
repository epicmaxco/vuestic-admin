<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <label class="control-label" for="palette">Palette mode</label>
      <vuestic-color-picker-input v-model="value" mode="palette" id="palette">
        <color-dot :color="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <label class="control-label" for="slider">Slider mode</label>
      <vuestic-color-picker-input v-model="value" mode="slider" id="slider">
        <vuestic-color-square :color="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <label class="control-label" for="advanced">Advanced mode</label>
      <vuestic-color-picker-input v-model="value" mode="advanced" id="advanced">
        <vuestic-color-input v-model="value"/>
      </vuestic-color-picker-input>
    </div>
  </div>
</template>

<script>
import VuesticColorPickerInput from './VuesticColorPickerInput'
import ColorDot from './ColorDot'
import VuesticColorSquare from './VuesticColorSquare'
import VuesticColorInput from './VuesticColorInput'
export default {
  components: {
    VuesticColorPickerInput,
    ColorDot,
    VuesticColorSquare,
    VuesticColorInput
  },
  data () {
    return {
      value: '#9b6caa'
    }
  }
}
</script>
