<template>
  <div class="vuestic-progress-bar">
    <horizontal-bar
      :value="value"
      :size="size"
      :disabled="disabled"
      :color="normalizedColor"
      v-if="type == 'horizontal'"
    />
    <vertical-bar
      :value="value"
      :size="size"
      :disabled="disabled"
      :color="normalizedColor"
      v-if="type == 'vertical'"
    />
    <circle-bar
      :value="value"
      :disabled="disabled"
      :color="normalizedColor"
      :background-color="normalizedBackgroundColor"
      v-if="type == 'circle'"
    />
  </div>
</template>

<script>
import HorizontalBar from './progress-types/HorizontalProgressBar.vue'
import VerticalBar from './progress-types/VerticalProgressBar.vue'
import CircleBar from './progress-types/CircleProgressBar.vue'

export default {
  name: 'vuestic-progress-bar',
  components: {
    HorizontalBar,
    VerticalBar,
    CircleBar,
  },
  props: {
    value: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: 'primary',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    type: {
      type: String,
      default: 'horizontal',
    },
    size: {
      type: String,
      default: 'basic',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizedColor: function () {
      return this.$store.state.app.config.palette[this.color]
    },
    normalizedBackgroundColor: function () {
      return this.$store.state.app.config.palette[this.backgroundColor]
    },
  },
}
</script>

<style lang="scss">
.vuestic-progress-bar {
  font-size: $progress-bar-value-font-size;
  font-weight: $font-weight-bold;
}
</style>
