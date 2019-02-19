<template>
  <div class="va-rating">
    <div
      v-if="numbers"
      class="va-rating__numbers"
    >
      <div
        v-for="item in max"
        :key=item
        :class="getNumberClasses(item)"
        class="va-rating__numbers--number"
        :style="getNumberStyles(item)"
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
      <va-star
        v-for="item in max"
        :key=item
        :icon="icon"
        :emptyIcon="emptyIcon"
        :value="getStarValue(item)"
        :iconClasses="getIconClasses(item)"
        :halfIcon="halfIcon"
        class="va-rating__icons--icon"
        :iconStyles="iconComputedStyles"
        @click="setCurrentValue(item, $event)"
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

export default {
  name: 'va-rating',
  props: {
    icon: {
      type: String,
      default: 'fa fa-star'
    },
    halfIcon: {
      type: String
    },
    halves: {
      type: Boolean
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
      type: String
    }
  },
  data () {
    return {
      hoverItemNumber: this.value,
      isHover: false
    }
  },
  computed: {
    iconComputedStyles () {
      return {
        color: this.color,
        fontSize: this.getIconSize(),
        cursor: this.getCursor()
      }
    },
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
      if (item <= this.hoverItemNumber && this.isHover) {
        return true
      }
      return false
    },
    onHover (item, value) {
      this.hoverItemNumber = item
    },
    getNumberStyles (item) {
      if (this.compareWithValue(item)) {
        return {
          backgroundColor: this.color,
          height: this.getIconSize(),
          width: this.getIconSize(),
          cursor: this.getCursor()
        }
      }
      return {
        backgroundColor: this.color,
        height: this.getIconSize(),
        width: this.getIconSize(),
        cursor: this.getCursor(),
      }
    },
    getIconSize () {
      if (isNaN(this.size.trim().substring(0, 1))) {
        if (this.size.trim() === 'medium') {
          return 16 + 'px'
        } else if (this.size.trim() === 'large') {
          return 24 + 'px'
        } else {
          return 12 + 'px'
        }
      }
      return this.size
    },
    getIconClasses (item) {
      if (this.emptyIcon) {
        return this.compareWithValue(item) ? this.icon : this.emptyIcon
      }
      return this.compareWithValue(item) ? this.icon : this.icon + ' ' +
        'va-rating__icons--icon--empty'
    },
    getNumberClasses (item) {
      return this.compareWithValue(item) ? 'this.icon' : 'va-rating__numbers--number-' +
        ' ' + 'va-rating__numbers--number--empty'
    },
    setCurrentValue (item, value) {
      if (!this.readonly && !this.disabled) {
        this.valueProxy = value === 1 ? item : item - 0.5
      }
    },
    getCursor () {
      if (this.disabled) {
        return 'not-allowed'
      } else if (this.readonly) {
        return 'initial'
      } else {
        return 'pointer'
      }
    },
    getStarValue (item) {
      if (!this.hover) {
        return this.compareWithValue(item)
      }
      return false
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
    &--icon {
      &--empty {
        opacity: 0.4;
      }
    }
  }
  &__numbers {
    display: flex;
    &--number {
      color: $white;
      margin: 0.1rem;
      border-radius: 0.1rem;
      display: flex;
      justify-content: center;
      &--empty {
        opacity: 0.4;
      }
    }
  }
}
</style>
