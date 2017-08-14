<template>
  <div class="vuestic-scrollbar" @transitionend="onContainerResize">
    <div class="scrollbar-wrapper" ref="scrollbarWrapper">
      <div class="scrollbar-content" ref="scrollbarContent"
           @wheel="scroll"
           @touchstart="startDrag"
           @touchmove="onDrag"
           @touchend="stopDrag"
           @transitionend="onContentResize">
        <slot></slot>
      </div>
      <div class="track" ref="track"><div class="thumb" ref="thumb"></div></div>
    </div>
  </div>
</template>

<script>
  const browser = require('detect-browser')
  const erd = require('element-resize-detector')()

  let vm = {
    name: 'vuestic-scrollbar',
    props: {
      speed: {
        default: 20
      }
    },
    methods: {
      calcSize () {
        this.isDown = this.isUp = false
        this.maxHeight = parseFloat(this.wrapper.offsetHeight, 10)
        this.contentHeight = parseFloat(this.content.offsetHeight, 10)
        this.trackHeight = parseFloat(this.track.offsetHeight, 10)
        this.thumb.style.height = this.maxHeight / this.contentHeight * this.trackHeight + 'px'
        if (this.maxHeight / this.contentHeight < 1) {
          this.thumb.classList.add('active')
        } else {
          this.thumb.classList.remove('active')
        }
      },
      calcThumb () {
        let currentMT = this.content.style.marginTop === ''
          ? 0
          : parseInt(this.content.style.marginTop, 10)
        this.thumb.style.top = (-currentMT / this.contentHeight * this.trackHeight) + 'px'
      },
      onContainerResize () {
        erd.listenTo(this.content, () => {
          this.calcSize()
          this.calcThumb()
          erd.removeAllListeners(this.content)
        })
      },
      onContentResize () {
        let prevHeight = this.contentHeight
        this.calcSize()
        this.calcThumb()

        this.content.style.transition = 'margin-top .3s linear'
        this.thumb.style.transition = 'top .3s linear'
        let handler = (e) => {
          if (e.propertyName === 'margin-top') {
            this.content.style.transition = ''
            this.calcSize()
            this.calcThumb()
            this.content.removeEventListener('transitionend', handler)
            this.thumb.style.transition = ''
          }
        }
        this.content.addEventListener('transitionend', handler)

        this.setVertical(this.contentHeight - prevHeight)
      },
      startDrag (e) {
        this.isDragging = true
        this.prevTouch = e.touches[0]
      },
      onDrag (e) {
        console.log(e)
        if (this.isDragging) {
          e.preventDefault()
          let touch = e.touches[0]
          let delta = this.prevTouch.clientY - touch.clientY
          this.setVertical(delta)
          this.prevTouch = touch
        }
      },
      stopDrag (e) {
        this.isDragging = false
      },
      scroll (e) {
        let delta = (e.deltaY * 0.01 * this.speed)
        if (browser.name === 'firefox') {
          delta *= 10
        }
        this.setVertical(delta)
        e.preventDefault()
      },
      setVertical (delta) {
        if (this.isDown && delta > 0 || this.isUp && delta < 0 || this.contentHeight <= this.maxHeight) {
          return
        }
        let currentMT = this.content.style.marginTop === ''
          ? 0
          : parseFloat(this.content.style.marginTop, 10)
        let nextMT = 0
        if (this.maxHeight - (currentMT - delta) > this.contentHeight && delta > 0) {
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
      }
    },
    mounted () {
      this.track = this.$refs.track
      this.thumb = this.$refs.thumb
      this.content = this.$refs.scrollbarContent
      this.wrapper = this.$refs.scrollbarWrapper
      this.calcSize()
      this.calcThumb()
    },
    data () {
      return {
        wrapper: undefined,
        maxHeight: undefined,
        thumb: undefined,
        track: undefined,
        trackHeight: undefined,
        content: undefined,
        contentHeight: undefined,
        isDown: false,
        isUp: true,
        prevTouch: {},
        isDragging: false
      }
    }
  }

  module.exports = vm

</script>

<style lang="scss">
  @import "../../../sass/variables";

  .vuestic-scrollbar {
    background: transparent;
    transition: all .3s linear;
    position: relative;
    .scrollbar-wrapper {
      box-shadow: $sidebar-box-shadow;
      position: relative;
      overflow: hidden;
      max-height: 100%;
      .track {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 3px;
        .thumb {
          transition: height .3s linear, opacity .6s linear;
          position: absolute;
          width: 100%;
          background-color: black;
          opacity: 0;
          &.active {
            opacity: .3;
          }
        }
      }
    }
    &:hover {
      .thumb.active {
        opacity: 1 !important;
      }
    }
  }
</style>
