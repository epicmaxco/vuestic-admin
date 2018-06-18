<template>
  <div class="colored-square" :style="{background: color}"></div>
</template>

<script>
  export default {
    name: 'colored-square',
    props: {
      color: {
        default: '#FFF'
      }
    },
    computed: {
      normalizedColor: function () {
        return this.$store.state.app.config.palette[this.color]
      },
    }
  }
</script>

<style lang='scss' scoped>
.colored-square {
  height: 48px;
  width: 48px;
}
</style>
