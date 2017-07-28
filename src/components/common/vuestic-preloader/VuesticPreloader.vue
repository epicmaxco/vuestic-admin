<template>
  <canvas ref='canvas' class="canvas" v-on:click="test()"></canvas>
</template>

<script>
  export default {
    name: 'vuestic-preloader',
    methods: {
      test () {
        console.log('tets')
        this.context.fillStyle = 'black'
        let k = this.k
        this.points.forEach(point => {
          this.context.fillRect(point.x * k.x, point.y * k.y, 8 * k.x, 8 * k.y)
        })
      }
    },
    mounted () {
      let canvas = this.$refs.canvas
      this.context = canvas.getContext('2d')
      let context = this.context

      this.k = {
        x: canvas.width / this.width,
        y: canvas.height / this.height
      }
      let k = this.k

      context.fillStyle = '#4ae387'

      this.points.forEach(point => {
        context.fillRect(point.x * k.x, point.y * k.y, 8 * k.x, 8 * k.y)
      })
    },
    data () {
      return {
        points: require('./points.json'),
        context: {},
        k: null,
        width: 128,
        height: 96
      }
    }
  }
</script>

<style lang="scss">
  .canvas {
    width: 128px;
    height: 96px;
  }
</style>
