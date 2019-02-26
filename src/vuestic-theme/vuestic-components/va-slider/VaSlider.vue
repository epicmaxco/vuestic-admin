<template>
  <div
    v-if="isComponentExists"
    class="va-slider d-flex align--center"
    :class="sliderClass"
  >
    <span
      v-if="label && !invertLabel"
      class="va-slider__label title">
      {{ label }}
    </span>
    <span
      v-if="icon"
      class="va-slider__label title">
      <va-icon :icon="icon" :color="color" :size="16"/>
    </span>
    <div
      class="va-slider__container d-flex align--center"
      ref="elem"
    >
      <div
        class="va-slider__container__track"
        :style="{ backgroundColor: color }"/>
      <template v-if="pins">
        <div
          v-for="(pin, key) in pinsCol"
          :key="key"
          class="va-slider__container__mark"
          :class="{ 'va-slider__container__mark--active': isRange ? pin * step > val[0] && pin * step < val[1] : pin * step < val}"
          :style="{ left: pin * step + '%' }"
        />
      </template>
      <template v-if="isRange">
        <div
          ref="process"
          class="va-slider__container__track va-slider__container__track--active"
          :style="processStyles"
          @mousedown="moveStart($event, 0)"/>
        <div
          ref="dot0"
          class="va-slider__container__handler"
          :style="dotStyles[0]"
          @mousedown="moveStart($event, 0)"
        >
          <div v-if="valueVisible" class="va-slider__container__handler-value d-inline-flex title">
            {{ val[0] }}
          </div>
        </div>
        <div
          ref="dot1"
          class="va-slider__container__handler"
          :style="dotStyles[1]"
          @mousedown="moveStart($event, 1)"
        >
          <div
            v-if="valueVisible"
            class="va-slider__container__handler-value d-inline-flex title">
            {{ val[1] }}
          </div>
        </div>
      </template>
      <template v-else>
        <div
          ref="process"
          class="va-slider__container__track va-slider__container__track--active"
          :style="processStyles"
          @mousedown="moveStart($event, 0)"/>
        <div
          ref="dot"
          class="va-slider__container__handler"
          :style="dotStyles"
          @mousedown="moveStart"
        >
          <div
            v-if="valueVisible"
            class="va-slider__container__handler-value d-inline-flex title">
            {{ labelValue ? labelValue : val }}
          </div>
        </div>
      </template>
    </div>
    <span
      v-if="iconRight"
      class="va-slider__invert-label title">
      <va-icon :icon="iconRight" :color="color" :size="16"/>
    </span>
    <span
      v-if="invertLabel"
      class="va-slider__invert-label title">
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
      type: Number | Array,
    },
    labelValue: {
      type: String
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
      size: 0,
      currentValue: this.value,
      currentSlider: 0,
      isComponentExists: false
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
    processStyles () {
      if (this.range) {
        const val0 = ((this.value[0] - this.min) / (this.max - this.min)) * 100
        const val1 = ((this.value[1] - this.min) / (this.max - this.min)) * 100

        return {
          left: val0 + '%',
          width: (val1 - val0) + '%',
          backgroundColor: this.color
        }
      } else {
        return {
          width: ((this.value - this.min) / (this.max - this.min)) * 100 + '%',
          backgroundColor: this.color
        }
      }
    },
    dotStyles () {
      if (this.range){
        const val0 = ((this.value[0] - this.min) / (this.max - this.min)) * 100
        const val1 = ((this.value[1] - this.min) / (this.max - this.min)) * 100

        return [
          {
            left: 'calc(' + val0 + '% - 8px)',
            backgroundColor: this.color
          },
          {
            left: 'calc(' + val1 + '% - 8px)',
            backgroundColor: this.color
          }
        ]
      } else {
        const val = ((this.value - this.min) / (this.max - this.min)) * 100

        return {
          left: 'calc(' + val + '% - 8px)',
          backgroundColor: this.color
        }
      }
    },
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    total () {
      return this.max - this.min
    },
    gap () {
      return this.size / this.total
    },
    interval () {
      return this.value[1] - this.value[0]
    },
    pinsCol () {
      return (this.max / this.step) - 1
    },
    limit () {
      return [0, this.size]
    },
    valueLimit () {
      return [this.min, this.max]
    },
    isRange () {
      return Array.isArray(this.value)
    }
  },
  methods: {
    bindEvents () {
      document.addEventListener('mousemove', this.moving)
      document.addEventListener('mouseup', this.moveEnd)
      document.addEventListener('mouseleave', this.moveEnd)
    },
    unbindEvents () {
      document.removeEventListener('mousemove', this.moving)
      document.removeEventListener('mouseup', this.moveEnd)
      document.removeEventListener('mouseleave', this.moveEnd)
    },
    moveStart (e, index = 0) {
      if (this.isRange) {
        this.currentSlider = index
      }

      this.flag = true
      this.$emit('drag-start', this)
    },
    moving (e) {
      if (!this.flag) return false
      e.preventDefault()

      this.setValueOnPos(this.getPos(e))
    },
    moveEnd (e) {
      if (this.flag) {
        this.$emit('drag-end', this)
      } else {
        return false
      }
      this.flag = false
      if (this.pins) {
        if (this.isRange) {
          if (this.currentValue[0] % this.step !== 0) {
            console.log(this.currentValue)
            this.currentValue[0] = this.normalizeValue(this.currentValue[0])
            this.val = [this.currentValue[0], this.val[1]]
          }
          if (this.currentValue[1] % this.step !== 0) {
            this.currentValue[1] = this.normalizeValue(this.currentValue[1])
            this.val = [this.val[0], this.currentValue[1]]
          }
        } else {
          this.currentValue = this.normalizeValue(this.currentValue)
          this.val = this.currentValue
        }
      }
      this.setTransform()
    },
    getPos (e) {
      this.getStaticData()
      return e.clientX - this.offset
    },
    getStaticData () {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth
        this.offset = this.$refs.elem.getBoundingClientRect().left
      }
    },
    getValueByIndex (index) {
      let tempValue = (this.step * index + this.min) / this.step
      return tempValue
    },
    setCurrentValue (val) {
      let slider = this.currentSlider
      if (this.isRange) {
        if (this.isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val)
          if (slider === 0) {
            this.val = [this.currentValue.splice(slider, 1, val)[0], this.currentValue[1]]
          } else {
            this.val = [this.currentValue[0], this.currentValue.splice(slider, 1, val)[0]]
          }
        }
      } else {
        if (val < this.min || val > this.max) return false
        if (this.isDiff(this.currentValue, val)) {
          this.currentValue = val
          this.val = val
        }
      }
    },
    setValueOnPos (pos, isDrag) {
      let range = this.limit,
        valueRange = this.valueLimit
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos)
        console.log(pos)
        console.log(this.gap)
        let v = this.getValueByIndex(Math.round(pos / this.gap))
        console.log(v)
        this.setCurrentValue(v, isDrag)
      } else if (pos < range[0]) {
        this.setTransform(range[0])
        this.setCurrentValue(valueRange[0])
      } else {
        this.setTransform(range[1])
        this.setCurrentValue(valueRange[1])
      }
    },
    setTransform (val) {
      console.log(val)
      const slider = this.currentSlider,
        val0 = ((this.value[0] - this.min) / (this.max - this.min)) * 100,
        val1 = ((this.value[1] - this.min) / (this.max - this.min)) * 100,
        processSize = `${val1 - val0}%`,
        processPos = `${val0}%`

      if (this.isRange) {
        this.$refs.process.style.width = processSize
        this.$refs.process.style['left'] = processPos
        if (slider === 0) {
          this.$refs.dot0.style['left'] = `calc('${processPos} - 8px)`
        } else {
          this.$refs.dot1.style['left'] = `calc('${processPos} - 8px)`
        }
      } else {
        this.$refs.process.style.width = `${val}px`
        this.$refs.dot.style['left'] = `${val - 8}px`
      }
    },
    normalizeValue (value) {
      let currentRest = value % this.step
      if ((currentRest / this.step) >= 0.5) {
        value = value + (this.step - currentRest)
      } else {
        value = value - currentRest
      }
      return value
    },
    isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i])
      }
      return a !== b
    },
    validateBorders () {
      let isRightBorders = true

      if (this.max < this.min) {
        console.error('The maximum value can not be less than the minimum value.')
        isRightBorders = false
      }

      if (this.min > this.max) {
        console.error('The minimum value can not be greater than the maximum value.')
        isRightBorders = false
      }

      return isRightBorders
    },
    validateValue (val) {
      let isRightValue = true

      const inRange = (v) => {
        if (v < this.min) {
          console.error(`The value of the slider is ${v}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`)
          isRightValue = false
        } else if (v > this.max) {
          console.error(`The value of the slider is ${v}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`)
          isRightValue = false
        }
      }

      if (this.isRange) {
        val.map((v) => inRange(v))
      } else {
        inRange(val)
      }

      return isRightValue
    },
    validatePins () {
      if ((this.max - this.min) % this.step !== 0) {
        console.error('Step is illegal. Slider is nondivisible.')
        return false
      }

      return true
    },
  },
  mounted () {
    this.$nextTick(() => {
      if (this.validateValue(this.value) && this.validateBorders() && this.validatePins()) {
        this.isComponentExists = true
        this.getStaticData()
        this.bindEvents()
      } else {
        this.isComponentExists = false
      }
    })
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

      .va-slider__label, .va-slider__invert-label, .va-slider__container__handler-value {
        color: $active-track;
      }

      .va-slider__container__track--active, .va-slider__container__mark--active {
        background: $active-track !important;
      }

      .va-slider__container__track, .va-slider__container__mark {
        background: $track;
      }

      .va-slider__container__handler {
        border: 0.25rem solid $active-track;
      }
    }
  }

  .va-slider {

    &--disabled {
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

      &__track {
        position: absolute;
        width: 100%;
        height: 0.5rem;
        border-radius: 0.25rem;

        &--active {
          position: absolute;
          height: 0.5rem;
          border-radius: 0.25rem;
        }
      }

      &__mark {
        position: absolute;
        width: 0.125rem;
        height: 0.75rem;
      }

      &__handler {
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: $white;
        border-radius: 50%;

        &-value {
          position: absolute;
          bottom: 0.75rem;
        }
      }
    }
  }
</style>
