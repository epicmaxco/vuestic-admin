<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-pallet-custom :palette="palette" v-model="color"/>
    </div>
    <div class="demo-container__item">
      <va-pallet-custom :palette="palette" v-model="color"/>
    </div>
  </div>
</template>

<script>
import { colorArray } from './/VuesticTheme'

import VaPalletCustom from './VaPalletCustom'

export default {
  components: {
    VaPalletCustom,
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
