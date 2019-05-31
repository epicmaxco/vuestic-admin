<template>
  <div
    class="va-slider"
    :class="sliderClass"
  >
    <div
      v-if="range && withInput"
      class="va-slider__input-wrapper">
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
    <span
      v-if="label && !inverseLabel"
      :style="labelStyles"
      class="va-slider__label">
      {{ label }}
    </span>
    <span
      v-if="icon"
      class="va-slider__label">
      <va-icon :icon="icon" :color="colorComputed" :size="16"/>
    </span>
    <div
      :class="{ 'va-slider__container--with-input': range && withInput }"
      class="va-slider__container"
      @click="wrapClick"
      ref="elem"
    >
      <div
        class="va-slider__container__track"
        :style="trackStyles"/>
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
            :style="labelStyles"
            class="va-slider__container__handler-value"
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
            :style="labelStyles"
            class="va-slider__container__handler-value">
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
            :style="labelStyles"
            class="va-slider__container__handler-value"
          >
            {{ labelValue || val }}
          </div>
        </div>
      </template>
    </div>
    <span
      v-if="iconRight"
      class="va-slider__label va-slider__inverse-label">
      <va-icon :icon="iconRight" :color="color" :size="16"/>
    </span>
    <span
      v-if="inverseLabel"
      :style="labelStyles"
      class="va-slider__label va-slider__inverse-label">
      {{ label }}
    </span>
    <div
      v-if="withInput"
      class="va-slider__input-wrapper va-slider__input-wrapper--after">
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
</template>

<script>
import { validateSlider } from './validateSlider'
import { getHoverColor } from '../../../services/color-functions'
import VaIcon from '../va-icon/VaIcon'
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-slider',
  components: {
    VaIcon,
  },
  mixins: [ColorThemeMixin],
  props: {
    range: {
      type: Boolean,
    },
    value: {
      type: [Number, Array],
    },
    labelValue: {
      type: String,
    },
    valueVisible: {
      type: Boolean,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
    },
    inverseLabel: {
      type: Boolean,
    },
    disabled: {
      type: [Boolean, Array],
    },
    pins: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    withInput: {
      type: Boolean,
    },
  },
  data () {
    return {
      flag: false,
      size: 0,
      currentValue: this.value,
      currentSlider: 0,
      isComponentExists: false,
    }
  },
  computed: {
    sliderClass () {
      return {
        'va-slider--disabled': this.disabled,
      }
    },
    labelStyles () {
      return {
        color: this.colorComputed,
      }
    },
    trackStyles () {
      return {
        backgroundColor: getHoverColor(this.colorComputed),
      }
    },
    processedStyles () {
      const validatedValue = this.limitValue(this.value)

      if (this.range) {
        const val0 = ((validatedValue[0] - this.min) / (this.max - this.min)) * 100
        const val1 = ((validatedValue[1] - this.min) / (this.max - this.min)) * 100

        return {
          left: `${val0}%`,
          width: `${val1 - val0}%`,
          backgroundColor: this.colorComputed,
        }
      } else {
        const val = ((validatedValue - this.min) / (this.max - this.min)) * 100

        return {
          width: `${val}%`,
          backgroundColor: this.colorComputed,
        }
      }
    },
    dottedStyles () {
      const validatedValue = this.limitValue(this.value)

      if (this.range) {
        const val0 = ((validatedValue[0] - this.min) / (this.max - this.min)) * 100
        const val1 = ((validatedValue[1] - this.min) / (this.max - this.min)) * 100

        return [
          {
            left: `calc(${val0}% - 8px)`,
            backgroundColor: '#ffffff',
            borderColor: this.colorComputed,
          },
          {
            left: `calc(${val1}% - 8px)`,
            backgroundColor: '#ffffff',
            borderColor: this.colorComputed,
          },
        ]
      } else {
        const val = ((validatedValue - this.min) / (this.max - this.min)) * 100

        return {
          left: `calc(${val}% - 8px)`,
          backgroundColor: '#ffffff',
          borderColor: this.colorComputed,
        }
      }
    },
    val: {
      get () {
        return this.value
      },
      set (val) {
        if (!this.range) {
          val = this.limitValue(val)
        }
        this.$emit('input', val)
      },
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
    },
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
    },
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
        if (!this.flag) { return false }
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
      return ((this.step * this.multiple) * index + (this.min * this.multiple)) / this.multiple
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
        if (val < this.min || val > this.max) {
          return false
        }
        if (this.isDiff(this.currentValue, val)) {
          this.currentValue = val
          this.val = val
        }
      }
    },
    setValueOnPos (pos, isDrag) {
      const range = this.limit
      const valueRange = this.valueLimit

      this.setTransform()

      if (pos >= range[0] && pos <= range[1]) {
        if (this.currentSlider) {
          if (pos <= this.position[0]) {
            this.currentSlider = 0
          }
          let v = this.getValueByIndex(Math.round(pos / this.gap))
          this.setCurrentValue(v, isDrag)
        } else {
          if (pos >= this.position[1]) {
            this.currentSlider = 1
          }
          let v = this.getValueByIndex(Math.round(pos / this.gap))
          this.setCurrentValue(v, isDrag)
        }
      } else if (pos < range[0]) {
        this.setCurrentValue(valueRange[0])
      } else {
        this.setCurrentValue(valueRange[1])
      }
    },
    setTransform () {
      if (this.isRange) {
        const slider = this.currentSlider
        const difference = 100 / (this.max - this.min)
        const val0 = (this.value[0] - this.min) * difference
        const val1 = (this.value[1] - this.min) * difference
        const processSize = `${val1 - val0}%`
        const processPos = `${val0}%`

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
      const currentRest = value % this.step
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
    },
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
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

.va-slider {
  display: flex;
  align-items: center;

  &--disabled {
    @include va-disabled;

    .va-slider__container__handler {

      &:hover {
        cursor: default;
      }
    }
  }

  &__input-wrapper {
    flex-basis: 8.33333%;
    flex-grow: 0;
    max-width: 8.33333%;

    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 2.25rem;
    margin-top: 0.2rem;
    margin-bottom: 1.5rem;

    &--after {
      margin-left: 8.33333%;
    }

    .input-group {
      align-self: flex-end;

      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      width: 100%;
    }
    input {
      display: block;
      background: none;
      padding: 0.125rem 0.125rem 0.0625rem;
      font-size: 1rem;
      border-width: 0;
      border-color: transparent;
      line-height: 1.9;
      width: 100%;
      transition: all 0.28s ease;
      box-shadow: none;
      height: 1.9rem;
      font-family: inherit;
      &:focus {
        outline: none;
      }
    }

    .control-label {
      font-size: .625rem;
      color: #4ae387;
      font-weight: 600;
      text-transform: uppercase;
      top: -0.6rem;
      left: 0;
      position: absolute;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      pointer-events: none;
      padding-left: 0.125rem;
      z-index: 1;
      transition: all 0.28s ease;
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }

  &__label {
    margin-right: 1rem;
    user-select: none;
    font-size: .625rem;
    letter-spacing: 0.6px;
    line-height: 1.2;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__inverse-label {
    margin-left: 1rem;
    margin-right: initial;
  }

  &__container {
    position: relative;
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;

    &--with-input {
      margin-left: 8.33333%;
    }

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
      border: 0.375rem solid;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }

      &-value {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translate(-50%, -100%);
        user-select: none;
        font-size: .625rem;
        letter-spacing: 0.6px;
        line-height: 1.2;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
}
</style>
