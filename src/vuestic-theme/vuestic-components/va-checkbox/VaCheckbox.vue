<template>
  <div
    class="va-checkbox"
    :class="computedClass"
  >
    <div
      class="va-checkbox__input-container"
      @click="toggleSelection()"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <div
        class="va-checkbox__square"
        :class="{'active': value}"
      >
        <input
          :id="id"
          readonly
          @focus="onFocus"
          @blur="isKeyboardFocused = false"
          class="va-checkbox__input"
          @keypress.prevent="toggleSelection()"
          :disabled="disabled"
        />
        <va-icon icon="ion ion-md-checkmark va-checkbox__icon-selected"/>
      </div>
      <div class="va-checkbox__label-text">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
    </div>
    <div class="va-checkbox__error-message-container" v-if="showError">
      <div
        class="va-checkbox__error-message"
        v-for="(error, index) in computedErrorMessages"
        :key="index"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-checkbox',
  components: { VaIcon },
  props: {
    label: String,
    value: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    errorCount: {
      type: Number,
      default: 1,
    },
    name: String,
    error: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isKeyboardFocused: false,
      hasMouseDown: false,
    }
  },
  computed: {
    computedClass () {
      return {
        'va-checkbox--selected': this.valueProxy,
        'va-checkbox--readonly': this.readonly,
        'va-checkbox--disabled': this.disabled,
        'va-checkbox--error': this.showError,
        'va-checkbox--on-keyboard-focus': this.isKeyboardFocused,
      }
    },
    computedErrorMessages () {
      const isArray = Array.isArray(this.errorMessages)
      const errorMessages = isArray ? this.errorMessages : [this.errorMessages]
      return errorMessages.slice(0, this.errorCount)
    },
    valueProxy: {
      set (valueProxy) {
        if (!this.readonly && !this.disabled) {
          this.$emit('input', valueProxy)
        }
      },
      get () {
        return this.value
      },
    },
    showError () {
      // We make error active, if the error-message is not empty and checkbox is not disabled
      if (!this.disabled) {
        if (!(this.errorMessages.length === 0) || this.error) {
          return true
        }
      }
      return false
    },
  },
  methods: {
    onFocus (e) {
      if (this.hasMouseDown) {
        return
      }
      this.isKeyboardFocused = true
    },
    onMouseDown (e) {
      this.hasMouseDown = true
      this.$emit('mousedown', e)
    },
    onMouseUp (e) {
      this.hasMouseDown = false
      this.$emit('mouseup', e)
    },
    toggleSelection () {
      if (this.readonly) {
        return
      }
      if (this.disabled) {
        return
      }
      this.valueProxy = !this.valueProxy
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-checkbox {
  margin-bottom: $checkbox-between-items-margin;
  display: flex;
  flex-direction: column;

  &__input-container {
    align-items: center;
    display: flex;
    cursor: pointer;

    @at-root {
      .va-checkbox--readonly & {
        cursor: initial;
      }

      .va-checkbox--disabled & {
        cursor: default;
      }
    }
  }

  #{&}__square {
    @include flex-center();
    width: 2rem;
    height: 2rem;
    position: relative;
    flex: 0 0 2rem;
    @at-root {
      .va-checkbox--on-keyboard-focus#{&} {
        background-color: $gray-light;
        transition: all, 0.6s, ease-in;
        border-radius: 5rem;

        &.active {
          background-color: $lighter-green;
        }
      }
    }
  }

  #{&}__input {
    height: 1.375rem;
    width: 1.375rem;
    cursor: inherit;

    &:focus {
      outline: none;
    }

    border-radius: 0.25rem;
    color: $white;
    border: solid 0.125rem $gray-light;

    @at-root {
      .va-checkbox--selected#{&} {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        width: 1.4rem;
        color: $white;
        background-color: $vue-green;
        border: 0;
      }

      .va-checkbox--disabled#{&} {
        border-color: $lighter-gray;
        @at-root {
          .va-checkbox--selected#{&} {
            opacity: 0.4;
          }
        }
      }

      .va-checkbox--error#{&} {
        border-color: $theme-red;
      }
    }
  }

  #{&}__label-text {
    display: inline-block;
    position: relative;
    margin-left: 0.25rem;
    @at-root {
      .va-checkbox--error#{&} {
        color: $theme-red;
      }
    }
  }

  &__error-message {
    vertical-align: middle;
    color: $theme-red;
    font-size: $font-size-mini;
  }

  &__icon-selected {
    pointer-events: none;
    position: absolute;
    color: $white;
  }

  &__error-message-container {
    flex: 0 0 100%;
    margin-left: 0.3rem; // To fit with checkbox.
  }

  &__label-container {
    margin-left: 2rem;
  }

  &__content {
    flex-direction: row;
  }
}
</style>
