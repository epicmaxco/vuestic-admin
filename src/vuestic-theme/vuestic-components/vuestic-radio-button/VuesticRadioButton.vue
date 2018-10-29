<template>
  <div
    class="vuestic-radio-button"
    :class="computedClass"
    @click="onClick"
  >
    <div class="vuestic-radio-button__content" @mousedown="focused = false" @mouseup="focused = false">
      <input
        @focus="focused = true"
        @mouseout="focused = false"
        @blur="focused = false"
        :checked="isActive" type="radio" class="vuestic-radio-button__input"
        :disabled="disabled"
      />
      <div class="vuestic-radio-button__icon">
        <div class="vuestic-radio-button__icon-circle"/>
      </div>
    </div>
    <div class="vuestic-radio-button__slot-container">
      <slot name="label">
        {{ computedLabel }}
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vuestic-radio-button',
  props: {
    value: '',
    option: '',
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
  },
  data () {
    return {
      isFocused: false
    }
  },
  computed: {
    computedClass () {
      return {
        'vuestic-radio-button--active': this.isActive,
        'vuestic-radio-button--disabled': this.disabled,
        'vuestic-radio-button--on-focus': this.focused
      }
    },
    focused: {
      set (isFocused) {
        if (!this.disabled) {
          this.isFocused = isFocused
        }
      },
      get () {
        return this.isFocused
      }
    },
    computedLabel () {
      if (!this.label) {
        return this.option
      }
      return this.label
    },
    isActive () {
      return this.value === this.option
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('input', this.option)
      }
    }
  }
}
</script>

<style lang="scss">

.vuestic-radio-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  &__icon {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 1.8rem;
    border: $gray solid 0.15rem;
    @at-root {
      .vuestic-radio-button.vuestic-radio-button--active & {
        border: $vue-green solid 0.15rem;
      }

      .vuestic-radio-button.vuestic-radio-button--disabled & {
        opacity: 0.4;
      }
    }
  }
  &__icon-circle {
    @at-root {
      .vuestic-radio-button.vuestic-radio-button--active & {
        width: 10px;
        height: 10px;
        border-radius: 1rem;
        position: absolute;
        border: $vue-green solid 0.3rem;
        margin-top: 0.22rem;
        margin-left: 0.24rem;
      }
    }
  }
  &__input {
    width: 24px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }
  #{&}__content {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    box-align: center;
    flex-align: center;
    align-items: center;
    justify-content: center;
    @at-root {
      .vuestic-radio-button--on-focus#{&} {
        background-color: $on-focus-background-color;
        transition: all, 0.6s, ease-in;
        border-radius: 3rem;
      }
    }
  }
  &__slot-container {
    padding-top: 0.2rem;
    margin-left: 0.3rem;
  }
}
</style>
