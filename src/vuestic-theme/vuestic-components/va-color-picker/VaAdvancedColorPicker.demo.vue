<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-advanced-color-picker v-model="value"/>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <va-advanced-color-picker v-model="value"/>
    </div>
  </div>
</template>

<script>
import VaAdvancedColorPicker from './VaAdvancedColorPicker'

export default {
  components: {
    VaAdvancedColorPicker,
  },
  data () {
    return {
      value: '#AAA',
    }
  },
}
</script>
