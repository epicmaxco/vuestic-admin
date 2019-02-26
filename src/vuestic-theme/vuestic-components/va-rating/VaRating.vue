<template>
  <div
    class="va-rating"
    :class="{'va-rating--disabled': disabled, 'va-rating--readonly':readonly}"
  >
    <div
      v-if="numbers"
      class="va-rating__numbers"
    >
      <div
        v-for="item in max"
        :key="item"
        :class="{'va-rating__numbers__number--empty' : !compareWithValue(item)}"
        class="va-rating__numbers__number"
        :style="{
        'background-color' : color,
        'height':getIconSize(),
        'font-size': getNumbersFontSize(),
        'width': getIconSize()
        }"
        @click="setCurrentValue(item, 1)"
      >
        {{item}}
      </div>
    </div>
    <div
      v-else
      class="va-rating__icons"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    >
      <va-rating-item
        v-for="item in max"
        :key="item"
        :icon="icon"
        :emptyIcon="getIconClasses()"
        :value="getStarValue(item)"
        :iconClasses="getIconClasses(item)"
        :halfIcon="halfIcon"
        class="va-rating__icons__icon"
        :style="{'color':color, 'font-size' : getIconSize()}"
        @click="setCurrentValue(item, $event)"
        :size="getIconSize()"
        @hover="onHover(item, $event)"
        :hover="setHover(item)"
        :isHalf="item - value === 0.5"
        :isRatingHover="isHover"
        @mouseout.native="onHover(value)"
      />
    </div>
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
      hoverItemNumber: this.value,
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
  },
  methods: {
    setHover (item) {
      return item <= this.hoverItemNumber && this.isHover
    },
    getNumbersFontSize () {
      return `calc(` + this.getIconSize() + ` - 0.4rem)`
    },
    onHover (item, value) {
      this.hoverItemNumber = item
    },
    getIconSize () {
      if (!isNaN(this.size.trim().substring(0, 1))) {
        return this.size
      }
      if (this.size.trim() === 'medium') {
        return 16 + 'px'
      }
      if (this.size.trim() === 'large') {
        return 24 + 'px'
      }
      if (this.size.trim() === 'small') {
        return 12 + 'px'
      }
    },
    getIconClasses (item) {
      if (this.emptyIcon) {
        return this.compareWithValue(item) ? this.icon : this.emptyIcon
      }
      return this.compareWithValue(item) ? this.icon : this.icon + ' ' +
        'va-rating__icons__icon--empty'
    },
    setCurrentValue (item, value) {
      if (this.readonly || this.disabled) {
        return
      }
      this.isHover = false
      this.valueProxy = value === 1 ? item : item - 0.5
    },
    getStarValue (item) {
      if (this.hover) {
        return false
      }
      return this.compareWithValue(item)
    },
    compareWithValue (item) {
      return item <= this.value
    }
  }
}
</script>

<style lang="scss">
.va-rating {
  display: flex;
  &__icons {
    display: flex;
    &__icon {
      cursor: pointer;
      @at-root {
        .va-rating--disabled & {
          cursor: not-allowed;
        }
        .va-rating--readonly & {
          cursor: initial;
        }
      }
      &--empty {
        opacity: 0.4;
      }
    }
  }
  &__numbers {
    display: flex;
    &__number {
      color: $white;
      margin: 0.1rem;
      border-radius: 0.1rem;
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
      }
      &--empty {
        opacity: 0.4;
      }
    }
  }
}
</style>
