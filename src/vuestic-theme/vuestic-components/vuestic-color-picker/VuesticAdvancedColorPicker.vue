<template>
  <advanced-picker :value="value" @input="onModelChange"></advanced-picker>
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
    methods: {
      onModelChange (model) {
        this.$emit('input', model)
      },
    },
  }
</script>

<style lang="scss">
</style>
