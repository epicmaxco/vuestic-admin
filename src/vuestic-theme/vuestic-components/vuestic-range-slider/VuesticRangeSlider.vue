<template>
  <div class="range-wrapper"> 
    <input
      class="range-slider"
      v-model="inputValue"
      v-show="false"
      :step="step"
      :disabled="disabled"
      :min="min"
      :max="max"
      @keyup.native="onInputChange"> 
      <div class="range-slider__track" :class="{'at-slider--disabled': disabled}" @click="onSliderClick" ref="slider">
        <div class="range-slider__bar" :style="{ 'width': currentPosition }"></div>
        <div class="range-slider__dot-wrapper" :class="{'at-slider__dot-wrapper--hover': isHover, 'at-slider__dot-wrapper--drag': isDrag}" :style="{ 'left': currentPosition }"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @mousedown="handleMouseDown">
          <vuestic-tooltip :options="topTooltipOptions" class="range-slider__tooltip" ref="tooltip">
            <div class="range-slider__dot" :class="{'range-slider__dot--hover': isHover, 'range-slider__dot--drag': isDrag}">
              <div class="range-tooltip">
                <span class="range-tooltip__trigger">
                  <div class="range-slider__dot"></div> 
                </span>
              </div>
            </div>
          </vuestic-tooltip>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-range-slider',
    data: function () {
      return {
        inputValue: null,
        isHover: false,
        isDrag: false,
        startX: 0,
        currentX: 0,
        oldValue: this.value,
        startPos: 0,
        newPos: null,
        currentPosition: `${(this.value - this.min) * 100 / (this.max - this.min)}%`,
        topTooltipOptions: {
          content: this.value,
          placement: 'top',
          show: this.isDrag,
          trigger: 'manual',
        },
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      }
    },
    computed: {
      sliderWidth () {
        return parseInt(this.$refs.slider.clientWidth)
      }
    },
    watch: {
      inputValue (val) {
        this.$emit('input', Number(val))
      }
    },
    methods: {
      handleMouseEnter () {
        clearTimeout(this._timer)
        this.isHover = true
      },
      handleMouseLeave () {
        if (this.isDrag) return
        this.isHover = false
      },
      handleMouseDown (evt) {
        if (this.disabled) return
        this.onDragStart(evt)
        window.addEventListener('mousemove', this.onDragging)
        window.addEventListener('mouseup', this.onDragEnd)
      },
      onDragStart (evt) {
        this.isDrag = true
        this.startX = evt.clientX
        this.startPos = parseInt(this.currentPosition)
      },
      onDragging (evt) {
        if (this.isDrag) {
          let diff = 0
          this.topTooltipOptions.show = this.isDrag
          this.topTooltipOptions.content = this.value
          this.currentX = evt.clientX
          diff = (this.currentX - this.startX) * 100 / this.sliderWidth
          this.newPos = this.startPos + diff
          this.setPosition(this.newPos)
        }
      },
      onDragEnd () {
        if (this.isDrag) {
          this.isDrag = false
          this.topTooltipOptions.show = this.isDrag
          this.topTooltipOptions.content = this.value
          this.setPosition(this.newPos)
          window.removeEventListener('mousemove', this.onDragging)
          window.removeEventListener('mouseup', this.onDragEnd)
        }
      },
      setPosition (pos) {
        if (pos < 0) {
          pos = 0
        } else if (pos > 100) {
          pos = 100
        }

        const lengthPerStep = 100 / ((this.max - this.min) / this.step)
        const steps = Math.round(pos / lengthPerStep)
        let value = (steps * lengthPerStep * (this.max - this.min) * 0.01) + this.min

        value = parseFloat(value.toFixed(0))

        this.$emit('input', value)
        this.currentPosition = `${(this.value - this.min) * 100 / (this.max - this.min)}%`

        if (!this.isDrag && this.value !== this.oldValue) {
          this.$emit('change', this.value)
          this.oldValue = this.value
        }
      },
      onSliderClick (evt) {
        if (this.disabled || this.isDrag) return
        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left
        this.setPosition((evt.clientX - sliderOffsetLeft) / this.sliderWidth * 100)
      },
      onInputChange () {
        if (this.value === '') return
        if (!isNaN(this.value)) {
          this.setPosition((this.value - this.min) * 100 / (this.max - this.min))
        }
      }
    },
    created () {
      if (typeof this.value !== 'number' || isNaN(this.value) || this.value < this.min) {
        this.$emit('input', this.min)
      } else if (this.value > this.max) {
        this.$emit('input', this.max)
      }
      this.inputValue = this.inputValue || this.value
    }
  }
</script>

<style lang="scss" scoped>
  .range-wrapper {
    .range-slider__track {
      position: relative;
      margin: 8px 0;
      width: 100%;
      height: 4px;
      vertical-align: middle;
      border-radius: 2px;
      background-color: #ececec;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
      .range-slider__bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        background-color: #76eaa4;
        border-radius: 2px;
      }
      .range-slider__dot-wrapper {
        position: absolute;
        top: -8px;
        width: 12px;
        height: 12px;
        text-align: center;
        background-color: transparent;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .range-slider__tooltip {
          display: block;
          height: 100%;
          line-height: 1;
          .range-tooltip__trigger {
            vertical-align: middle;
            display: inline-block;
            position: relative;
            .range-slider__dot {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: #4ae486;
              -webkit-transition: all .3s;
              transition: all .3s;
            }
          }
        }
      }
    }
    .range-slider__dot-wrapper.range-slider__dot-wrapper--hover, .range-slider__dot-wrapper:hover {
      cursor: -webkit-grab;
      cursor: grab;
    }
  }
</style>
