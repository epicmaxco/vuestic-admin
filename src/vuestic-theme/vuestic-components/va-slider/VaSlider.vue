<template>
  <div
    class="va-slider d-flex align--center"
    :class="sliderClass"
  >
    <div
      v-if="range && withInput"
      class="flex xs1 lg1">
      <div class="form-group mb-4">
        <div class="input-group">
          <input
            id="input1"
            v-model.number="val[0]"
            required
            @input="$emit('input', limitValue(val))"
          />
          <label class="control-label" for="input1">
            Min
          </label>
          <va-icon icon="bar"/>
        </div>
      </div>
    </div>
    <span
      v-if="label && !inverseLabel"
      class="va-slider__label title">
      {{ label }}
    </span>
    <span
      v-if="icon"
      class="va-slider__label title">
      <va-icon :icon="icon" :color="color" :size="16"/>
    </span>
    <div
      :class="{ 'flex offset--xs1 offset--lg1': range && withInput }"
      class="va-slider__container d-flex align--center"
      @click="wrapClick"
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
          :class="{ 'va-slider__container__mark--active': checkActivePin(pin) }"
          :style="{ left: `${pin * step}%` }"
        />
      </template>
      <template v-if="isRange">
        <div
          ref="process"
          class="va-slider__container__track va-slider__container__track--active"
          :style="processedStyles"
          @mousedown="moveStart($event, 0)"/>
        <div
          ref="dot0"
          class="va-slider__container__handler"
          :style="dottedStyles[0]"
          @mousedown="moveStart($event, 0)"
        >
          <div
            v-if="valueVisible"
            class="va-slider__container__handler-value title"
          >
            {{ val[0] }}
          </div>
        </div>
        <div
          ref="dot1"
          class="va-slider__container__handler"
          :style="dottedStyles[1]"
          @mousedown="moveStart($event, 1)"
        >
          <div
            v-if="valueVisible"
            class="va-slider__container__handler-value title">
            {{ val[1] }}
          </div>
        </div>
      </template>
      <template v-else>
        <div
          ref="process"
          class="va-slider__container__track va-slider__container__track--active"
          :style="processedStyles"
          @mousedown="moveStart($event, 0)"/>
        <div
          ref="dot"
          class="va-slider__container__handler"
          :style="dottedStyles"
          @mousedown="moveStart"
        >
          <div
            v-if="valueVisible"
            class="va-slider__container__handler-value title">
            {{ labelValue || val }}
          </div>
        </div>
      </template>
    </div>
    <span
      v-if="iconRight"
      class="va-slider__inverse-label title">
      <va-icon :icon="iconRight" :color="color" :size="16"/>
    </span>
    <span
      v-if="inverseLabel"
      class="va-slider__inverse-label title">
      {{ label }}
    </span>
    <div
      v-if="withInput"
      class="flex xs1 lg1 offset--xs1 offset--lg1">
      <div class="form-group mb-4">
        <div class="input-group">
          <input
            v-if="range"
            v-model.number="val[1]"
            required
            @input="$emit('input', limitValue(val))"
          />
          <input
            v-else
            v-model.number="val"
            required
          />
          <label class="control-label">
            {{ range ? 'Max' : 'Value' }}
          </label>
          <va-icon icon="bar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validateSlider } from './validateSlider'

export default {
  name: 'va-slider',
  props: {
    range: {
      type: Boolean,
    },
    value: {
      type: [Number, Array]
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
    inverseLabel: {
      type: Boolean,
    },
    disabled: {
      type: [Boolean, Array]
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
    withInput: {
      type: Boolean
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
    processedStyles () {
      const validatedValue = this.limitValue(this.value)

      if (this.range) {
        const val0 = ((validatedValue[0] - this.min) / (this.max - this.min)) * 100,
          val1 = ((validatedValue[1] - this.min) / (this.max - this.min)) * 100

        return {
          left: `${val0}%`,
          width: `${val1 - val0}%`,
          backgroundColor: this.color
        }
      } else {
        const val = ((validatedValue - this.min) / (this.max - this.min)) * 100

        return {
          width: `${val}%`,
          backgroundColor: this.color
        }
      }
    },
    dottedStyles () {
      const validatedValue = this.limitValue(this.value)

      if (this.range) {
        const val0 = ((validatedValue[0] - this.min) / (this.max - this.min)) * 100,
          val1 = ((validatedValue[1] - this.min) / (this.max - this.min)) * 100

        return [
          {
            left: `calc(${val0}% - 8px)`,
            backgroundColor: this.color
          },
          {
            left: `calc(${val1}% - 8px)`,
            backgroundColor: this.color
          }
        ]
      } else {
        const val = ((validatedValue - this.min) / (this.max - this.min)) * 100

        return {
          left: `calc(${val}% - 8px)`,
          backgroundColor: this.color
        }
      }
    },
    val: {
      get () {
        return this.value
      },
      set (val) {
        if (!this.range){
          val = this.limitValue(val)
        }
        this.$emit('input', val)
      }
    },
    total () {
      return (this.max - this.min) / this.step
    },
    gap () {
      return this.size / this.total
    },
    multiple () {
      let decimals = `${this.step}`.split('.')[1]
      return decimals ? Math.pow(10, decimals.length) : 1
    },
    interval () {
      return this.value[1] - this.value[0]
    },
    pinsCol () {
      return (this.max / this.step) - 1
    },
    position () {
      return this.isRange ? [(this.value[0] - this.min) / this.step * this.gap, (this.value[1] - this.min) / this.step * this.gap] : ((this.value - this.min) / this.step * this.gap)
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
  watch: {
    val (val) {
      validateSlider(val, this.step, this.min, this.max)
    },
    max (val) {
      if (val < this.min) {
        validateSlider(this.value, this.step, val, this.max)
      }
    },
    min (val) {
      if (val > this.max) {
        validateSlider(this.value, this.step, this.min, val)
      }
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
    moveStart (e, index) {
      if (this.isRange) {
        this.currentSlider = index
      }

      this.flag = true
      this.$emit('drag-start', this)
    },
    moving (e) {
      if (!this.disabled) {
        if (!this.flag) return false
        e.preventDefault()

        this.setValueOnPos(this.getPos(e))
      }
    },
    moveEnd (e) {
      if (!this.disabled) {
        if (this.flag) {
          this.$emit('drag-end', this)
        } else {
          return false
        }
        this.flag = false
      }
    },
    wrapClick (e) {
      if (!this.disabled && !this.flag) {
        let pos = this.getPos(e)
        if (this.isRange) {
          this.currentSlider = pos > ((this.position[1] - this.position[0]) / 2 + this.position[0]) ? 1 : 0
        }
        this.setValueOnPos(pos)
        if (this.pins) {
          if (this.isRange) {
            if (this.currentValue[0] % this.step !== 0) {
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
      }
    },
    checkActivePin (pin) {
      if (this.isRange) {
        return pin * this.step > this.val[0] && pin * this.step < this.val[1]
      } else {
        return pin * this.step < this.val
      }
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
      let tempValue = ((this.step * this.multiple) * index + (this.min * this.multiple)) / this.multiple
      return tempValue
    },
    setCurrentValue (val) {
      let slider = this.currentSlider
      if (this.isRange) {
        if (this.isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val)
          if (slider === 0) {
            this.val = [this.currentValue.splice(slider, 1, val)[0], this.value[1]]
            this.currentValue = [this.currentValue.splice(slider, 1, val)[0], this.value[1]]
          } else {
            this.val = [this.value[0], this.currentValue.splice(slider, 1, val)[0]]
            this.currentValue = [this.value[0], this.currentValue.splice(slider, 1, val)[0]]
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
        this.setTransform()
        let v = this.getValueByIndex(Math.round(pos / this.gap))
        this.setCurrentValue(v, isDrag)
      } else if (pos < range[0]) {
        this.setTransform()
        this.setCurrentValue(valueRange[0])
      } else {
        this.setTransform()
        this.setCurrentValue(valueRange[1])
      }
    },
    setTransform () {
      if (this.isRange) {
        const slider = this.currentSlider,
          val0 = ((this.value[0] - this.min) / (this.max - this.min)) * 100,
          val1 = ((this.value[1] - this.min) / (this.max - this.min)) * 100,
          processSize = `${val1 - val0}%`,
          processPos = `${val0}%`

        this.$refs.process.style.width = processSize
        this.$refs.process.style['left'] = processPos
        if (slider === 0) {
          this.$refs.dot0.style['left'] = `calc('${processPos} - 8px)`
        } else {
          this.$refs.dot1.style['left'] = `calc('${processPos} - 8px)`
        }
      } else {
        const val = ((this.value - this.min) / (this.max - this.min)) * 100

        this.$refs.process.style.width = `${val}%`
        this.$refs.dot.style['left'] = `calc('${val} - 8px)`
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
    limitValue (val) {
      const inRange = (v) => {
        if (v < this.min) {
          return this.min
        } else if (v > this.max) {
          return this.max
        }
        return v
      }

      if (this.isRange) {
        if (val[0] >= val[1] && this.currentSlider === 0) {
          return [val[1], val[1]]
        }
        if (val[0] >= val[1] && this.currentSlider === 1) {
          return [val[0], val[0]]
        }
        return val.map((v) => inRange(v))
      } else {
        return inRange(val)
      }
    },
    isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i])
      }
      return a !== b
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (validateSlider(this.value, this.step, this.min, this.max)) {
        this.getStaticData()
        this.bindEvents()
      }
    })
  },
  beforeDestroy () {
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

      .va-slider__label, .va-slider__inverse-label, .va-slider__container__handler-value {
        color: $active-track;
      }

      .va-slider__container__track--active, .va-slider__container__mark--active {
        background: $active-track !important;
      }

      .va-slider__container__track, .va-slider__container__mark {
        background: $track;
      }

      .va-slider__container__handler {
        border: 0.375rem solid $active-track;
      }
    }
  }

  .va-slider {

    &--disabled {
      @include va-disabled;

      .va-slider__container__handler {

        &:hover {
          cursor: default;
        }
      }
    }

    &__label {
      margin-right: 1rem;
      user-select: none;
    }

    &__inverse-label {
      margin-left: 1rem;
      user-select: none;
    }

    &__container {
      position: relative;
      width: 100%;
      height: 1.5rem;

      &__track, &__track--active {
        position: absolute;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      &__track {
        width: 100%;
      }

      &__mark {
        position: absolute;
        width: 0.125rem;
        height: 0.75rem;
      }

      &__handler {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        background: $white;
        border-radius: 50%;

        &:hover {
          cursor: pointer;
        }

        &-value {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translate(-50%,-100%);
          user-select: none;
        }
      }
    }
  }
</style>
