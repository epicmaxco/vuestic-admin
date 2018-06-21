<template>
  <div class="row">
    <div class="col-md-1">
      <colored-square
        style=" left: 420px; top: 380px; position: absolute"
        v-model="demoColor"/>
    </div>
    <div class="col-md-8">
      <vuestic-simple-color-picker
        style=" left: 420px; top: 380px; background-color: white;position: absolute"
        v-model="demoColor"/>
    </div>
  </div>
</template>

<script>

  import VuesticSimpleColorPicker from './VuesticSimpleColorPicker'
  import ColoredSquare from './ColoredSquare'

  export default {
    components: {
      VuesticSimpleColorPicker,
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
