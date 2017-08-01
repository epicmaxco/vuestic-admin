<template>
  <div class="vuestic-progress-bar" v-set="{props: $props, refs: $refs, data: $data}">
    <horizontal-bar :min="min" :max="max" :value="value" :size="size" :color="color" v-if="type == 'horizontal'"
                    :isActive = "isActive" ref="bar"></horizontal-bar>
    <vertical-bar :min="min" :max="max" :value="value" :size="size" :color="color" v-if="type == 'vertical'"
                  :isActive = "isActive" ref="bar"></vertical-bar>
    <circle-bar :min="min" :max="max" :value="value" :color="color" :background-color="backgroundColor"
                :start-color="startColor" v-if="type == 'circle'" :isActive = "isActive" ref="bar"></circle-bar>
  </div>
</template>

<script>
  import HorizontalBar from './progress-types/HorizontalProgressBar.vue'
  import VerticalBar from './progress-types/VerticalProgressBar.vue'
  import CircleBar from './progress-types/CircleProgressBar.vue'

  export default {
    components: {
      HorizontalBar,
      VerticalBar,
      CircleBar
    },
    props: {
      type: {
        type: String,
        default: 'horizontal'
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      size: {
        type: String,
        default: 'basic'
      },
      colorName: {
        type: String,
        default: 'primary'
      },
      startColorName: {
        type: String,
        default: 'lighterGray'
      },
      backgroundColorName: {
        type: String,
        default: 'white'
      }
    },
    directives: {
      set (el, binding) {
        binding.value.refs.bar.progressBarElement.style.transition = 'width linear ' +
          binding.value.data.valueAnimationInterval + 'ms' + ',' + 'height linear ' +
          binding.value.data.valueAnimationInterval + 'ms'
      }
    },
    watch: {
      value () {
        this.animateValue()
        if (this.isActive !== true) {
          this.isActive = true
        }
      }
    },
    methods: {
      animateValue () {
        let startValue = this.value
        let valueMsecs = this.valueAnimationInterval / this.max
        let delta = Math.sign(this.value - this.$refs.bar.animatedValue)
        let valueInterval = setInterval(() => {
          if (!this.$refs.bar) {
            clearInterval(valueInterval)
            return
          }
          if (startValue !== this.value || this.$refs.bar.animatedValue === this.value) {
            clearInterval(valueInterval)
            if (this.value === this.max) {
              this.isActive = false
            }
          } else {
            this.$refs.bar.animatedValue += delta
          }
        }, valueMsecs)
      }
    },
    data () {
      return {
        value: 0,
        valueAnimationInterval: 2000,
        isActive: false,
        startColor: this.$store.state.app.config.palette[this.startColorName],
        color: this.$store.state.app.config.palette[this.colorName],
        backgroundColor: this.$store.state.app.config.palette[this.backgroundColorName]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../sass/mixins";
  @import "../../../../node_modules/bootstrap/scss/variables";

  .vuestic-progress-bar {
    font-size: $progress-bar-value-font-size;
    font-weight: $font-weight-bold;
    &:hover {
      cursor: pointer;
    }
  }
</style>
