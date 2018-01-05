<template>
  <slider-picker
    :value="colorObj"
    @input="change"
    class="vuestic-color">
  </slider-picker>
</template>

<script>
  import {Slider as SliderPicker} from 'vue-color'

  export default {
    name: 'vuestic-color',
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
  @import "../../../sass/_variables.scss";

  .vuestic-color.vc-slider {
    width: 300px;
    padding: 7px;

    .vc-slider-swatches {
      display: none;
    }

    .vc-slider-hue-warp {
      height: 3px;
    }

    .vc-hue-container {
      top: -5px;
    }

    .vc-hue-picker {
      border-radius: 50px;
      box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
      background-color: $brand-primary;
    }
  }
</style>
