<template>
  <div class="vuestic-scrollbar">
    <div class="scrollbar-wrapper">
      <div class="scrollbar-content">
        <slot></slot>
      </div>
      <div class="track"><div class="thumb"></div></div>
    </div>
  </div>
</template>

<script>
  let erdMaker = require('element-resize-detector')
  let erd = erdMaker()

  let vm = {
    props: {
      speed: {
        default: 20
      }
    },
    methods: {
      calcSize () {
        console.log('test')
        this.isDown = this.isUp = false
        this.maxHeight = parseInt(this.wrapper.offsetHeight, 10)
        this.contentHeight = parseInt(this.content.offsetHeight, 10)
        this.trackHeight = parseInt(this.track.offsetHeight, 10)
        this.thumb.style.height = this.maxHeight / this.contentHeight < 1
          ? this.maxHeight / this.contentHeight * this.trackHeight + 'px'
          : 0
      },
      calcThumb () {
        let currentMT = this.content.style.marginTop === ''
          ? 0
          : parseInt(this.content.style.marginTop, 10)
        this.thumb.style.top = (-currentMT / this.contentHeight * this.trackHeight) + 'px'
      },
      scroll (e) {
        let delta = (e.deltaY * 0.01 * this.speed)

        if (this.isDown && delta > 0 || this.isUp && delta < 0 || this.contentHeight <= this.maxHeight) {
          e.preventDefault()
          return
        }

        let currentMT = this.content.style.marginTop === ''
          ? 0
          : parseInt(this.content.style.marginTop, 10)

        let nextMT = 0

        if (this.maxHeight - (currentMT - delta * this.speed) > this.contentHeight && delta > 0) {
          nextMT = this.maxHeight - this.contentHeight
          this.isDown = true
        } else {
          this.isDown = false
          if (currentMT - delta > 0) {
            this.isUp = true
            nextMT = 0
          } else {
            nextMT = currentMT - delta
            this.isUp = false
          }
        }
        this.content.style.marginTop = nextMT + 'px'
        this.calcThumb()

        e.preventDefault()
      }
    },
    mounted () {
      this.track = this.$el.getElementsByClassName('track')[0]
      this.thumb = this.track.getElementsByClassName('thumb')[0]
      this.content = this.$el.getElementsByClassName('scrollbar-content')[0]
      this.wrapper = this.$el.getElementsByClassName('scrollbar-wrapper')[0]
      let handler = () => {
        this.calcSize()
        this.calcThumb()
      }
      erd.listenTo(this.content, handler)
      erd.listenTo(this.$el, handler)
      this.$el.addEventListener('wheel', this.scroll, false)
    },
    destroyed () {
      erd.removeAllListeners(this.content)
      erd.removeAllListeners(this.$el)
      this.$el.removeEventListener('wheel', this.scroll, false)
    },
    data () {
      return {
        displayedHeight: undefined,
        wrapper: undefined,
        maxHeight: undefined,
        thumb: undefined,
        track: undefined,
        trackHeight: undefined,
        content: undefined,
        contentHeight: undefined,
        isDown: false,
        isUp: true
      }
    }
  }

  module.exports = vm

</script>

<style lang="scss">
  .vuestic-scrollbar {
    position: relative;
    height: 100%;
    .scrollbar-wrapper {
      height: 100%;
      overflow: hidden;
    }
    .track {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 3px;
      .thumb {
        position: absolute;
        width: 3px;
        background-color: black;
        opacity: .3;
      }
    }
    &:hover {
      .thumb {
        opacity: 1 !important;
      }
    }
  }
</style>
