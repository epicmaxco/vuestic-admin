<template>
  <VbDemo>
    <VbContainer>
      <div
        v-if="numbers === true"
        class="vuestic-rating__numbers"
      >
        <div
          v-for="item in max"
          :key=item
          :class="setNumberClasses(item)"
          class="vuestic-rating__numbers--number"
          :style="setNumberStyles(item)"
          @click="setCurrentValue(item)"
        >
          {{item}}
        </div>
      </div>
      <div
        v-if="numbers === false"
        class="vuestic-rating__icons"
      >
        <i
          v-for="item in max"
          :key=item
          :class="setIconClasses(item)"
          class="vuestic-rating__icons--icon"
          :style="computedStylesIcon"
          @click="setCurrentValue(item)"
        />
      </div>
    </VbContainer>
  </VbDemo>
</template>

<script>
export default {
  name: 'vuestic-rating',
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
        'font-size': this.setIconSize() + 'px',
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
          'background-color': this.color,
          height: this.setIconSize() + 'px',
          width: this.setIconSize() + 'px',
          cursor: this.getCursor()
        }
      }
      return {
        'background-color': this.color,
        height: this.setIconSize() + 'px',
        width: this.setIconSize() + 'px',
        cursor: this.getCursor(),
        color: this.color
      }
    },
    setIconSize () {
      if (this.size === 'medium') {
        return 16
      } else if (this.size === 'large') {
        return 24
      } else {
        return 12
      }
    },
    setIconClasses (item) {
      if (this.emptyIcon) {
        return item <= this.value ? this.icon : this.emptyIcon
      }
      return item <= this.value ? this.icon : this.icon + ' ' + 'vuestic-rating__icons--icon--empty'
    },
    setNumberClasses (item) {
      return item <= this.value ? 'this.icon' : 'vuestic-rating__numbers--number-' +
        ' ' + 'vuestic-rating__numbers--number--empty'
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
.vuestic-rating {
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
      display:flex;
      justify-content: center;
      &--empty {
        opacity: 0.4;
      }
    }
  }
}
</style>
