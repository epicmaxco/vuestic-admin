<template>
  <div
    class="va-rating"
    :class="computedClasses"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
    :style="{
      'color':color,
      'fontSize': getIconSize(),
    }"
  >
    <div
      class="va-rating__number-item"
      v-if="numbers"
      v-for="number in max"
      :key="number"
      :class="{
        'va-rating__number-item--empty' : !compareWithValue(number)
      }"
      :style="getItemStyles(number)"
      @click="setCurrentValue(number, 1)"
      :tabindex="getTabindex(number)"
      @mouseleave="tabindex = null"
      @mouseover="tabindex = number"
      @keypress="setCurrentValue(number, 1)"
    >
      {{number}}
    </div>
    <va-rating-item
      class="va-rating__icon-item"
      v-if="!numbers"
      v-for="itemNumber in max"
      :key="itemNumber"
      :icon="icon"
      :emptyIcon="emptyIconComputed"
      :halfIcon="halfIconComputed"
      :iconClasses="getIconClasses(itemNumber)"
      :style="getItemStyles(itemNumber)"
      @click="setCurrentValue(itemNumber, $event)"
      @hover="onHover(itemNumber, $event)"
      :value="getItemValue(itemNumber)"
      :tabindex="getTabindex(itemNumber)"
      :isRatingHover="isHoveredComputed"
      @mouseout.native="onHover(value)"
      @mouseleave.native="tabindex = null"
      @mouseover.native="tabindex = itemNumber"
    />
  </div>
</template>

<script>
import VaRatingItem from './VaRatingItem'
import { getFocusColor } from '../../../services/color-functions'

export default {
  name: 'va-rating',
  components: { VaRatingItem },
  props: {
    icon: {
      type: String,
      default: 'fa fa-star',
    },
    halfIcon: {
      type: String,
      default: 'fa fa-star-half-full'
    },
    halfIncrement: {
      type: Boolean
    },
    emptyIcon: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
    readonly: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    numbers: {
      type: Boolean,
    },
    max: {
      type: Number,
      default: 5,
    },
    size: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'success',
    },
  },
  data () {
    return {
      lastHoverItemNumber: this.value,
      isHovered: false,
      tabindex: 0,
    }
  },
  computed: {
    valueProxy: {
      set (valueProxy) {
        this.$emit('input', valueProxy)
      },
      get () {
        return this.value
      },
    },
    emptyIconComputed () {
      return this.emptyIcon || this.icon + ' ' + 'va-rating__icon-item--empty'
    },
    halfIconComputed () {
      return this.halfIncrement ? this.halfIcon : ''
    },
    isHoveredComputed () {
      return this.disabled || this.readonly ? false : this.isHovered
    },
    computedClasses () {
      return {
        'va-rating--disabled': this.disabled,
        'va-rating--readonly': this.readonly,
      }
    },
  },
  methods: {
    getItemStyles (itemNumber) {
      if (!this.numbers) {
        if (this.compareWithValue(itemNumber) !== 0) {
          return {
            color: this.$themes[this.color],
            width: this.getIconSize(),
          }
        }
        return {
          color: this.emptyIcon ? this.$themes[this.color] : getFocusColor(this.$themes[this.color]),
          borderColor: this.$themes[this.color],
          width: this.getIconSize(),
        }
      } else {
        return {
          backgroundColor: this.compareWithValue(itemNumber) !== 0
            ? this.$themes[this.color] : getFocusColor(this.$themes[this.color]),
          color: this.compareWithValue(itemNumber) !== 0 ? '#fff' : this.$themes[this.color],
          width: this.getItemsFontSize(),
          height: this.getItemsFontSize(),
          fontSize: this.getIconSize(),
        }
      }
    },
    getTabindex (value) {
      if (!this.disabled) {
        return value !== this.tabindex ? 0 : null
      }
    },
    getItemsFontSize () {
      if (!isNaN(this.size.substring(0, 1))) {
        return this.size
      }
      if (this.size === 'medium') {
        return 1 + 'rem'
      }
      if (this.size === 'large') {
        return 1.5 + 'rem'
      }
      if (this.size === 'small') {
        return 0.75 + 'rem'
      }
      throw new Error(`Size "${this.size}" is not supported.`)
    },
    onHover (itemNumber) {
      if (this.halfIncrement) {
        this.lastHoverItemNumber = itemNumber
      }
    },
    getIconClasses (itemNumber) {
      const iconClass = this.emptyIcon || this.icon + ' ' + 'va-rating__icon-item--empty'
      return this.compareWithValue(itemNumber) ? this.icon : iconClass
    },
    getIconSize () {
      let k = 7 / 6 // correlation between width and font-size
      if (this.numbers) {
        k = 4.5 / 7
      }
      const regEx = /[a-z]/gim
      const size = this.getItemsFontSize()
      const unit = size.match(regEx).join('')
      return size.replace(regEx, '') * k + unit
    },
    setCurrentValue (itemNumber, value) {
      if (this.readonly || this.disabled) {
        return
      }
      if (itemNumber - this.value === 0.5) {
        this.valueProxy += 0.5
      } else {
        this.valueProxy = itemNumber - 1 + value
      }
    },
    getItemValue (itemNumber) {
      if (!this.isHover()) {
        return this.compareWithValue(itemNumber)
      }

      if ((itemNumber <= this.lastHoverItemNumber)) {
        if (itemNumber === this.lastHoverItemNumber && itemNumber - this.value === 0.5) {
          return 0.5
        }
        return 1
      }
      if ((itemNumber > this.lastHoverItemNumber)) {
        return 0
      }
    },
    isHover () {
      return this.isHovered && !!this.halfIncrement && !this.disabled && !this.readonly
    },
    compareWithValue (itemNumber) {
      if (itemNumber - this.value === 0.5) {
        return 0.5
      }
      if (itemNumber <= this.value) {
        return 1
      }
      return 0
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-rating {
  display: flex;

  &__number-item {
    font-size: inherit;
    margin: 0.1em;
    border-radius: 0.125rem;
    font-weight: $font-weight-bold;
    @include flex-center();
    cursor: pointer;

    @at-root {
      .va-rating--disabled & {
        @include va-disabled();
      }

      .va-rating--readonly & {
        cursor: initial;
      }
    }
  }

  &__icon-item {
    display: flex;
    cursor: pointer;
    @include flex-center();

    .va-rating--disabled & {
      @include va-disabled();
    }

    .va-rating--readonly & {
      cursor: initial;
    }
  }
}
</style>
