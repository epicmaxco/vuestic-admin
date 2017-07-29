<template>
  <div class="vuestic-pre-loader">
    <template  v-for="point in points">
      <div class="point" :ref="points.indexOf(point)" :style="`left: ${point.x}px; top: ${point.y}px`"
        :class="'lighten-' + point.lighten"></div>
    </template>
    <div ref="main" class="main-point" :style="'left: ' + (points[mainIndex].x - 4) +
      'px; top: ' + (points[mainIndex].y - 4) + 'px'">
    </div>
  </div>
</template>

<script>
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
      update () {
        this.mainIndex = this.getNext(this.mainIndex)
        let prevIndex = this.mainIndex
        for (let i = 0; i <= 7; i++) {
          prevIndex = this.getPrevious(prevIndex)
          this.setNextLighten(prevIndex)
        }
      }
    },
    created () {
      this.points = this.points.map(point => {
        return {
          lighten: 8,
          ...point
        }
      })
      for (let i = 1; i <= 7; i++) {
        this.points[this.mainIndex - i].lighten = i
      }
      setInterval(this.update, 100)
    },
    data () {
      return {
        points: require('./points.json'),
        mainIndex: 7
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-pre-loader {
    width: 128px;
    height: 96px;
    position: relative;
    .main-point {
      transition: all linear .1s;
      background: radial-gradient($brand-primary, white);
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    .point {
      transition: all linear .1s;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      @for $i from 0 through 8 {
        &.lighten-#{$i} {
          background-color: lighten($brand-primary, $i/10*0.38*100%);
        }
      }
    }
  }
</style>
