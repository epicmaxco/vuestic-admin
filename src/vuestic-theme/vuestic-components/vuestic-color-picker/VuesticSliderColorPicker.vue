<template>
  <SliderPicker v-model="valueProxy"/>
</template>

<script>
  import {
    Slider
  } from 'vue-color'

  export default {
    name: 'vuestic-slider-color-picker',
    components: {
      'SliderPicker': Slider
    },
    props: {
      value: {
        default: ''
      }
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
    methods: {
      onModelChange (model) {
        this.$emit('input', model)
      }
    }
  }
</script>

<style>

</style>
