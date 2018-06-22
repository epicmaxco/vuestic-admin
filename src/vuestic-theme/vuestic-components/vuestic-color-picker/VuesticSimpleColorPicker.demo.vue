<template>
  <div class="row">
    <div class="col-md-1">
      {{ demoColor }}
    </div>
    <div class="col-md-8">
      <vuestic-simple-color-picker
        style=" left: 420px; top: 380px; background-color: white;position: absolute"
        v-model="demoColor"
      />
    </div>
  </div>
</template>

<script>
  import VuesticSimpleColorPicker from './VuesticSimpleColorPicker'

  export default {
    components: {
      VuesticSimpleColorPicker,
    },
    data () {
      return {
        demoColor: '#AAA'
      }
    }
  }
</script>
