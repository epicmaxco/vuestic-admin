<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <vuestic-slider-color-picker
      style=" left:650px; top: 380px;position: absolute"
      v-model="demoColor"/>
    <vuestic-slider-color-picker
      style=" left:650px; top: 580px;position: absolute"
      v-model="demoColor"/>
    <vuestic-slider-color-picker
      style=" left:650px; top: 180px;position: absolute"
      v-model="demoColor"/>
  </div>
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
