<template>
  <div class="va-color-input">
    <color-dot
      class="va-color-input__dot"
      :selected="selected"
      :color="value"
      @click="onClick"
    />
    <va-input
      class="va-color-input__input"
      v-model="valueProxy"
      :disabled="disabled"
      placeholder="input color"
    />
  </div>
</template>

<script>
import VaAdvancedColorPicker from './VaAdvancedColorPicker'
import ColorDot from './ColorDot'

export default {
  name: 'va-color-input',
  components: {
    ColorDot,
    VaAdvancedColorPicker,
  },
  props: {
    value: {
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.va-color-input {
  display: flex;
  align-items: center !important;

  .form-group {
    margin-bottom: 0;
  }

  &__dot {
    margin-right: 0.5rem;
  }

  &__input {
    margin-bottom: 0;
    width: 9ch;

    &__pointer {
      cursor: pointer;
    }
  }
}

</style>
