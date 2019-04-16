<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-palette-custom :palette="palette" v-model="color"/>
    </div>
    <div class="demo-container__item">
      <va-palette-custom :palette="palette" v-model="color"/>
    </div>
  </div>
</template>

<script>
import { colorArray } from './VuesticTheme'

import VaPaletteCustom from './VaPaletteCustom'

export default {
  components: {
    VaPaletteCustom,
  },
  data () {
    return {
      palette: colorArray,
      color: '#aaaaaa',
    }
  },
}
</script>

<style lang="scss">

</style>
