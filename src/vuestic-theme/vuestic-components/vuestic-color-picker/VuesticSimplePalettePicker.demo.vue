<template>
  <div class="demo-container">
    <div class="demo-container__item">
      {{ value }}
      <vuestic-simple-palette-picker
        v-model="value"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
      />
    </div>
    <div class="demo-container__item">
      {{ value }}
      <vuestic-simple-palette-picker
        v-model="value"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
      />
    </div>
    <div class="demo-container__item">
      {{ value }}
      <vuestic-simple-palette-picker
        v-model="value"
        :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"
      />
    </div>
  </div>
</template>

<script>
  import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'

  export default {
    components: {
      VuesticSimplePalettePicker,
    },
    data () {
      return {
        value: '#AAA'
      }
    }
  }
</script>
