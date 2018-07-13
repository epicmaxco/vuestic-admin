<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-pullet-custom :palette="palette" v-model="color"/>
    </div>
  </div>
</template>

<script>
import { colorArray } from '../../../vuestic-theme/vuestic-components/vuestic-color-picker/VuesticTheme'

import VuesticPulletCustom from './VuesticPalletCustom'

export default {
  components: {
    VuesticPulletCustom
  },
  data () {
    return {
      palette: colorArray,
      color: ''
    }
  }
}
</script>

<style lang="scss">

</style>
