<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      <va-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      {{ value }}
    </div>
  </div>
</template>

<script>
import VaSimplePalettePicker from './VaSimplePalettePicker'
import { colorArray } from './VuesticTheme'
import VaPaletteCustom from './VaPaletteCustom'

export default {
  components: {
    VaSimplePalettePicker,
    VaPaletteCustom,
  },
  data () {
    return {
      value: '#AAA',
      palette: colorArray,
    }
  },
}
</script>
