<template>
  <div
    class="va-rating"
    :class="computedClasses"
    :style="{
      'color':colorComputed,
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
      @click="onRatingItemSelected(number, 1)"
      :tabindex="getTabindex(number)"
      @mouseleave="tabindex = null"
      @mouseover="tabindex = number"
      @keypress="onRatingItemSelected(number, 1)"
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
      @click="onRatingItemSelected(itemNumber, $event)"
      @hover="onHover(itemNumber, $event)"
      :value="getItemValue(itemNumber)"
      :tabindex="getTabindex(itemNumber)"
      :isRatingHover="isHoveredComputed"
      @mouseout.native="onMouseOut(value)"
      @mouseleave.native="tabindex = null"
      @mouseover.native="onMouseOver(itemNumber)"
    />
  </div>
</template>

<script>
import VaRatingItem from './VaRatingItem'
import { getFocusColor } from '../../../services/color-functions'
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-rating',
  components: { VaRatingItem },
  mixins: [ColorThemeMixin],
  props: {
    value: {
      type: Number,
      default: 0,
    },

    icon: {
      type: String,
      default: 'fa fa-star',
    },
    halfIcon: {
      type: String,
      default: 'fa fa-star-half-full',
    },
    emptyIcon: String,

    readonly: Boolean,
    disabled: Boolean,

    numbers: Boolean,
    halves: Boolean,

    max: {
      type: Number,
      default: 5,
    },
    size: {
      type: String,
      default: 'medium',
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
      return this.halves ? this.halfIcon : ''
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
    isHover () {
      return this.isHovered && !!this.halves && !this.disabled && !this.readonly
    },
  },
  methods: {
    getItemStyles (itemNumber) {
      if (!this.numbers) {
        if (this.compareWithValue(itemNumber) !== 0) {
          return {
            color: this.colorComputed,
            width: this.getIconSize(),
          }
        }
        return {
          color: this.emptyIcon ? this.colorComputed : getFocusColor(this.colorComputed),
          borderColor: this.colorComputed,
          width: this.getIconSize(),
        }
      } else {
        return {
          backgroundColor: this.compareWithValue(itemNumber) !== 0
            ? this.colorComputed : getFocusColor(this.colorComputed),
          color: this.compareWithValue(itemNumber) !== 0 ? '#fff' : this.colorComputed,
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
      if (this.halves) {
        this.lastHoverItemNumber = itemNumber
      }
    },
    onMouseOut (itemNumber) {
      this.isHovered = false
      if (this.halves) {
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
    onRatingItemSelected (itemNumber, value) {
      if (this.readonly || this.disabled) {
        return
      }
      if (!this.halves) {
        this.$emit('input', itemNumber)
        return
      }
      if (value === 0.5) {
        this.$emit('input', itemNumber - 0.5)
      } else {
        this.$emit('input', itemNumber)
      }
    },
    getItemValue (itemNumber) {
      if (!this.isHover) {
        return this.compareWithValue(itemNumber)
      }

      if ((itemNumber <= this.lastHoverItemNumber)) {
        if (itemNumber === this.lastHoverItemNumber && itemNumber - this.value === 0.5 && this.halves) {
          return 0.5
        }
        return 1
      }
      if ((itemNumber > this.lastHoverItemNumber)) {
        return 0
      }
    },
    compareWithValue (itemNumber) {
      if (itemNumber - this.value === 0.5 && this.halves) {
        return 0.5
      }
      if (itemNumber <= this.value) {
        return 1
      }
      return 0
    },
    onMouseOver (itemNumber) {
      this.tabindex = itemNumber
      this.isHovered = true
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
