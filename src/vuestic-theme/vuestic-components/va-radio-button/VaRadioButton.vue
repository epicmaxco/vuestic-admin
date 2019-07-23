<template>
  <div
    class="va-radio-button"
    :class="computedClass"
    @click="onClick"
  >
    <div
      class="va-radio-button__content"
      @mousedown="focused = false"
      @mouseup="focused = false"
      :class="{'active': isActive}"
    >
      <input
        @focus="focused = true"
        @mouseout="focused = false"
        @blur="focused = false"
        :checked="isActive" type="radio" class="va-radio-button__input"
        :disabled="disabled"
      />
      <div
        class="va-radio-button__icon"
        :style="computedStyle"
      >
        <div
          class="va-radio-button__icon-circle"
          :style="computedStyle"
        />
      </div>
    </div>
    <div class="va-radio-button__slot-container">
      <slot name="label">
        {{ computedLabel }}
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'va-radio-button',
  props: {
    value: '',
    option: '',
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
  },
  data () {
    return {
      isFocused: false,
    }
  },
  computed: {
    computedClass () {
      return {
        'va-radio-button--active': this.isActive,
        'va-radio-button--disabled': this.disabled,
        'va-radio-button--on-focus': this.focused,
      }
    },
    computedStyle () {
      if (this.isActive) return { borderColor: this.$themes.primary + '!important' }
    },
    focused: {
      set (isFocused) {
        if (!this.disabled) {
          this.isFocused = isFocused
        }
      },
      get () {
        return this.isFocused
      },
    },
    computedLabel () {
      if (!this.label) {
        return this.option
      }
      return this.label
    },
    isActive () {
      return this.value === this.option
    },
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('input', this.option)
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-radio-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;

  &__icon {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 1.8rem;
    border: $gray solid 0.15rem;
    @at-root {
      .va-radio-button.va-radio-button--disabled & {
        opacity: 0.4;
      }
    }
  }

  &__icon-circle {
    @at-root {
      .va-radio-button.va-radio-button--active & {
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 1rem;
        border: solid 0.35rem;
        margin-top: 0.1875rem;
        margin-left: 0.1875rem;
      }
    }
  }

  &__input {
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }

  #{&}__content {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    @at-root {
      .va-radio-button--on-focus#{&} {
        background-color: $light-gray;
        transition: all, 0.6s, ease-in;
        border-radius: 3rem;

        &.active {
          background-color: $lighter-green;
        }
      }
    }
  }

  &__slot-container {
    padding-top: $checkbox-label-margin-top;
  }
}
</style>
