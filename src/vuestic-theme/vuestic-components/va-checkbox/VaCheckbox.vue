<template>
  <div
    class="va-checkbox"
    :class="computedClass"
  >
    <div
      class="va-checkbox__input-container"
      @click="toggleSelection()"
      @mousedown="hasMouseDown = true"
      @mouseup="hasMouseDown = false"
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
    <va-message-list
      class="va-checkbox__error-message-container"
      :value="errorMessages"
      color="danger"
      :limit="errorCount"
    />
  </div>
</template>

<script>
import VaIcon from '../va-icon/VaIcon'
import VaMessageList from '../va-input/VaMessageList'

export default {
  name: 'va-checkbox',
  components: { VaMessageList, VaIcon },
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
  computed: {
    computedClass () {
      return {
        'va-checkbox--selected': this.value,
        'va-checkbox--readonly': this.readonly,
        'va-checkbox--disabled': this.disabled,
        'va-checkbox--error': this.showError,
        'va-checkbox--on-keyboard-focus': this.isKeyboardFocused,
      }
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
    toggleSelection () {
      if (this.readonly) {
        return
      }
      if (this.disabled) {
        return
      }
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-checkbox {
  display: flex;
  flex-direction: column;

  &__input-container {
    align-items: center;
    display: flex;
    cursor: pointer;

    @at-root {
      .va-checkbox--disabled  & {
        @include va-disabled();
      }

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
        background-color: $light-gray;
        transition: all, 0.6s, ease-in;
        border-radius: 5rem;
      }
    }
  }

  #{&}__input {
    height: 1.375rem;
    width: 1.375rem;
    cursor: inherit;
    color: $white;
    background-color: $white;
    border: solid 0.125rem $gray-light;
    border-radius: 0.25rem;

    &:focus {
      outline: none;
    }

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
