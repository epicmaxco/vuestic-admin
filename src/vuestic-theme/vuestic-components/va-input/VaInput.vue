<template>
  <va-input-wrapper
    class="va-input"
    :class="{ 'va-input-wrapper--focused': isFocused }"
    :disabled="disabled"
    :error="error"
    :success="success"
    :messages="messages"
    :error-messages="errorMessages"
  >
    <slot name="prepend" slot="prepend"/>
    <div
      class="va-input__slot d-flex">
      <label
        :style="labelStyles"
        aria-hidden="true"
        class="va-input__slot__label title"
      >
        {{ label }}
      </label>
      <input
        class="py-1 px-2"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
    </div>
    <va-icon
      @click.native="clearContent()"
      v-if="removable"
      slot="append"
      class="pointer pb-1"
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
  extends: VaInputWrapper,
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
    }
  },
  data () {
    return {
      isFocused: false
    }
  },
  computed: {
    labelStyles () {
      return {
        color: this.error ? this.$themes.danger : ''
      }
    }
  },
  methods: {
    clearContent () {
      this.$emit('input', '')
    }
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.va-input {

    &__slot {
      position: relative;

      &__label {
        position: absolute;
        bottom: 0.625rem;
        left: 0.5rem;
      }

      &__prefix {
        color: $brand-secondary;
      }

      input {
        height: 1.5rem;
        background-color: transparent;
        border-style: none;
        outline: none;
        width: 100%;

        &::placeholder {
          color: $brand-secondary;
        }
      }
    }
  }
</style>
