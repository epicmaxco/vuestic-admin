<template>
  <slider-picker :value="value" @input="onModelChange"></slider-picker>
</template>

<script>
  import {
    Slider
  } from 'vue-color'

  export default {
    name: 'vuestic-slider-color-picker',
    components: {
      'slider-picker': Slider
    },
    props: {
      value: {
        default: ''
      }
    },
    methods: {
      onModelChange (model) {
        this.$emit('input', model)
      }
    }
  }
</script>

<style scoped>

</style>
