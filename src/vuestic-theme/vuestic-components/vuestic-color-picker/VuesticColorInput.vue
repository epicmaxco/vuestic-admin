<template>
  <div class="vuestic-color-input">
    <color-dot
      class="vuestic-color-input__dot flex-center"
      :selected="selected"
      :color="value"
      @click="onClick"
    />
    <div class="form-group">
      <div class="input-group">
        <input
          class="vuestic-color-input__input"
          :disabled="disabled"
          v-model="valueProxy"
          :class="{'vuestic-color-input__input__pointer': disabled}"
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
.vuestic-color-input {
  display: flex;
  .form-group {
    margin-bottom: 0;
  }

  &__dot {
    margin-top: 7px;
    margin-right: 8px;
  }

  &__input {
    width: 9ch;
    &__pointer {
      cursor: pointer;
    }
  }
}

</style>
