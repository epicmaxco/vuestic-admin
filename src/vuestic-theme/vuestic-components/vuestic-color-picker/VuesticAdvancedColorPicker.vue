<template>
  <advanced-picker v-model="valueProxy"/>
</template>

<script>
  import { Chrome } from 'vue-color'
  export default {
    name: 'vuestic-advanced-color-picker',
    components: {
      'advanced-picker': Chrome,
    },
    props: {
      value: {
        default: '',
      },
    },
    computed: {
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value.hex)
        },
      },
    }
  }
</script>

<style lang="scss">
</style>
