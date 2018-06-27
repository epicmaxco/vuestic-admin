<template>
  <div class="colored-square" :style="{background: value}"></div>
</template>

<script>
  export default {
    name: 'colored-square',
    props: {
      value: {
        required: true
      }
    }
  }
</script>

<style lang='scss'>
  .colored-square {
    height: 48px;
    width: 48px;
  }
</style>
