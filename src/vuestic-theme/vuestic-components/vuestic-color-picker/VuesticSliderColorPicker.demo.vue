<template>
  <vuestic-slider-color-picker
    style=" left:650px; top: 380px;position: absolute"
    v-model="demoColor"/>
</template>

<script>

  import VuesticSliderColorPicker from './VuesticSliderColorPicker'

  export default {
    components: {
      VuesticSliderColorPicker,
    },
    data () {
      return {
        demoColor: '#34495e'
      }
    }
  }
</script>
