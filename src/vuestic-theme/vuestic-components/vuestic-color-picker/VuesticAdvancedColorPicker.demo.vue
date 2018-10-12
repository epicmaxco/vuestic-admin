<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-advanced-color-picker v-model="value"/>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <vuestic-advanced-color-picker v-model="value"/>
    </div>
  </div>
</template>

<script>
import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'

export default {
  components: {
    VuesticAdvancedColorPicker,
  },
  data () {
    return {
      value: '#AAA',
    }
  },
}
</script>
