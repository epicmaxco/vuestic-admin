<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-color-input v-model="value"/>
    </div>
    <div class="demo-container__item">
      <p>Selected</p>
      <vuestic-color-input v-model="value" selected/>
    </div>
    <div class="demo-container__item">
      <p>Disabled</p>
      <vuestic-color-input v-model="value" disabled/>
    </div>
    <div class="demo-container__item">
      <img src="https://i.imgur.com/UjiMAZj.png" alt="">
    </div>
  </div>
</template>

<script>
import VuesticColorInput from './VuesticColorInput'

export default {
  components: {
    VuesticColorInput,
  },
  data () {
    return {
      value: '#aaaaaa',
    }
  },
}
</script>
