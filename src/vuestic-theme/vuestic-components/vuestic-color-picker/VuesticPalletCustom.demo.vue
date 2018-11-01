<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-pallet-custom :palette="palette" v-model="color"/>
    </div>
    <div class="demo-container__item">
      <vuestic-pallet-custom :palette="palette" v-model="color"/>
    </div>
  </div>
</template>

<script>
import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'

import VuesticPalletCustom from './VuesticPalletCustom'

export default {
  components: {
    VuesticPalletCustom,
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
