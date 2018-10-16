<template>
  <div
    class="vuestic-checkbox"
    :class="{'vuestic-checkbox--selected': selected, 'vuestic-checkbox--readonly': readonly,
    'vuestic-checkbox--disabled': disabled, 'vuestic-checkbox--error': errorHandler}"
  >
    <div class="vuestic-checkbox__container">
      <div
        class="vuestic-checkbox__square"
        :class="{'on-focus': onFocus}"
        @click="toggleSelection"
        @keypress="toggleSelection"
      >
      <span class="vuestic-checkbox__icon"
            v-if="selected"
            @mousedown="onFocusActivate"
            @mouseup="onFocusDeactivate"
      >
      <span class="icon">
        <i class="ion ion-md-checkmark" aria-hidden="true"/>
      </span>
      </span>
        <input
          :readonly="disabled"
          class="vuestic-checkbox__icon"
          @focus="onFocusActivate"
          @blur="onFocusDeactivate"
          v-else
        />
        <span
          class="vuestic-checkbox__error-message"
          v-if="errorHandler">
          {{ errorMessage }}
        </span>
      </div>
      <label v-if="label" :for="id">
        <span class="vuestic-checkbox__label-text">
          <slot name="label">{{ label }}</slot>
        </span>
      </label>
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
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      onFocus: false
    }
  },
  computed: {
    selected: {
      set (selected) {
        if (!this.readonly) {
          this.$emit('input', selected)
        }
      },
      get () {
        return this.value
      }
    },
    errorHandler () {
      // We make error active, if the error-message is not empty
      if (this.errorMessage !== null || this.error) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onFocusActivate () {
      if (!this.disabled) {
        this.onFocus = true
      }
    },
    onFocusDeactivate () {
      if (!this.disabled) {
        this.onFocus = false
      }
    },
    toggleSelection () {
      if (!this.disabled) {
        this.selected = !this.selected
        this.onFocus = false
      }
    }
  },
  created () {
    window.addEventListener('mouseover', (event) => {
      if (event.target !== this.$el.querySelector('.vuestic-checkbox__container') &&
        event.target !== this.$el.querySelector('.vuestic-checkbox__icon')) {
        this.onFocus = false
      }
    })
  }
}
</script>

<style lang="scss">
.vuestic-checkbox {
  margin-bottom: 10px;
  #{&}__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 1.375rem;
    outline: none;
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
      }

      .vuestic-checkbox--error#{&} {
        border-color: $theme-red;
      }
    }
  }
  #{&}__label-text {
    display: inline-block;
    position: relative;
    padding-top: 5px;
    padding-left: 13px;
    @at-root {
      .vuestic-checkbox--error#{&} {
        color: $theme-red;
      }
    }
  }
  &__container {
    display: flex;
    flex-direction: row;
  }
  &__square {
    padding: 8px;
    &.on-focus {
      background-color: rgba(187, 180, 178, 0.33);
      border-radius: 20px;
    }
  }
  &__error-message {
    position: absolute;
    color: $theme-red;
    margin-top: 0.8rem;
    font-size: $font-size-mini;
  }
}
</style>
