<template>
  <div className="row">
    <div className="col-md-1">
      <colored-square
        style=" left: 350px; top: 380px; position: absolute"
        v-model="demoColor"/>
    </div>
    <vuestic-slider-color-picker
      style=" left:650px; top: 380px;position: absolute"
      v-model="demoColor"/>
  </div>
</template>

<script>

  import VuesticSliderColorPicker from './VuesticSliderColorPicker'
  import ColoredSquare from './ColoredSquare'
  import VuesticWidget from '../vuestic-widget/VuesticWidget'

  export default {
    components: {
      VuesticWidget,
      VuesticSliderColorPicker,
      ColoredSquare
    },
    data () {
      return {
        demoColor: '#34495e'
      }
    }
  }
</script>

<style lang="scss">
</style>
