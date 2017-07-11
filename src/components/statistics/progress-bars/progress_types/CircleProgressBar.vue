<template>
  <div class="circle progress-bar"  :class="'value-' + animatedValue + ' color-' + color"
       v-progress-bar="{data: $data}">
    <div class="overlay">
      <span>{{animatedValue+'%'}}</span>
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
      radius: {
        default: '25px'
      },
      borderWidth: {
        default: '2px'
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
//        if (flag) {
//          this.progressBarElement.setAttribute('class', 'progress-bar active')
//        } else {
//          this.progressBarElement.setAttribute('class', 'progress-bar')
//        }
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
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .circle {
    $size: 48px;
    $width: 2px;
    $innerColor: white;
    $startColor: $gray-lighter;
    $step: 1;
    $loops: round(100 / $step);
    $increment: 360 / $loops;
    $half: round($loops / 2);

    &.progress-bar {
      float: left;
      position: relative;
      width: $size ;
      height: $size;
      padding-left: $width;
      padding-top: $width;
      border-radius: 50%;
      border-width: 0;
    }

    .overlay {
      width: $size - 2*$width;
      height: $size - 2*$width;
      border-radius: 50%;
      border-width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @each $name in map-keys($colors-map) {
      &.color-#{$name} {
        $progressColor: map-get($colors-map, $name);
        &.progress-bar {
          background-color: $progressColor;

          .overlay {
            color: $progressColor;
            background-color: $innerColor;
          }
        }

        @for $i from 0 through $loops {
          &.progress-bar.value-#{$i*$step} {
            @if $i < $half {
              $nextdeg: 90deg + ( $increment * $i );
              background-image: linear-gradient(90deg, $startColor 50%, transparent 50%, transparent),
              linear-gradient($nextdeg, $progressColor 50%, $startColor 50%, $startColor);
            }
            @else {
              $nextdeg: -90deg + ( $increment * ( $i - $half ) );
              background-image: linear-gradient($nextdeg, $progressColor 50%, transparent 50%, transparent),
              linear-gradient(270deg, $progressColor 50%, $startColor 50%, $startColor);
            }
          }
        }
      }
    }
  }

</style>
