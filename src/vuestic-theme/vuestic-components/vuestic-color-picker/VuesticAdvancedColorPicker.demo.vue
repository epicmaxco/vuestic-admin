<template>
  <vuestic-advanced-color-picker
    style=" left:620px; top: 380px;position: absolute"
    v-model="demoColor"/>
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
