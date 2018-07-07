<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      <vuestic-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      {{ value }}
    </div>
  </div>
</template>

<script>
import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'
import {colorArray} from './VuesticTheme'

export default {
  components: {
    VuesticSimplePalettePicker,
  },
  data () {
    return {
      value: '#AAA',
      palette: colorArray
    }
  }
}
</script>
