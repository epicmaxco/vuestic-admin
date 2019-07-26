<template>
  <div class="va-color-input">
    <color-dot
      class="va-color-input__dot"
      :selected="selected"
      :color="value"
      @click="onClick"
    />
    <div class="form-group">
      <div class="input-group">
        <input
          class="va-color-input__input"
          :disabled="disabled"
          v-model="valueProxy"
          :class="{'va-color-input__input__pointer': disabled}"
          placeholder="input color"
        >
        <va-icon name="bar" :style="'width: ' + 9 + 'ch'"/>
      </div>
    </div>
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
  align-items: baseline;

  .form-group {
    margin-bottom: 0;
  }

  &__dot {
    margin-right: 0.5rem;
  }

  &__input {
    width: 9ch;

    &__pointer {
      cursor: pointer;
    }
  }
}

</style>
