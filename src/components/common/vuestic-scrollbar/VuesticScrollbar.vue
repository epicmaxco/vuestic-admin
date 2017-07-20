<template>
  <div class="vuestic-scrollbar">
    <div class="scroll-area">
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
      },
      dragDelta: 0
    },
    methods: {
      calcSize () {
        this.height = parseInt(this.scrollArea.offsetHeight, 10)
        this.contentHeight = parseInt(this.content.offsetHeight, 10)
        this.trackHeight = parseInt(this.track.offsetHeight, 10)
        this.thumb.style.height = this.height / this.contentHeight < 1
          ? this.height / this.contentHeight * this.trackHeight + 'px'
          : 0
        this.thumb.style.top = (this.scrollArea.scrollTop / this.contentHeight * this.trackHeight) + 'px'
      },
      scroll (e) {
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
        this.scrollArea.scrollTop = this.scrollArea.scrollTop - delta * this.speed
        this.thumb.style.top = (this.scrollArea.scrollTop / this.contentHeight * this.trackHeight) + 'px'

        e.preventDefault()
      }
    },
    mounted () {
      this.track = this.$el.getElementsByClassName('track')[0]
      this.thumb = this.track.getElementsByClassName('thumb')[0]
      this.content = this.$el.getElementsByClassName('scrollbar-content')[0]
      this.scrollArea = this.$el.getElementsByClassName('scroll-area')[0]

      erd.listenTo(this.content, this.calcSize)
      this.$el.addEventListener('wheel', this.scroll, false)
    },
    destroyed () {
      erd.removeAllListeners(this.content)
      this.$el.removeEventListener('wheel', this.scroll, false)
    },
    data () {
      return {
        scrollArea: undefined,
        height: undefined,
        thumb: undefined,
        track: undefined,
        trackHeight: undefined,
        content: undefined,
        contentHeight: undefined
      }
    }
  }

  module.exports = vm

</script>

<style lang="scss">
  .vuestic-scrollbar {
    position: relative;
    height: 100%;
    .scroll-area {
      max-height: 100%;
      overflow: hidden;
    }
    .track {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 3px;
      .thumb {
        height: 1rem;
        transition: opacity .5s linear, height .1s ease;
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
