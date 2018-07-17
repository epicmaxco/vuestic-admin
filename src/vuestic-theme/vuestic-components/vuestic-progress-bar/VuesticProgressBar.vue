<template>
  <div class="vuestic-progress-bar">
    <horizontal-bar
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :animated="animated"
      :color="color"
      v-if="type == 'horizontal'"
    />
    <vertical-bar
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :color="color"
      v-if="type == 'vertical'"
    />
    <circle-bar
      :value="transformedValue"
      :text="text"
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
      default: 0,
      validator: function (value) {
        return value >= 0 && value < 100
      }
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    type: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String,
      default: 'basic',
      validator: function (value) {
        return ['thin', 'thick', 'basic'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      transformedValue: 0,
      valueAnimationInterval: 5000
    }
  },
  mounted () {
    if (this.animated === 'true') {
      // this.animateValue()
    } else {
      this.transformedValue = this.value
    }
  },
  methods: {
    animateValue () {
      let valueMsecs = this.valueAnimationInterval / 100
      let delta = Math.sign(this.value - this.transformedValue)
      let valueInterval = setInterval(() => {
        if (this.transformedValue === this.value) {
          clearInterval(valueInterval)
        } else {
          this.transformedValue += delta
        }
      }, valueMsecs)
    }
  },
  /* computed: {
    normalizedColor: function () {
      return this.$store.state.app.config.palette[this.color]
    },
    normalizedBackgroundColor: function () {
      return this.$store.state.app.config.palette[this.backgroundColor]
    },
  } */
}
</script>
