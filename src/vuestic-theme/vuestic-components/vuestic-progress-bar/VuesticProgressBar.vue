<template>
  <div class="vuestic-progress-bar">
    <horizontal-bar
      :value="value"
      :text="text"
      :size="size"
      :disabled="disabled"
      :color="normalizedColor"
      v-if="type == 'horizontal' && validateValue(value) && validateSize(type, size)"
    />
    <vertical-bar
      :value="value"
      :text="text"
      :size="size"
      :disabled="disabled"
      :color="normalizedColor"
      v-if="type == 'vertical' && validateValue(value) && validateSize(type, size)"
    />
    <circle-bar
      :value="value"
      :text="text"
      :disabled="disabled"
      :color="normalizedColor"
      :background-color="normalizedBackgroundColor"
      v-if="type == 'circle' && validateValue(value)"
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
    text: {
      type: String,
      default: ''
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
  data () {
    return {
      options: {
        horizontal: [
          'thin', 'thick', 'basic'
        ],
        vertical: [
          'thin', 'basic'
        ]
      }
    }
  },
  methods: {
    validateValue (name) {
      if (name >= 0 && name <= 100) {
        return true
      } else {
        console.error('Value is not in the range!')
        return false
      }
    },
    validateSize (type, size) {
      if (this.options[type].includes(size)) {
        return true
      } else {
        console.error('This bar type is invalid!')
        return false
      }
    }
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
