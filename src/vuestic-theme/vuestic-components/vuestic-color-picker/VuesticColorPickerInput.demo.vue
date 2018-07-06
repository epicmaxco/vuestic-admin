<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="palette">
        <color-dot :color="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="slider">
        <vuestic-color-square :color="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="advanced">
        <vuestic-color-input :value="value"/>
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
      value: '#AAA'
    }
  }
}
</script>
