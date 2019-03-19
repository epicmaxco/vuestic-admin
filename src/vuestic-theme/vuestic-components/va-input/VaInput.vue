<template>
  <va-input-wrapper
    class="va-input"
    :error="error"
    :messages="messages"
    :error-messages="errorMessages"
  >
    <va-icon
      v-if="prependIcon"
      slot="prepend"
      :color="error ? 'danger': ''"
      :style="{ color: '#babfc2'}"
      :icon="prependIcon"
    />
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
        :value="value"
      >
    </div>
    <va-icon
      @click.native="clearContent()"
      v-if="appendIcon || removable"
      slot="append"
      :color="error ? 'danger': ''"
      :style="{ color: '#babfc2'}"
      :icon="removable ? 'ion ion-md-close ion' : appendIcon"
    />
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
      // border-style: solid;
      // border-width: 0 0 thin 0;

      &__label {
        position: absolute;
        top: 0.125rem;
        left: 0.5rem;
      }

      input {
        height: 1.5rem;
        background-color: transparent;
        border-style: none;
        padding: 0.25rem 0.5rem 0.25rem;
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
