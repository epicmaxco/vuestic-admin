<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="palette"
                                  :palette="palette">
        <color-dot :color="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="slider">
        <vuestic-color-square :value="value"/>
      </vuestic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="advanced">
        <vuestic-color-input v-model="value"/>
      </vuestic-color-picker-input>
    </div>
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="palette"
                                  :palette="palette"/>
    </div>
  </div>
</template>

<script>
import VuesticColorPickerInput from './VuesticColorPickerInput'
import ColorDot from './ColorDot'
import VuesticColorSquare from './VuesticColorSquare'
import VuesticColorInput from './VuesticColorInput'
import { colorArray } from './VuesticTheme'

export default {
  components: {
    VuesticColorPickerInput,
    ColorDot,
    VuesticColorSquare,
    VuesticColorInput,
  },
  data () {
    return {
      value: '#9b6caa',
      palette: colorArray,
    }
  },
}
</script>
