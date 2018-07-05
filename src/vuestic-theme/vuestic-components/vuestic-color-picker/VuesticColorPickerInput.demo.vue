<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-picker-input v-model="value" mode="advanced"/>
      {{ value }}
    </div>
  </div>
</template>

<script>
import VuesticColorPickerInput from './VuesticColorPickerInput'

export default {
  components: {
    VuesticColorPickerInput,
  },
  data () {
    return {
      value: '#AAA'
    }
  }
}
</script>
