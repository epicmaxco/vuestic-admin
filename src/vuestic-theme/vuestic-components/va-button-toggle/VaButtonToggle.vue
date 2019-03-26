<template>
  <div class="va-button-toggle">
    <va-button-group>
      <va-button
        v-for="option in options"
        :key="option.value"
        :style="buttonStyle(option.value)"
        :outline="outline"
        :flat="flat"
        :disabled="disabled"
        :small="small"
        :large="large"
        :color="buttonColor(option.value)"
        :class="buttonClass(option.value)"
        @click="changeValue(option.value)">
        {{ option.label }}
      </va-button>
    </va-button-group>
  </div>
</template>

<script>
import { getGradientColor } from '../../../services/colors'

export default {
  name: 'va-button-toggle',
  props: {
    options: {
      type: Array
    },
    value: {
      type: String
    },
    outline: {
      type: Boolean
    },
    flat: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    large: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    toggleColor: {
      type: String
    },
  },
  methods: {
    buttonColor (buttonValue) {
      return buttonValue === this.value && this.toggleColor ? this.toggleColor : this.color
    },
    buttonStyle (buttonValue) {
      if (buttonValue !== this.value) {
        return {}
      }

      if (this.outline || this.flat) {
        return {
          backgroundColor: this.$themes[this.toggleColor ? this.toggleColor : this.color],
          color: '#ffffff'
        }
      } else {
        return {
          backgroundColor: 'linear-gradient(to right,' + getGradientColor(this.color)[0] +
            ',' + getGradientColor(this.color)[1] + ')',
          filter: 'brightness(85%)'
        }
      }
    },
    buttonClass (buttonValue) {
      return {
        'va-button--active': buttonValue === this.value
      }
    },
    changeValue (value) {
      this.$emit('input', value)
    }
  },
}
</script>
