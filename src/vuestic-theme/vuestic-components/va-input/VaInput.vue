<template>
  <va-input-wrapper
    class="va-input"
    :error="error"
    :messages="messages"
    :error-messages="errorMessages"
  >
    <va-icon slot="prepend" icon="fa fa-anchor"/>
    <div
      :style="slotStyles"
      class="va-input__slot">
      <label
        :style="labelStyles"
        aria-hidden="true"
        class="va-input__slot__label title"
      >
        {{ label }}
      </label>
      <input :type="type"
             :placeholder="placeholder"
             :disabled="disabled"
             :readonly="readonly"
      >
    </div>
    <va-icon slot="append" icon="fa fa-anchor"/>
  </va-input-wrapper>
</template>

<script>
import VaInputWrapper from '../va-input/VaInputWrapper'

export default {
  name: 'va-input',
  components: { VaInputWrapper },
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    prependIcon: {
      type: String,
    },
    appendIcon: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    removable: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    messages: {
      type: Array
    },
    errorMessages: {
      type: Array
    },
  },
  computed: {
    slotStyles () {
      return {
        borderColor: this.error ? '#e34b4a' : '#babfc2'
      }
    },
    labelStyles () {
      return {
        color: this.error ? '#e34b4a' : ''
      }
    }
  },
}
</script>

<style lang='scss'>
  .va-input {

    &__slot {
      position: relative;
      border-style: solid;
      border-width: 0 0 thin 0;

      &__label {
        position: absolute;
        top: 0.125rem;
        left: 0.5rem;
      }

      input {
        background-color: transparent;
        border-style: none;
        padding: 0.375rem 0.5rem 0.5rem;
        font-family: $font-family-sans-serif;

        &::placeholder {
          font-family: $font-family-sans-serif;
          color: #babfc2;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
