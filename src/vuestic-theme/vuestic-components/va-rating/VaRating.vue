<template>
  <VbDemo>
    <VbContainer>
      <div
        v-if="numbers === true"
        class="va-rating__numbers"
      >
        <div
          v-for="item in max"
          :key=item
          :class="setNumberClasses(item)"
          class="va-rating__numbers--number"
          :style="setNumberStyles(item)"
          @click="setCurrentValue(item)"
        >
          {{item}}
        </div>
      </div>
      <div
        v-if="numbers === false"
        class="va-rating__icons"
      >
        <va-star
          v-for="item in max"
          :key=item
          :icon="icon"
          :class="setIconClasses(item)"
          class="va-rating__icons--icon"
          :style="computedStylesIcon"
          @click="setCurrentValue(item)"
        />
      </div>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaStar from './VaStar'
export default {
  name: 'va-rating',
  components: { VaStar },
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
      type: String
    }
  },
  computed: {
    computedStylesIcon () {
      return {
        color: this.color,
        fontSize: this.setIconSize(),
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
    setNumberStyles (item) {
      if (item <= this.value) {
        return {
          backgroundColor: this.color,
          height: this.setIconSize(),
          width: this.setIconSize(),
          cursor: this.getCursor()
        }
      }
      return {
        backgroundColor: this.color,
        height: this.setIconSize(),
        width: this.setIconSize(),
        cursor: this.getCursor(),
        color: this.color
      }
    },
    setIconSize () {
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
    setIconClasses (item) {
      if (this.emptyIcon) {
        return item <= this.value ? this.icon : this.emptyIcon
      }
      return item <= this.value ? this.icon : this.icon + ' ' +
        'va-rating__icons--icon--empty'
    },
    setNumberClasses (item) {
      return item <= this.value ? 'this.icon' : 'va-rating__numbers--number-' +
        ' ' + 'va-rating__numbers--number--empty'
    },
    setCurrentValue (item) {
      if (!this.readonly && !this.disabled) {
        this.valueProxy = item
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
    }
  }
}
</script>

<style lang="scss">
.va-rating {
  display: flex;
  &__icons {
    &--icon {
      padding: 0.1rem;
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
