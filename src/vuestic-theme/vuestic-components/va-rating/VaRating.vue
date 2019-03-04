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
      'fontSize': getItemsFontSize(),
    }"
  >
    <div
      v-if="numbers"
      v-for="item in max"
      :key="item"
      :class="{
        'va-rating__numbers--empty' : !compareWithValue(item)
      }"
      class="va-rating__numbers"
      :style="{
        'background-color' : color
      }"
      @click="setCurrentValue(item, 1)"
    >
      {{item}}
    </div>
    <va-rating-item
      v-if="!numbers"
      v-for="item in max"
      :key="item"
      :icon="icon"
      :emptyIcon="emptyIconComputed"
      :value="getStarValue(item)"
      :iconClasses="getIconClasses(item)"
      :halfIcon="halfIcon"
      class="va-rating__icons"
      :style="{'width' : getIconSize()}"
      @click="setCurrentValue(item, $event)"
      @hover="onHover(item, $event)"
      :hover="getItemHover(item)"
      :isHalf="item - value === 0.5"
      :isRatingHover="isHover"
      @mouseout.native="onHover(value)"
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
      isHover: false
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
    }
  },
  methods: {
    getItemsFontSize () {
      let k = 6
      if (this.numbers) {
        k = 4.5
      }
      const regEx = /[a-z]/gim
      const measure = this.getIconSize().match(regEx).join('')
      return this.getIconSize().replace(regEx, '') / 7 * k + measure
    },
    onHover (item) {
      if (this.halfIcon) {
        this.lastHoverItemNumber = item
      }
    },
    getIconSize () {
      if (!isNaN(this.size.trim().substring(0, 1))) {
        return this.size
      }
      if (this.size.trim() === 'medium') {
        return 1 + 'rem'
      }
      if (this.size.trim() === 'large') {
        return 1.5 + 'rem'
      }
      if (this.size.trim() === 'small') {
        return 0.75 + 'rem'
      }
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
    getStarValue (itemNumber) {
      return this.hover ? false : this.compareWithValue(itemNumber)
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
