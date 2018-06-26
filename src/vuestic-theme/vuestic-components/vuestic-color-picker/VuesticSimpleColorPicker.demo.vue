<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <div class="demo-container">
      {{ demoColor }}
      <vuestic-simple-color-picker
        v-model="demoColor"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
      />
    </div>
    <div class="demo-container">
      {{ demoColor }}
      <vuestic-simple-color-picker
        v-model="demoColor"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
      />
    </div>
    <div class="demo-container">
      {{ demoColor }}
      <vuestic-simple-color-picker
        v-model="demoColor"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
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
