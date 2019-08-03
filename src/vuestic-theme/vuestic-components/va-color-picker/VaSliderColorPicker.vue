<template>
  <SliderPicker v-model="valueProxy" class="vuestic-slider-picker"/>
</template>

<script>
import { Slider } from 'vue-color'

export default {
  name: 'va-slider-color-picker',
  components: {
    'SliderPicker': Slider,
  },
  props: {
    value: {
      default: '',
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value.hex)
      },
    },
  },
}
</script>

<style>
.vuestic-slider-picker {
  max-width: 100%;
  padding: 8px;
}
</style>
