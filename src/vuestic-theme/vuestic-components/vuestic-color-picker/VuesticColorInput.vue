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
          :disabled="disabled"
          v-model="valueProxy"
          placeholder="input color"
        >
        <i class="bar"
           :style="'width: ' + barSize + 'px'"/>
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
    barSize: {
      get () {
        if (this.value.length !== 0) {
          return this.value.length * 12
        } else {
          return 10
        }
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.vuestic-color-input {
  display: flex;

  &__dot {
    margin-top: 15px;
    margin-right: 15px;
    @include flex-center();
  }
}

</style>
