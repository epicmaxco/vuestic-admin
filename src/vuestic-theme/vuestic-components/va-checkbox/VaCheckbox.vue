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
        :class="{'active': isChecked}"
      >
        <input
          :id="id"
          readonly
          @focus="onFocus"
          @blur="isKeyboardFocused = false"
          class="va-checkbox__input"
          @keypress.prevent="toggleSelection()"
          :disabled="disabled"
          :indeterminate="indeterminate"
        />
        <va-icon :icon="computedIcon"/>
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
import { KeyboardOnlyFocusMixin } from './KeyboardOnlyFocusMixin'

export default {
  name: 'va-checkbox',
  components: { VaMessageList, VaIcon },
  mixins: [KeyboardOnlyFocusMixin],
  props: {
    id: String,
    label: String,
    name: String,
    value: {
      type: [Boolean, Array],
      required: true,
    },
    arrayValue: String,
    indeterminate: Boolean,

    disabled: Boolean,
    readonly: Boolean,

    checkedIcon: {
      type: [String, Array],
      default: 'ion ion-md-checkmark',
    },
    indeterminateIcon: {
      type: [String, Array],
      default: 'ion ion-md-remove',
    },

    error: Boolean,
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    errorCount: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    computedClass () {
      return {
        'va-checkbox--selected': this.isChecked,
        'va-checkbox--readonly': this.readonly,
        'va-checkbox--disabled': this.disabled,
        'va-checkbox--indeterminate': this.indeterminate,
        'va-checkbox--error': this.showError,
        'va-checkbox--on-keyboard-focus': this.isKeyboardFocused,
      }
    },
    computedIcon () {
      return [
        'va-checkbox__icon-selected',
        this.indeterminate ? this.indeterminateIcon : this.checkedIcon,
      ]
    },
    isChecked () {
      return this.modelIsArray ? this.value.includes(this.arrayValue) : this.value
    },
    modelIsArray () {
      return Array.isArray(this.value)
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
      if (this.modelIsArray) {
        if (this.value.includes(this.arrayValue)) {
          this.$emit('input', this.value.filter(option => option !== this.arrayValue))
        } else {
          this.$emit('input', this.value.concat(this.arrayValue))
        }
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
  justify-content: center;

  &__input-container {
    align-items: center;
    display: flex;
    cursor: pointer;

    @at-root {
      .va-checkbox--disabled & {
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
