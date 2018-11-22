<template>
  <div class="vuestic-color-square" :style="{'background-color': value}"></div>
</template>

<script>
export default {
  name: 'vuestic-color-square',
  props: {
    value: {
      required: true,
    },
  },
}
</script>

<style lang='scss'>
.vuestic-color-square {
  height: 48px;
  width: 48px;
}
</style>
