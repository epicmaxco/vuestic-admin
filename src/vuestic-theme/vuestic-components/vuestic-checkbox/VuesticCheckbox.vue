<template>
  <div
    class="vuestic-checkbox"
    :class="computedClass"
  >
    <div class="vuestic-checkbox__square" @click="toggleSelection" @mousedown="focused = true">
      <input
        :id="id"
        readonly
        @focus="focused = true"
        @blur="focused = false"
        class="vuestic-checkbox__input"
        @keypress="onKeyToggleSelection"
        :tabindex="tabIndex"
      />
      <i class="ion ion-md-checkmark vuestic-checkbox__icon-selected" aria-hidden="true"/>
    </div>
    <span
      v-if="label" :for="id"
      @click="toggleSelection"
      class="vuestic-checkbox__label-text"
    >
          {{ label }}
    </span>
    <div class="vuestic-checkbox__label-text"  @click="toggleSelection">
      <slot name="label"></slot>
    </div>
    <div class="vuestic-checkbox__error-message-container" v-if="errorMessages && showError">
        <span
          class="vuestic-checkbox__error-message"
          v-if="Array.isArray(errorMessages)"
          v-for="(error,i) in errorMessages.slice(0, errorCount)" :key="i"
        >
            {{ error }}
          <br/>
        </span>
      <span
        class="vuestic-checkbox__error-message"
        v-else
      >
            {{ errorMessages }}
          <br/>
      </span>
    </div>
  </div>
</template>

<script>
function generateRandomId () {
  return Math.floor(Math.random() * Math.pow(10, 10))
}

export default {
  name: 'vuestic-checkbox',
  props: {
    label: String,
    value: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      default () {
        // We require unique id to show label
        return 'label-' + generateRandomId()
      }
    },
    optionKey: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    errorMessages: {
      type: [String, Array],
      // this prop can take both string and array
      default: () => []
    },
    errorCount: {
      type: Number,
      default: 1
    },
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
        'vuestic-checkbox--selected': this.selected,
        'vuestic-checkbox--readonly': this.readonly,
        'vuestic-checkbox--disabled': this.disabled,
        'vuestic-checkbox--error': this.showError,
        'vuestic-checkbox--onfocus': this.focused
      }
    },
    tabIndex () {
      if (this.disabled || this.readonly) {
        return -1
      }
      return 0
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
    selected: {
      set (selected) {
        if (!this.readonly && !this.disabled) {
          this.$emit('input', selected)
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
        this.focused = false
        this.selected = !this.selected
      }
    },
    onKeyToggleSelection () {
      if (!this.disabled) {
        this.selected = !this.selected
      }
    }
  },
}
</script>

<style lang="scss">
.vuestic-checkbox {
  margin-bottom: 1rem;
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
    padding-top: 0;
    cursor: pointer;
    padding-top: 0.2rem;
    margin-left: 2.35rem;
    @at-root {
      .vuestic-checkbox--error#{&} {
        color: $theme-red;
      }
    }
  }
  &__error-message {
    color: $theme-red;
    font-size: $font-size-mini;
  }
  &__icon-selected {
    position: absolute;
    color: $white;
    padding-left: 0.1rem;
  }
  &__error-message-container {
    margin-left: 0.3rem;
  }
  &__label-container {
    margin-left: 2rem;
  }
  #{&}__square {
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 32px;
    height: 32px;
    position: absolute;
    @at-root {
      .vuestic-checkbox--disabled#{&} {
        cursor: initial;
      }

      .vuestic-checkbox--onfocus#{&} {
        background-color: $on-focus-background-color;
        transition: all, 0.6s, ease-in;
        border-radius: 5rem;
      }
    }
  }
  &__input-container {
    width: 24px;
  }
  &__content {
    flex-direction: row;
  }
}
</style>
