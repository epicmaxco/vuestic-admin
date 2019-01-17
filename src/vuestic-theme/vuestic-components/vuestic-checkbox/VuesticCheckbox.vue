<template>
  <div
    class="vuestic-checkbox"
    :class="computedClass"
  >
    <div
      class="vuestic-checkbox__square"
      @click="toggleSelection(), focused = false"
      @mousedown="focused = true"
      :class="{'active': value}"
    >
      <input
        :id="id"
        readonly
        @focus="focused = true"
        @mouseout="focused = false"
        @blur="focused = false"
        class="vuestic-checkbox__input"
        @keypress="toggleSelection()"
        :disabled="disabled"
      />
      <i class="ion ion-md-checkmark vuestic-checkbox__icon-selected" aria-hidden="true"/>
    </div>
    <div
      class="vuestic-checkbox__label-text" @click="toggleSelection">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div class="vuestic-checkbox__error-message-container" v-if="showError">
        <span
          class="vuestic-checkbox__error-message"
          v-for="(error, index) in computedErrorMessages"
          :key="index"
        >
            {{ error }}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-checkbox',
  props: {
    label: String,
    value: {
      type: Boolean,
      required: true
    },
    id: {
      type: String
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
      default: () => []
    },
    errorCount: {
      type: Number,
      default: 1
    },
    name: String,
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocused: false
    }
  },
  computed: {
    computedClass () {
      return {
        'vuestic-checkbox--selected': this.valueProxy,
        'vuestic-checkbox--readonly': this.readonly,
        'vuestic-checkbox--disabled': this.disabled,
        'vuestic-checkbox--error': this.showError,
        'vuestic-checkbox--onfocus': this.focused
      }
    },
    computedErrorMessages () {
      if (Array.isArray(this.errorMessages)) {
        return this.errorMessages.slice(0, this.errorCount)
      } else {
        const arr = []
        arr.push(this.errorMessages)
        return arr
      }
    },
    focused: {
      set (isFocused) {
        if (!this.disabled && !this.readonly) {
          this.isFocused = isFocused
        }
      },
      get () {
        return this.isFocused
      }
    },
    valueProxy: {
      set (valueProxy) {
        if (!this.readonly && !this.disabled) {
          this.$emit('input', valueProxy)
        }
      },
      get () {
        return this.value
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
      if (!this.disabled) {
        this.valueProxy = !this.valueProxy
      }
    },
  },
}
</script>

<style lang="scss">
.vuestic-checkbox {
  margin-bottom: $checkbox-between-items-margin;
  display: flex;
  flex-direction: column;
  #{&}__input {
    cursor: pointer;
    height: 1.375rem;
    position: absolute;
    border-radius: 0.25rem;
    width: 1.375rem;
    color: $white;
    border: solid 0.125rem $gray-light;
    @at-root {
      .vuestic-checkbox--selected#{&} {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        width: 1.4rem;
        color: $white;
        background-color: $vue-green;
        border: 0;
      }
      .vuestic-checkbox--readonly#{&} {
      }
      .vuestic-checkbox--disabled#{&} {
        border-color: $lighter-gray;
        cursor: initial;
        @at-root {
          .vuestic-checkbox--selected#{&} {
            opacity: 0.4;
          }
        }
      }

      .vuestic-checkbox--error#{&} {
        border-color: $theme-red;
      }
    }
  }
  #{&}__label-text {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding-top: $checkbox-label-margin-top;
    margin-left: $checkbox-between-label-margin;
    @at-root {
      .vuestic-checkbox--error#{&} {
        color: $theme-red;
      }
    }
  }
  &__error-message {
    display:inline-block;
    vertical-align:middle;
    color: $theme-red;
    font-size: $font-size-mini;
  }
  &__icon-selected {
    position: absolute;
    color: $white;
  }
  &__error-message-container {
    margin-left: 0.3rem; // we need to move container because of square container, which we use because of onFocus
    display: flex;
    flex-direction: column;
  }
  &__label-container {
    margin-left: 2rem;
  }
  #{&}__square {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: absolute;
    @at-root {
      .vuestic-checkbox--disabled#{&} {
        cursor: initial;
      }
      .vuestic-checkbox--onfocus#{&} {
        background-color: $light-gray;
        transition: all, 0.6s, ease-in;
        border-radius: 5rem;
        &.active {
          background-color: $lighter-green;
        }
      }
    }
  }
  &__content {
    flex-direction: row;
  }
}
</style>
