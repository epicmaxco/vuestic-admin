<template>
  <div
    class="va-toggle"
    :class="computedClass"
    @click="toggle"
    @keydown.enter="toggle"
    @mousedown="hasMouseDown = true"
    @mouseup="hasMouseDown = false"
    :tabindex="computedTabindex"
    @focus="updateFocusState(true)"
    @blur="updateFocusState(false)"
  >
    <div class="va-toggle__inner">
      <span
        class="va-toggle__track"
        :style="trackStyles"
      />
      <span
        class="va-toggle__input"
        :style="indicatorStyles"
      />
    </div>
    <div class="va-toggle__label">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'
import { getFocusColor } from '../../../services/color-functions'

export default {
  name: 'va-toggle',
  mixins: [ColorThemeMixin],
  props: {
    value: {
      type: Boolean | String | Number,
    },
    label: {
      type: String,
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    arrayValue: {
      type: String | Boolean | Number,
      default: true,
    },
    trueValue: {
      type: String | Boolean | Number,
      default: true,
    },
    falseValue: {
      type: String | Boolean | Number,
      default: false,
    },
    disable: {
      type: Boolean,
    },
  },
  data () {
    return {
      focused: false,
      hasMouseDown: false,
    }
  },
  computed: {
    computedClass () {
      return {
        'va-toggle--small': this.small,
        'va-toggle--large': this.large,
        'va-toggle--disabled': this.disable,
      }
    },
    trackStyles () {
      const color = this.isTrue ? this.colorComputed : this.$themes.gray
      const backgroundColor = this.focused ? getFocusColor(color) : color
      return { backgroundColor }
    },
    indicatorStyles () {
      const moveStartPoint = this.small ? 1.5 : this.large ? 2.5 : 2
      return { transform: this.isTrue ? `translateX(${moveStartPoint}rem)` : 'translateX(0rem)' }
    },
    computedTabindex () {
      return this.disable ? -1 : this.tabindex || 0
    },
    isTrue () {
      return this.modelIsArray ? this.value.includes(this.arrayValue) : this.value === this.trueValue
    },
    isFalse () {
      return this.modelIsArray ? !this.value.includes(this.arrayValue) : this.value === this.falseValue
    },
    modelIsArray () {
      return Array.isArray(this.value)
    },
  },
  methods: {
    toggle () {
      if (this.disable) {
        return
      }
      if (this.modelIsArray) {
        if (this.isTrue) {
          this.$emit('input', this.value.filter(el => el !== this.val))
        } else if (this.isFalse) {
          this.$emit('input', this.value.concat(this.arrayValue))
        }
      } else {
        if (this.isTrue) {
          this.$emit('input', this.falseValue)
        } else if (this.isFalse) {
          this.$emit('input', this.trueValue)
        } else {
          this.$emit('input', false)
        }
      }
    },
    updateFocusState (isFocus) {
      if (!this.hasMouseDown) {
        this.focused = isFocus
      }
    },
  },
}
</script>

<style lang="scss">
.va-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: $checkbox-between-items-margin;

  &:focus {
    outline: none;
  }

  &__inner {
    display: inline-block;
    position: relative;
    height: 2rem;
    width: 4rem;
    min-width: 4rem;
    border-radius: 1rem;
    margin: $btn-margin;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 4px rgba(52,144,220,.5);
    }
  }

  &--small {
    .va-toggle {
      &__inner {
        height: 1.5rem;
        width: 3rem;
        min-width: 3rem;
      }
      &__input {
        top: .128rem;
        left: .1275rem;
        height: 1.2rem;
        width: 1.2rem;
      }
      &__track {
        border-radius: .75rem;
      }
    }
  }

  &--large {
    .va-toggle {
      &__inner {
        height: 2.5rem;
        width: 5rem;
        min-width: 5rem;
      }
      &__input {
        top: .375rem;
        left: .375rem;
        height: 1.8rem;
        width: 1.8rem;
      }
      &__track {
        border-radius: 1.25rem;
      }
    }
  }

  &--disabled {
    @include va-disabled;
  }

  &__label {
    text-align: left;
  }

  &__track {
    display: inline-block;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    background: $white;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
    transition: background-color .2s ease;
  }

  &__input {
    position: absolute;
    top: .25rem;
    left: .25rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: $white;
    border-radius: 50%;
    box-shadow:  0 2px 4px rgba(0,0,0,0.1);
    transition: transform .2s ease;
  }
}

</style>
