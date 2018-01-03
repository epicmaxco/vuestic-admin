<template>
  <slider-picker :value="colorObj" @input="change" class="vuestic-color"></slider-picker>
</template>

<script>
  import {Slider as SliderPicker} from 'vue-color'

  export default {
    components: {
      SliderPicker
    },
    props: {
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      colorObj () {
        return {
          hex: this.value
        }
      }
    },
    methods: {
      change (val) {
        this.$emit('input', val.hex)
      }
    }
  }
</script>

<style lang="scss">
  .vc-slider {
    .vc-slider-swatches {
      display: none;
    }
  }
</style>
