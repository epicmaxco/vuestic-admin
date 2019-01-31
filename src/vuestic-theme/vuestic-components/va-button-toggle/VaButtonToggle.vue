<template>
  <div class="va-button-toggle">
    <va-button-group>
      <va-button
        v-for="option in options"
        :key="option.value"
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
      type: String
    },
    toggleColor: {
      type: String
    },
  },
  methods: {
    buttonColor (buttonValue) {
      return buttonValue === this.value && this.toggleColor ? this.toggleColor : this.color
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
