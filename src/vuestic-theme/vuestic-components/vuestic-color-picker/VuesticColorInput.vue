<template>
  <div class="vuestic-color-input">
    <color-dot
      class="vuestic-color-input__dot"
      @click.native="handlerClick"
      :selected="selected"
      :color="value"
    />
    <div class="form-group">
      <div class="input-group">
        <input
          :disabled="disabled"
          v-model="valueProxy"
          placeholder="input color"
        >
        <i class="bar"/>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'
import ColorDot from './ColorDot'

export default {
  name: 'vuestic-color-input',
  components: {
    ColorDot,
    VuesticAdvancedColorPicker,
  },
  props: {
    value: {
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
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

<style lang="scss">
.vuestic-color-input {
  display: flex;

  &__dot {
    @include flex-center();
  }
}

</style>
