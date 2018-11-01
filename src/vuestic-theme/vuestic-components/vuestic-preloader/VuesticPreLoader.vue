<template>
  <div class="vuestic-pre-loader">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { color, lightness } from 'kewler'

export default {
  name: 'vuestic-pre-loader',
  methods: {
    getPrevious (index) {
      if (index === 0) return this.points.length - 1
      else return index - 1
    },
    getNext (index) {
      if (index + 1 === this.points.length) {
        return 0
      } else {
        return index + 1
      }
    },
    setNextLighten (index) {
      let lighten = this.points[index].lighten
      this.points[index].lighten = lighten === 8 ? 1 : lighten + 1
    },
    draw () {
      let ctx = this.context
      ctx.clearRect(0, 0, 140, 104)
      let padding = 4
      this.points.forEach(point => {
        ctx.beginPath()
        let delta = this.radius + padding
        ctx.arc(point.x + delta, point.y + delta, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color(lightness(point.lighten / 10 * 35))()
        ctx.fill()
      })
      let main = this.points[this.mainIndex]
      let delta = this.mainRadius - this.radius + padding
      ctx.beginPath()
      ctx.arc(main.x + delta, main.y + delta, this.mainRadius, 0, Math.PI * 2, false)
      ctx.fillStyle = this.color()
      ctx.fill()
      ctx.closePath()
    },
    calculate () {
      this.mainIndex = this.getNext(this.mainIndex)
      let prevIndex = this.mainIndex
      for (let i = 0; i <= 7; i++) {
        prevIndex = this.getPrevious(prevIndex)
        this.setNextLighten(prevIndex)
      }
    },
    update () {
      this.calculate()
      this.draw()
    },
    animate () {
      this.interval = setInterval(this.update, 30)
    },
    stop () {
      clearInterval(this.interval)
    },
  },
  mounted () {
    this.context = this.$refs.canvas.getContext('2d')
    this.points = this.points.map(point => {
      return {
        lighten: 8,
        ...point
      }
    })
    for (let i = 1; i <= 7; i++) {
      this.points[this.mainIndex - i].lighten = i
    }
    this.draw()
    this.animate()
  },
  data () {
    return {
      points: require('./points.json'),
      color: color(this.$store.state.app.config.palette.primary),
      mainIndex: 7,
      context: {},
      radius: 4,
      mainRadius: 8,
      interval: {},
    }
  },
}
</script>
