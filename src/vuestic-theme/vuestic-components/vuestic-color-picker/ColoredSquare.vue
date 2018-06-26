<template>
  <div class="colored-square" :style="{background: normalizedColor}"></div>
</template>

<script>
  export default {
    name: 'colored-square',
    props: {
      value: {
        required: true
      }
    },
    computed: {
      normalizedColor: function () {
        if (this.value.hex) {
          return this.value.hex
        }
        return this.value
      },
    }
  }
</script>

<style lang='scss'>
  .colored-square {
    height: 48px;
    width: 48px;
  }
</style>
