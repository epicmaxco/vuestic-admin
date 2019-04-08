<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-color-input v-model="value"/>
    </div>
    <div class="demo-container__item">
      <p>Selected</p>
      <va-color-input v-model="value" selected/>
    </div>
    <div class="demo-container__item">
      <p>Disabled</p>
      <va-color-input v-model="value" disabled/>
    </div>
    <div class="demo-container__item">
      <img src="https://i.imgur.com/UjiMAZj.png" alt="">
    </div>
  </div>
</template>

<script>
import VaColorInput from './VaColorInput'

export default {
  components: {
    VaColorInput,
  },
  data () {
    return {
      value: '#aaaaaa',
    }
  },
}
</script>
