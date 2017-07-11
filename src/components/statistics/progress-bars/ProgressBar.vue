<template>
  <div class="custom-progress-bar">
    <horizontal-bar :min="min" :max="max" :value="value" :size="size" :color="color" v-if="type == 'horizontal'"
                    ref="bar"></horizontal-bar>
    <vertical-bar :min="min" :max="max" :value="value" :size="size" :color="color" v-if="type == 'vertical'"
                  ref="bar"></vertical-bar>
    <circle-bar :min="min" :max="max" :value="value" :color="color" v-if="type == 'circle'"
                ref="bar"></circle-bar>
  </div>
</template>

<script>
  import HorizontalBar from './progress_types/HorizontalProgressBar.vue'
  import VerticalBar from './progress_types/VerticalProgressBar.vue'
  import CircleBar from './progress_types/CircleProgressBar.vue'

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
      color: {
        type: String,
        default: '$brand-primary'
      }
    },
    data () {
      return {
        value: this.value
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../sass/mixins";
  @import "../../../../node_modules/bootstrap/scss/variables";

  .custom-progress-bar {
    font-size: $font-size-pb-value !important; //TODO: fix thick font-size
    color: $brand-primary;
    font-weight: $font-weight-bold !important; //TODO: fix thick font-weight

    .progress-bar.active {
      animation: colorchange 1s linear infinite;
      $v1: 25%;
      $v2: 75;
      @keyframes colorchange {
        25% {background-color: lighten($brand-primary, 20%)}
        75% {background-color: $brand-primary}
      }
    }
  }
</style>
