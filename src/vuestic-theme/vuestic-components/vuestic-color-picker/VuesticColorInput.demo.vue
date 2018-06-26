<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <vuestic-color-input v-model="demoColor"
                         style="padding-right: 30px; padding-top: 14px"></vuestic-color-input>
  </div>
</template>

<script>
  import VuesticColorInput from './VuesticColorInput'

  export default {
    components: {
      VuesticColorInput
    },
    data () {
      return {
        demoColor: ''
      }
    }
  }
</script>
