<template>
  <div class="horizontal">
    <div v-if="size != 'thick'" class="value">{{animatedValue + '%'}}</div>
    <div class="progress" :class="size" >
      <div class="progress-bar" :style="'width: ' + value + '%'" v-progress-bar="{data: $data}">
        <span v-if="size == 'thick' && value != 0" class="value">{{animatedValue + '%'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
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
      color: {
        type: String,
        default: '$brand-primary'
      }
    },
    directives: {
      progressBar (el, binding) {
        binding.value.data.progressBarElement = el
      }
    },
    watch: {
      value () {
        let animationInterval = 4000
        this.animateValue(animationInterval)
        this.enableBarAnimation(true)
      }
    },
    methods: {
      enableBarAnimation (flag) {
        if (flag) {
          this.progressBarElement.setAttribute('class', 'progress-bar active')
        } else {
          this.progressBarElement.setAttribute('class', 'progress-bar')
        }
      },
      animateValue (animationInterval) {
        let startValue = this.value
        let valueMsecs = animationInterval / this.max
        let delta = Math.sign(this.value - this.animatedValue)
        let valueInterval = setInterval(() => {
          if (startValue !== this.value || this.animatedValue === this.value) {
            clearInterval(valueInterval)
            this.enableBarAnimation(false)
          } else {
            this.animatedValue += delta
          }
        }, valueMsecs)
      }
    },
    data () {
      return {
        animatedValue: this.value,
        value: this.value,
        progressBarElement: null
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .horizontal {
    display: inline-block;
    width: 100%;
    vertical-align: middle;

    .progress-bar {
      transition: width linear 4s;
    }

    .value {
      text-align: center;
    }

    .basic {
      border-radius: .5rem;
      .progress-bar {
        border-radius: .5rem;
        height: .5rem;
      }
    }

    .thin {
      border-radius: 0;
      .progress-bar {
        height: 2px;
      }
    }

    .thick {
      border-radius: 1rem;
      margin-top: calc(1.5rem/2 - 2px);
      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        height: 1.5rem;
      }
    }

  }

</style>
