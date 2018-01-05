<template>
  <slider
    v-bind="sliderOptions"
    :value="value"
    @input="change"
    :bg-style="sliderOptions.bgStyle"
    :slider-style="sliderOptions.sliderStyle"
    class="vuestic-slider">
  </slider>
</template>

<script>
  import Slider from 'vue-slider-component/src/vue2-slider'
  import store from 'vuex-store'

  export default {
    name: 'vuestic-slider',
    props: {
      value: {
        type: Number,
        required: true
      },
      options: {
        type: Object
      }
    },
    data: function () {
      return {
        defaultOptions: {
          dotSize: 14,
          height: 2,
          width: 240,
          sliderStyle: {
            'background-color': store.getters.palette.primary
          },
          processStyle: {
            'background-color': store.getters.palette.primary
          },
          tooltipStyle: {
            'background-color': store.getters.palette.primary,
            'border-color': store.getters.palette.primary
          }
        }
      }
    },
    computed: {
      sliderOptions () {
        return Object.assign({}, this.defaultOptions, this.options)
      }
    },
    components: {
      Slider
    },
    methods: {
      change (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>
</style>
