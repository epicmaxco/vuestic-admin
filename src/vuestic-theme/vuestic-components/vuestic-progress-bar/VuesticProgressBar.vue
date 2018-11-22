<template>
  <div class="vuestic-progress-bar">
    <horizontal-bar
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
      v-if="type == 'horizontal'"
    />
    <vertical-bar
      :value="transformedValue"
      :text="text"
      :size="size"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
      v-if="type == 'vertical'"
    />
    <circle-bar
      :value="transformedValue"
      :text="text"
      :disabled="disabled"
      :animated="animated"
      :theme="theme"
      :background-theme="backgroundTheme"
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
        return value >= 0 && value <= 100
      },
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'Primary',
    },
    backgroundTheme: {
      type: String,
      default: 'White',
    },
    type: {
      type: String,
      default: 'horizontal',
    },
    size: {
      type: String,
      default: 'basic',
      validator: function (value) {
        return ['thin', 'thick', 'basic'].indexOf(value) !== -1
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      transformedValue: 0,
      valueAnimationInterval: 5000,
    }
  },
  mounted () {
    if (this.type === 'circle' && this.animated) {
      this.animateValue()
    } else {
      this.transformedValue = this.value
    }
  },
  methods: {
    animateValue () {
      let valueMsecs = this.valueAnimationInterval / 200
      let delta = Math.sign(this.value - this.transformedValue)
      let valueInterval = setInterval(() => {
        if (this.transformedValue === this.value) {
          clearInterval(valueInterval)
        } else {
          this.transformedValue += delta
        }
      }, valueMsecs)
    },
  },
}
</script>
