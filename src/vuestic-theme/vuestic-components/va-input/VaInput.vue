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
      class="va-input__slot">
      <label
        :style="labelStyles"
        aria-hidden="true"
        class="va-input__slot__label"
      >
        {{ label }}
      </label>
      <input
        :style="{ paddingBottom: label ? '0.125rem' : '0.875rem'}"
        :aria-label="label"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        v-on="inputListeners"
      >
    </div>
    <va-icon
      v-if="success"
      slot="append"
      icon="fa fa-check"
      color="success"
    />
    <va-icon
      v-if="error"
      slot="append"
      icon="fa fa-exclamation-triangle"
      color="danger"
    />
    <slot slot="append"/>
    <va-icon
      v-if="removable && value.length"
      @click.native="clearContent()"
      slot="append"
      class="va-input__close-icon"
      :color="error ? 'danger': 'gray'"
      icon="ion ion-md-close ion"
    />
  </va-input-wrapper>
</template>

<script>
import VaInputWrapper from '../va-input/VaInputWrapper'
import VaIcon from '../va-icon/VaIcon'

export default {
  name: 'va-input',
  extends: VaInputWrapper,
  components: { VaInputWrapper, VaIcon },
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
      default: 'text',
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    removable: {
      type: Boolean,
    },
  },
  data () {
    return {
      isFocused: false,
    }
  },
  computed: {
    labelStyles () {
      return {
        color: this.error ? this.$themes.danger : '',
      }
    },
    inputListeners () {
      return Object.assign({},
        this.$listeners,
        {
          input: event => {
            this.$emit('input', event.target.value)
          },
          click: event => {
            this.$emit('click', event)
          },
          focus: event => {
            this.isFocused = true
            this.$emit('focus', event)
          },
          blur: event => {
            this.isFocused = false
            this.$emit('blur', event)
          },
          keyup: event => {
            this.$emit('keyup', event)
          },
          keydown: event => {
            this.$emit('keydown', event)
          },
        }
      )
    },
  },
  methods: {
    clearContent () {
      this.$emit('input', '')
    },
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.va-input {

  &__slot {
    display: flex;
    position: relative;
    width: 100%;

    &__label {
      position: absolute;
      bottom: 0.875rem;
      left: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      color: $vue-green;
      font-size: 0.625rem;
      letter-spacing: 0.0375rem;
      line-height: 1.2;
      font-weight: bold;
      text-transform: uppercase;
    }

    input {
      width: 100%;
      height: 1.5rem;
      margin-bottom: 0.125rem;
      padding: 0.25rem 0.5rem;
      color: #34495e;
      background-color: transparent;
      border-style: none;
      outline: none;
      font-size: 1rem;
      font-family: $font-family-sans-serif;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;

      &::placeholder {
        color: $brand-secondary;
      }

      &:placeholder-shown {
        padding-bottom: 0.875rem;
      }
    }
  }

  &__close-icon {
    cursor: pointer;
    margin-left: 0.25rem;
  }
}
</style>
