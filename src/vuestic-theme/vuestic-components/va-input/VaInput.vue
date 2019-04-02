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
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        v-on="inputListeners"
      >
    </div>
    <va-icon
      v-if="removable && value.length"
      @click.native="clearContent()"
      slot="append"
      class="va-input__close-icon"
      :color="error ? 'danger': ''"
      :style="{ color: '#babfc2'}"
      icon="ion ion-md-close ion"
    />
    <slot slot="append"/>
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
    },
    inputListeners () {
      const vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          },
          click: function (event) {
            vm.$emit('click', event)
          },
          focus: function (event) {
            vm.isFocused = true
            vm.$emit('focus', event)
          },
          blur: function (event) {
            vm.isFocused = false
            vm.$emit('blur', event)
          },
          keyup: function (event) {
            vm.$emit('keyup', event)
          },
          keydown: function (event) {
            vm.$emit('keydown', event)
          }
        }
      )
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
    display: flex;
    position: relative;

    &__label {
      position: absolute;
      bottom: 0.875rem;
      left: 0.5rem;
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
  }
}
</style>
