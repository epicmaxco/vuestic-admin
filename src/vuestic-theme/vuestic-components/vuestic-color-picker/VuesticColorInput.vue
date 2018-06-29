<template>
  <div class="vuestic-color-input">
    <color-dot
      @click.native="handlerClick"
      :selected="selected"
      :color="value"
    />
    <div class="form-group">
      <div class="input-group">
        <input
          :disabled="disabled"
          v-model=valueProxy
          placeholder="input color"
        >
        <i class="bar"/>
      </div>
    </div>
    <div v-if="isShown === true">
      <vuestic-advanced-color-picker @input="onModelChange"/>
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
  },
  data () {
    return {
      color: '',
      mutableShow: this.show,
      selected: false
    }
  },
  computed: {
    isShown () {
      return this.mutableShow
    },
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
    handlerClick () {
      if (this.mutableShow) {
        this.mutableShow = false
      } else {
        this.mutableShow = true
      }
      if (this.selected === true) {
        this.selected = false
      } else {
        this.selected = true
      }
    },
    onModelChange (model) {
      this.$emit('input', model)
    },
  },
}
</script>
