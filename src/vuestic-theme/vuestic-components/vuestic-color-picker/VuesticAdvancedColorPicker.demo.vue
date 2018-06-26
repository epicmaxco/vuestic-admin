<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <vuestic-advanced-color-picker
      style=" left:300px;position: absolute"
      v-model="demoColor"/>
    <vuestic-advanced-color-picker
      style=" left:620px; position: absolute"
      v-model="demoColor"/>
    <vuestic-advanced-color-picker
      style="position: absolute"
      v-model="demoColor"/>
  </div>
</template>

<script>
  import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'

  export default {
    components: {
      VuesticAdvancedColorPicker,
    },
    data () {
      return {
        demoColor: '#AAA'
      }
    }
  }
</script>
