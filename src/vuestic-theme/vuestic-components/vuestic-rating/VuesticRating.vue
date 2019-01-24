<template>
  <div class="vuestic-rating">
    <div
      v-if="numbers === true"
      v-for="item in max"
      :key=item
      class="vuestic-rating__numbers"
      :style="computedStylesNumbers"
      @click="setCurrentValue(item)"
    >
      {{item}}
    </div>
    <i
      v-if="numbers === false"
      v-for="item in max"
      :key=item
      :class="iconClasses(item)"
      class="vuestic-rating__icon"
      :style="computedStylesIcon"
      @click="setCurrentValue(item)"
    />
  </div>
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
        'font-size': this.iconSize() + 'px',
        cursor: this.getCursor()
      }
    },
    computedStylesNumbers () {
      return {
        'background-color': this.color,
        height: this.iconSize() + 'px',
        width: this.iconSize() + 'px',
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
    iconSize () {
      if (this.size === 'medium') {
        return 16
      } else if (this.size === 'large') {
        return 24
      } else {
        return 12
      }
    },
    iconClasses (item) {
      if (this.emptyIcon !== undefined) {
        return item <= this.value ? this.icon : this.emptyIcon
      }
      return item <= this.value ? this.icon : this.icon + ' ' + 'vuestic-rating__icon__empty'
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
  &__icon {
    padding: 2px;
    &__empty {
      opacity: 0.4;
    }
  }
  &__numbers {
    color: $white;
    margin: 2px;
    border-radius: 2px;
    display:flex;
    justify-content: center;
  }
}
</style>
