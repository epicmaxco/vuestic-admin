<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-input v-model="value"/>
    </div>
    <div class="demo-container__item">
      <- Compare to design
      <img src="https://i.imgur.com/UjiMAZj.png" alt="">
    </div>
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
        value: ''
      }
    }
  }
</script>
