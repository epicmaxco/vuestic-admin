<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-color-picker-input v-model="value" mode="palette"
                             :palette="palette">
        <color-dot :color="value"/>
      </va-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <va-color-picker-input v-model="value" mode="slider">
        <va-color-square :value="value"/>
      </va-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <va-color-picker-input v-model="value" mode="advanced">
        <va-color-input v-model="value"/>
      </va-color-picker-input>
    </div>
    <div class="demo-container__item">
      <va-color-picker-input
        v-model="value"
        mode="palette"
        :palette="palette"
      />
    </div>
  </div>
</template>

<script>
import VaColorPickerInput from './VaColorPickerInput'
import ColorDot from './ColorDot'
import VaColorSquare from './VaColorSquare'
import VaColorInput from './VaColorInput'
import { colorArray } from './VuesticTheme'

export default {
  components: {
    VaColorPickerInput,
    ColorDot,
    VaColorSquare,
    VaColorInput,
  },
  data () {
    return {
      value: '#9b6caa',
      palette: colorArray,
    }
  },
}
</script>
