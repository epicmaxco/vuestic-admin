<template>
  <div class="vuestic-color-square" :style="{'background-color': color}"></div>
</template>

<script>
  export default {
    name: 'vuestic-color-square',
    props: {
      color: {
        required: true
      }
    }
  }
</script>

<style lang='scss'>
  .vuestic-color-square {
    height: 48px;
    width: 48px;
  }
</style>
