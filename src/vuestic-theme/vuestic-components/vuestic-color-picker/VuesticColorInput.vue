<template>
  <div class="vuestic-color-input">
    <color-dot
      class="vuestic-color-input__dot"
      :selected="selected"
      :color="value"
    />
    <div class="form-group">
      <div class="input-group">
        <input
          class="vuestic-color-input__input"
          :disabled="disabled"
          v-model="valueProxy"
          placeholder="input color"
        >
        <i class="bar"
           :style="'width: ' + 9 + 'ch'"/>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'
import ColorDot from './ColorDot'
import VuesticColorPickerInput from './VuesticColorPickerInput'

export default {
  name: 'vuestic-color-input',
  components: {
    ColorDot,
    VuesticAdvancedColorPicker,
    VuesticColorPickerInput
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
    }
  },
  data () {
    return {
      color: '',
    }
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
}
</script>

<style lang="scss" scoped>
.vuestic-color-input {
  display: flex;

  .form-group {
    margin-bottom: 0;
  }

  &__dot {
    margin-top: 10px;
    margin-right: 8px;
    @include flex-center();

  }

  &__input {
    width: 9ch;
  }
}

</style>
