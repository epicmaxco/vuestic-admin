<template>
  <div class="row">
    <div class="col-md-1">
      <colored-square
        style=" left: 420px; top: 480px; position: absolute"
        v-model="demoColor"/>
    </div>
    <div class="col-md-8">
      <vuestic-advanced-color-picker
        style=" left:620px; top: 380px;position: absolute"
        v-model="demoColor"/>
    </div>
  </div>
</template>

<script>

  import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'
  import ColoredSquare from './ColoredSquare'

  export default {
    components: {
      VuesticAdvancedColorPicker,
      ColoredSquare
    },
    data () {
      return {
        demoColor: '#AAA'
      }
    }
  }
</script>

<style lang="scss">
</style>
