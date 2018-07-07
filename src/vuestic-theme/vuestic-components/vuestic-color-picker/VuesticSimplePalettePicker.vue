<template>
  <div class="vuestic-simple-palette-picker">
    <ul class="vuestic-simple-palette-picker__colors">
      <color-dot
        v-for="(color, index) in palette" :key="index"
        :color="color"
        @click.native="handlerClick(color)"
        :selected="isSelected(color)"
      />
    </ul>
  </div>
</template>

<script>
import ColorDot from './ColorDot'


export default {
  name: 'vuestic-simple-palette-picker',
  components: {
    ColorDot
  },
  props: {
    palette: {
      type: Array
    },
    value: {
      default: ''
    },
  },
  data: () => {
    return {
      selectedOne: ''
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
  methods: {
    isSelected (color) {
      return this.selectedOne === color
    },
    handlerClick (color) {
      this.valueProxy = color
      this.selectedOne = color
    }
  }
}
</script>

<style lang="scss">
.vuestic-simple-palette-picker {

  &__colors {
    display: flex;
  }
}

</style>
