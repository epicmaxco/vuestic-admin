<template>
  <div
    class="va-rating"
    :class="{
      'va-rating--disabled' : disabled,
      'va-rating--readonly' : readonly,
      'va-rating--medium' : size === 'medium',
      'va-rating--small' : size === 'small',
      'va-rating--large' : size === 'large'
    }"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    :style="{
      'color':color,
      'fontSize': getIconSize(),
    }"
  >
    <div
      v-if="numbers"
      v-for="number in max"
      :key="number"
      :class="{
        'va-rating__numbers--empty' : !compareWithValue(number)
      }"
      class="va-rating__numbers"
      :style="{
        'background-color' : color
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
      v-if="!numbers"
      v-for="itemNumber in max"
      :key="itemNumber"
      :icon="icon"
      :emptyIcon="emptyIconComputed"
      :value="isItemSelected(itemNumber)"
      :iconClasses="getIconClasses(itemNumber)"
      :halfIcon="halfIconComputed"
      class="va-rating__icons"
      :style="{'width' : getIconSize()}"
      @click="setCurrentValue(itemNumber, $event)"
      @hover="onHover(itemNumber, $event)"
      :hover="getItemHover(itemNumber)"
      :isHalf="itemNumber - value === 0.5"
      :tabindex="getTabindex(itemNumber)"
      :isRatingHover="isHover"
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
      default: '#4ae387'
    }
  },
  data () {
    return {
      lastHoverItemNumber: this.value,
      isHover: false,
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
      return this.emptyIcon || this.icon + ' ' + 'va-rating__icons--empty'
    },
    halfIconComputed () {
      return this.disabled || this.readonly ? '' : this.halfIcon
    },
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
    onHover (item) {
      if (this.halfIcon) {
        this.lastHoverItemNumber = item
      }
    },
    getIconSize () {
      let k = 7 / 6 // coefficient, which controls connection between size and font-size
      if (this.numbers) {
        k = 4.5 / 7
      }
      const regEx = /[a-z]/gim
      const measure = this.getItemsFontSize().match(regEx).join('')
      return this.getItemsFontSize().replace(regEx, '') * k + measure
    },
    getIconClasses (item) {
      const iconClass = this.emptyIcon || this.icon + ' ' + 'va-rating__icons--empty'
      return this.compareWithValue(item) ? this.icon : iconClass
    },
    setCurrentValue (item, value) {
      if (this.readonly || this.disabled) {
        return
      }
      this.valueProxy = value === 1 ? item : item - 0.5
    },
    isItemSelected (itemIndex) {
      return this.hover ? false : this.compareWithValue(itemIndex)
    },
    compareWithValue (item) {
      return item <= this.value
    },
    getItemHover (item) {
      return (item <= this.lastHoverItemNumber) && this.isHover && !!this.halfIcon
    }
  }
}
</script>

<style lang="scss">
.va-rating {
  display: flex;
  &__icons {
    display: flex;
    cursor: pointer;
    @include flex-center();
    @at-root {
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
    &--empty {
      opacity: 0.4;
    }
  }
  &__numbers {
    color: $white;
    font-size: inherit;
    margin: 0.1rem;
    border-radius: 0.125rem;
    font-weight: $font-weight-bold;
    @include flex-center();
    display: flex;
    justify-content: center;
    cursor: pointer;
    @at-root {
      .va-rating--disabled & {
        cursor: not-allowed;
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
    &--empty {
      @include va-disabled();
      cursor: pointer;
    }
  }
}
</style>
