<template>
  <div
    class="va-slider d-flex align--center"
    :class="sliderClass"
  >
    <span v-if="label && !invertLabel" class="va-slider__label title">
      {{ label }}
    </span>
    <span v-if="icon" class="va-slider__label title">
      <va-icon :icon="icon" :color="color" :size="16"/>
    </span>
    <div class="va-slider__container d-flex align--center">
      <div
        class="va-slider-track"
        :style="{ width: max + '%', backgroundColor: color }"/>
      <template v-if="pins">
        <div
          v-for="pin in pinsCol"
          :key="pin"
          class="va-slider-mark"
          :class="{ 'va-slider-mark--active': pin * step < value }"
          :style="{ left: pin * step + '%' }"
        />
      </template>
      <div
        ref="process"
        class="va-slider-track va-slider-track--active"
        :style="{ width: value + '%', backgroundColor: color }"
        @mousedown="moveStart($event, 0, true)"
        @touchstart="moveStart($event, 0, true)"/>
      <div
        ref="dot"
        class="va-slider-handler"
        :style="{ left: 'calc(' + value + '% - 8px)', backgroundColor: color }"
        @touchstart="moveStart"
        @mousedown="moveStart"
      >
        <div v-if="valueVisible" class="va-slider-handler__value d-inline-flex title">
          {{ value }}
        </div>
      </div>
    </div>
    <span v-if="iconRight" class="va-slider__invert-label title">
      <va-icon :icon="iconRight" :color="color" :size="16"/>
    </span>
    <span v-if="invertLabel" class="va-slider__invert-label title">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'va-slider',
  props: {
    range: {
      type: Boolean,
    },
    value: {
      type: Number,
    },
    valueVisible: {
      type: Boolean,
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
    },
    color: {
      type: String,
      default: 'success'
    },
    label: {
      type: String,
    },
    invertLabel: {
      type: Boolean,
    },
    disabled: {
      type: Boolean
    },
    pins: {
      type: Boolean
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
  },
  data () {
    return {
      flag: false,
      keydownFlag: null,
      focusFlag: false,
      processFlag: false,
      processSign: null,
      size: 0,
      fixedValue: 0,
      focusSlider: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      isMounted: false
    }
  },
  computed: {
    sliderClass () {
      return {
        'va-slider--success': this.color === 'success',
        'va-slider--info': this.color === 'info',
        'va-slider--danger': this.color === 'danger',
        'va-slider--warning': this.color === 'warning',
        'va-slider--disabled': this.disabled
      }
    },
    pinsCol () {
      return (this.max / this.step) - 1
    },
    dotWidthVal () {
      return typeof this.dotWidth === 'number' ? this.dotWidth : 16
    },
    slider () {
      return this.$refs.dot
    },
    limit () {
      return [0, this.size]
    },
    valueLimit () {
      return [this.min, this.max]
    },
    disabledArray () {
      return this.disabled
    },
  },
  watch: {
    value (val) {
      console.log(val)
      this.flag || this.setValue(val, true)
    },
    max (val) {
      if (val < this.min) {
        return this.printError('The maximum value can not be less than the minimum value.')
      }

      let resetVal = this.limitValue(this.val)
      this.setValue(resetVal)
      this.refresh()
    },
    min (val) {
      if (val > this.max) {
        return this.printError('The minimum value can not be greater than the maximum value.')
      }

      let resetVal = this.limitValue(this.val)
      this.setValue(resetVal)
      this.refresh()
    },
    show (bool) {
      if (bool && !this.size) {
        this.$nextTick(() => {
          this.refresh()
        })
      }
    },
    fixed () {
      this.computedFixedValue()
    }
  },
  methods: {
    bindEvents () {
      document.addEventListener('touchmove', this.moving, { passive: false })
      document.addEventListener('touchend', this.moveEnd, { passive: false })
      document.addEventListener('mousedown', this.blurSlider)
      document.addEventListener('mousemove', this.moving)
      document.addEventListener('mouseup', this.moveEnd)
      document.addEventListener('mouseleave', this.moveEnd)
      document.addEventListener('keydown', this.handleKeydown)
      document.addEventListener('keyup', this.handleKeyup)
      window.addEventListener('resize', this.refresh)
    },
    getPos (e) {
      this.realTime && this.getStaticData()
      return e.clientX - this.offset
    },
    setCurrentValue (val, isDrag, isIdleSlider) {
      // let slider = isIdleSlider ? this.idleSlider : this.currentSlider
      if (val < this.min || val > this.max) return false
      if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val
        if (!this.lazy || !this.flag) {
          this.syncValue()
        }
      }
      isDrag || this.setPosition()
    },
    setValueOnPos (pos, isDrag) {
      let range = this.limit
      let valueRange = this.valueLimit
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos)
        let v = this.getValueByIndex(Math.round(pos / this.gap))
        this.setCurrentValue(v, isDrag)
        if (this.isRange && this.fixed) {
          this.setTransform(pos + ((this.fixedValue * this.gap) * (this.currentSlider === 0 ? 1 : -1)), true)
          this.setCurrentValue((v * this.multiple + (this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1))) / this.multiple, isDrag, true)
        }
      } else if (pos < range[0]) {
        this.setTransform(range[0])
        this.setCurrentValue(valueRange[0])
        if (this.isRange && this.fixed) {
          this.setTransform(this.limit[this.idleSlider][0], true)
          this.setCurrentValue(this.valueLimit[this.idleSlider][0], isDrag, true)
        } else if (!this.fixed && !this.disabledArray[0] && this.currentSlider === 1) {
          this.focusSlider = 0
          this.currentSlider = 0
        }
      } else {
        console.log(range)
        console.log(valueRange)
        this.setTransform(range[1])
        this.setCurrentValue(valueRange[1])
        if (!this.fixed && !this.disabledArray[1] && this.currentSlider === 0) {
          this.focusSlider = 1
          this.currentSlider = 1
        }
      }
    },
    moveStart (e, index = 0, isProcess) {
      if (!isProcess && this.useKeyboard) {
        this.focusFlag = true
        this.focusSlider = index
      }
      this.flag = true
      this.$emit('drag-start', this)
    },
    moving (e) {
      if (this.stopPropagation) {
        e.stopPropagation()
      }

      if (!this.flag) return false
      e.preventDefault()

      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]
      if (this.processFlag) {
        this.currentSlider = 0
        this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true)
        this.currentSlider = 1
        this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true)
      } else {
        this.setValueOnPos(this.getPos(e), true)
      }
    },
    moveEnd (e) {
      if (this.flag) {
        this.$emit('drag-end', this)
        console.log(this.val)
        console.log(this.value)
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue()
        }
      } else {
        return false
      }
      this.flag = false
      window.setTimeout(() => {
        this.processFlag = false
      }, 0)
      this.setPosition()
    },
    setPosition (speed) {
      this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed)
      console.log(this.position)
      this.setTransform(this.position)
      this.flag || this.setTransitionTime(0)
    },
    setTransform (val) {
      function roundToDPR () {
        const r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
        return value => Math.round(value * r) / r
      }

      let value = roundToDPR(((val - (this.dotWidthVal / 2))) * (this.reverse ? -1 : 1))
      let translateValue = `translateX(${value}px)`
      this.slider.style.transform = translateValue
      this.slider.style.WebkitTransform = translateValue
      this.slider.style.msTransform = translateValue
      this.$refs.process.style.width = `${val}px`
      this.$refs.process.style['left'] = 0
    },
    setTransitionTime (time) {
      // In order to avoid browser merge style and modify together
      // time || this.$refs.process.offsetWidth

      this.slider.style.transitionDuration = `${time}s`
      this.slider.style.WebkitTransitionDuration = `${time}s`
      this.$refs.process.style.transitionDuration = `${time}s`
      this.$refs.process.style.WebkitTransitionDuration = `${time}s`
    },
    isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i])
      }
      return a !== b
    },
    syncValue (noCb) {
      let val = this.value
      console.log(val)
      this.$emit('input', val)
      this.keydownFlag && this.$emit('on-keypress', val)
      noCb || this.$emit('callback', val)
    },
    setValue (val, noCb) {
      if (this.isDiff(this.val, val)) {
        let resetVal = this.limitValue(val)
        this.val = resetVal
        this.syncValue(noCb)
      }
    },
    limitValue (val) {
      if (this.data) {
        return val
      }

      const inRange = (v) => {
        if (v < this.min) {
          this.printError(`The value of the slider is ${val}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`)
          return this.min
        } else if (v > this.max) {
          this.printError(`The value of the slider is ${val}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`)
          return this.max
        }
        return v
      }

      if (this.isRange) {
        return val.map((v) => inRange(v))
      } else {
        return inRange(val)
      }
    },
    getStaticData () {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth
        this.offset = this.$refs.elem.getBoundingClientRect().left
      }
    },
  },
  mounted () {
    this.isComponentExists = true

    this.$nextTick(() => {
      if (this.isComponentExists) {
        this.getStaticData()
        this.setValue(this.limitValue(this.value), true)
        this.bindEvents()
      }
    })

    this.isMounted = true
  },
  beforeDestroy () {
    this.isComponentExists = false
    this.unbindEvents()
  }
}
</script>

<style lang='scss'>
  $slider-colors: (
    success: (#40e583, #d6ffd3),
    danger: (#e34b4a, #ffebeb),
    info: (#2c82e0, #caeeff),
    warning: (#ffc200, #fff3d1)
  );

  @each $name, $colors in $slider-colors {
    $active-track: nth($colors, 1);
    $track: nth($colors, 2);

    .va-slider--#{$name} {

      .va-slider-track--active, .va-slider-mark--active {
        background: $active-track !important;
      }

      .va-slider-track, .va-slider-mark {
        background: $track;
      }

      .va-slider-handler {
        border: 0.25rem solid $active-track;
      }

    }
  }

  .va-slider {

    &.va-slider--disabled {
      @include va-disabled;
    }

    &__label {
      margin-right: 1rem;
    }

    &__invert-label {
      margin-left: 1rem;
    }

    &__container {
      position: relative;
      width: 100%;
      height: 0.5rem;

      .va-slider-track {
        position: absolute;
        width: 100%;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      .va-slider-mark {
        position: absolute;
        width: 2px;
        height: 12px;
      }

      .va-slider-track--active {
        position: absolute;
        width: 100%;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      .va-slider-handler {
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: $white;
        border-radius: 50%;

        &__value {
          position: absolute;
          bottom: 0.75rem;

        }
      }
    }
  }
</style>
