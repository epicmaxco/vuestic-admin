<template>
  <div
    class="vuestic-radio-button"
    :class="computedClass"
    @click="onClick"
  >
    <div class="vuestic-radio-button__content" @mousedown="deactivateOnFocus" @mouseup="deactivateOnFocus">
      <input
        @focus="activateOnFocus"
        @blur="deactivateOnFocus"
        :checked="isActive" type="radio" class="vuestic-radio-button__input"
        :disabled="disabled"
        :tabindex="tabIndex"
      />
      <div class="vuestic-radio-button__icon">
        <div class="vuestic-radio-button__icon-circle"/>
      </div>
    </div>
    <div class="vuestic-radio-button__slot-container">
      {{ label }}
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
      isOnFocus: false
    }
  },
  computed: {
    computedClass () {
      return {
        'vuestic-radio-button--active': this.isActive,
        'vuestic-radio-button--disabled': this.disabled,
        'vuestic-radio-button--on-focus': this.isOnFocus
      }
    },
    isActive () {
      return this.value === this.option
    },
    tabIndex () {
      if (this.disabled) {
        return -1
      }
      return 0
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('input', this.option)
      }
    },
    activateOnFocus () {
      this.isOnFocus = true
    },
    deactivateOnFocus () {
      this.isOnFocus = false
    }
  }
}
</script>

<style lang="scss">

.vuestic-radio-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.3rem;
  &__icon {
    width: 22px;
    height: 22px;
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
        border: $vue-green solid 5px;
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
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding-top: 0.25rem;
    padding-left: 0.25rem;
    @at-root {
      .vuestic-radio-button--on-focus#{&} {
        background-color: $on-focus-background-color;
        transition: all, 0.6s, ease-in;
        border-radius: 3rem;
      }
    }
  }
  &__slot-container {
    padding-top: 0.1rem;
  }
}
</style>
