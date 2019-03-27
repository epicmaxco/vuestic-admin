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
      :style="{
        'width': getItemsFontSize(),
        'height': getItemsFontSize(),
        'fontSize': getIconSize()
      }"
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
      :style="{'width' : getIconSize()}"
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

export default {
  name: 'va-rating',
  components: { VaRatingItem },
  props: {
    icon: {
      type: String,
      default: 'fa fa-star'
    },
    halfIcon: {
      type: String
    },
    emptyIcon: {
      type: String
    },
    value: {
      type: Number,
      default: 1
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    numbers: {
      type: Boolean
    },
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: 'success'
    }
  },
  data () {
    return {
      lastHoverItemNumber: this.value,
      isHovered: false,
      tabindex: 0
    }
  },
  computed: {
    valueProxy: {
      set (valueProxy) {
        this.$emit('input', valueProxy)
      },
      get () {
        return this.value
      }
    },
    emptyIconComputed () {
      return this.emptyIcon || this.icon + ' ' + 'va-rating__icon-item--empty'
    },
    halfIconComputed () {
      return this.halfIcon
    },
    computedClasses () {
      return {
        'va-rating--success': this.color === 'success',
        'va-rating--info': this.color === 'info',
        'va-rating--danger': this.color === 'danger',
        'va-rating--warning': this.color === 'warning',
        'va-rating--gray': this.color === 'gray',
        'va-rating--dark': this.color === 'dark',
        'va-rating--disabled': this.disabled,
        'va-rating--readonly': this.readonly,
        'va-rating--medium': this.size === 'medium',
        'va-rating--small': this.size === 'small',
        'va-rating--large': this.size === 'large',
      }
    },
    isHoveredComputed () {
      return this.disabled || this.readonly ? false : this.isHovered
    }
  },
  methods: {
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
    },
    onHover (itemNumber) {
      if (this.halfIcon) {
        this.lastHoverItemNumber = itemNumber
      }
    },
    getIconClasses (itemNumber) {
      const iconClass = this.emptyIcon || this.icon + ' ' + 'va-rating__icon-item--empty'
      return this.compareWithValue(itemNumber) ? this.icon : iconClass
    },
    getIconSize () {
      let k = 7 / 6 // coefficient, which controls connection between size and font-size
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
      if (this.isHover()) {
        if ((itemNumber <= this.lastHoverItemNumber)) {
          if (itemNumber === this.lastHoverItemNumber && itemNumber - this.value === 0.5) {
            return 0.5
          }
          return 1
        }
        if ((itemNumber > this.lastHoverItemNumber) && this.isHover()) {
          return 0
        }
      }
      return this.compareWithValue(itemNumber)
    },
    isHover () {
      return this.isHovered && !!this.halfIcon && !this.disabled && !this.readonly
    },
    compareWithValue (itemNumber) {
      if (itemNumber - this.value === 0.5) {
        return 0.5
      }
      if (itemNumber <= this.value) {
        return 1
      }
      return 0
    }
  }
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

$vuestic-colors: (
  success: ($vue-green, #d6ffd3),
  danger: (#e34b4a, #ffebeb),
  warning: (#ffd72d, #FFF17A),
  info: (#2c82e0, #caeeff),
  gray: (#a3aab0, #cdd0d5),
  dark: (#576675, #aebcca)
);
@each $name, $colors in $vuestic-colors {
  $color: nth($colors, 1);
  $color-empty: nth($colors, 2);

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
        .va-rating--#{$name} & {
          background-color: $color;
          color: $white;
          &--empty {
            background-color: $color-empty;
            color: $color;
          }
        }

        .va-rating--disabled & {
          @include va-disabled();

        }

        .va-rating--readonly & {
          cursor: initial;
        }

        .va-rating--medium & {
          width: 1rem;
          height: 1rem;
        }

        .va-rating--small & {
          width: 0.75rem;
          height: 0.75rem;
        }

        .va-rating--large & {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    &__icon-item {
      display: flex;
      cursor: pointer;
      @include flex-center();

      @at-root {
        .va-rating--#{$name} & {
          color: $color;
          &--empty {
            color: $color-empty;
          }
        }

        .va-rating--disabled & {
          @include va-disabled();
        }

        .va-rating--readonly & {
          cursor: initial;
        }

        .va-rating--medium & {
          width: 1rem;
        }

        .va-rating--small & {
          width: 0.75rem;
        }

        .va-rating--large & {
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
