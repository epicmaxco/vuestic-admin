<template>
  <va-input-wrapper
    class="va-input"
    :error="error"
    :messages="messages"
    :error-messages="errorMessages"
  >
    <div
      class="va-input__slot">
      <label
        :style="labelStyles"
        aria-hidden="true"
        class="va-input__slot__label title"
      >
        {{ label }}
      </label>
      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        v-model="value"
      >
    </div>
    <va-icon
      @click.native="clearContent()"
      v-if="removable"
      slot="append"
      :color="error ? 'danger': ''"
      :style="{ color: '#babfc2'}"
      icon="ion ion-md-close ion"
    />
    <slot slot="append"/>
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
    labelStyles () {
      return {
        color: this.error ? '#e34b4a' : ''
      }
    }
  },
  methods: {
    clearContent () {
      if (this.removable) {
        this.$emit('input', '')
      }
    },
  },
}
</script>

<style lang='scss'>
  .va-input {

    &__slot {
      position: relative;

      &__label {
        position: absolute;
        bottom: 0.625rem;
        left: 0.5rem;
      }

      input {
        height: 1.5rem;
        background-color: transparent;
        border-style: none;
        padding: 0.25rem 0.5rem 0.25rem;
        font-family: $font-family-sans-serif;
        outline: none;

        &::placeholder {
          font-family: $font-family-sans-serif;
          color: #babfc2;
        }

        &:focus {
          border-bottom: 1px solid #555555 !important;
        }
      }
    }
  }
</style>
