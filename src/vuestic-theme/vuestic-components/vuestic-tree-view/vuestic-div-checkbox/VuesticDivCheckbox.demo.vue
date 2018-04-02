<template>
  <div style="left: 420px; top: 180px; width: 400px; position: absolute">
    <vuestic-div-checkbox v-model="value">

    </vuestic-div-checkbox>
    inline text
  </div>
</template>

<script>
  import VuesticDivCheckbox from './VuesticDivCheckbox.vue'

  export default {
    components: { VuesticDivCheckbox },
    data () {
      return {
        value: false
      }
    }
  }
</script>
