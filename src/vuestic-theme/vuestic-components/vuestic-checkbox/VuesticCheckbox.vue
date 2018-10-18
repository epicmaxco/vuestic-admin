<template>
  <div
    class="vuestic-checkbox"
    :class="{'vuestic-checkbox--selected': selected, 'vuestic-checkbox--readonly': readonly,
    'vuestic-checkbox--disabled': disabled, 'vuestic-checkbox--error': errorComputed}"
  >
    <div class="vuestic-checkbox__content">
      <div class="vuestic-checkbox__square" @click="toggleSelection">
        <div class="vuestic-checkbox__input-container">
          <input
            :id="id"
            :readonly="true"
            class="vuestic-checkbox__input"
            @keypress="toggleSelection"
          />
        </div>
        <span class="vuestic-checkbox__icon-selected-container">
          <i class="ion ion-md-checkmark vuestic-checkbox__icon-selected" aria-hidden="true"/>
      </span>
      </div>
      <div class="vuestic-checkbox__label-container">
        <span
          v-if="label" :for="id"
          @click="toggleSelection"
          class="vuestic-checkbox__label-text"
        >
          {{ label }}
        </span>
      </div>
    </div>
    <div class="vuestic-checkbox__error-message-container">
        <span
          class="vuestic-checkbox__error-message"
          v-if="errorComputed">
            {{ errorMessage }}
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
  computed: {
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
    errorComputed () {
      // We make error active, if the error-message is not empty and checkbox is not disabled
      if (!this.disabled) {
        if (this.errorMessage !== null || this.error) {
          return true
        }
        return false
      }
    }
  },
  methods: {
    toggleSelection () {
      if (!this.disabled) {
        this.selected = !this.selected
      }
    }
  },
}
</script>

<style lang="scss">
.vuestic-checkbox {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  #{&}__input {
    cursor: pointer;
    height: 1.375rem;
    position: absolute;
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
            background-color: $lighter-gray;
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
    padding-top: 0px;
    cursor: pointer;
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
    padding-top: 3px;
    padding-left: 5px;
  }
  &__error-message-container {
  }
  &__label-container {
    max-width: 500px;
    margin-left: 30px;
  }
  #{&}__square {
    cursor: pointer;
    @at-root {
      .vuestic-checkbox--disabled#{&} {
        cursor: initial;
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
