<template>
  <div class="vertical">
    <div class="progress" :class="size" >
      <div class="progress-bar" :style="'height: ' + value + '%'" v-progress-bar="{data: $data}">
      </div>
    </div>
    <div class="value">{{animatedValue + '%'}}</div>
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
      },
      isActive: {
        type: Boolean,
        default: 'false'
      }
    },
    directives: {
      progressBar (el, binding) {
        binding.value.data.progressBarElement = el
      }
    },
    methods: {
      enableBarAnimation (flag) {
        if (flag) {
          this.progressBarElement.setAttribute('class', 'progress-bar active')
        } else {
          this.progressBarElement.setAttribute('class', 'progress-bar')
        }
      }
    },
    watch: {
      isActive (flag) {
        this.enableBarAnimation(flag)
      }
    },
    data () {
      return {
        animatedValue: this.value,
        progressBarElement: null
      }
    }
  }
</script>

<style lang="scss">
  .vertical {
    .progress {
      height: 5.75rem;
      float: left;
      display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
      display: -ms-flexbox;  /* TWEENER - IE 10 */
      display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
      display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
      align-items: flex-start;
      -webkit-align-items: flex-start; /* Safari 7.0+ */
    }

    .value{
      float: left;
      height: 5.75rem;
      display: flex;
      align-items: center;
      padding-left: .25rem;
    }

    .basic {
      border-radius: .5rem;
      .progress-bar {
        border-radius: .5rem;
        width: .5rem;
      }
    }

    .thin {
      border-radius: 0;
      .progress-bar {
        width: 2px;
      }
    }

    .thick {
      border-radius: 1rem;
      margin-top: calc(1.5rem/2 - 2px);
      .progress-bar {
        width: 1.5rem;
      }
    }
  }

</style>
