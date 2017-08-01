<template>
  <div class="circle progress-bar" v-progress-bar="{data: $data}" :style="'background-image: ' + backgroundImage">
    <div class="overlay" :style="'background-color: ' + backgroundColor + '; color: ' + color">
      <span>{{animatedValue+'%'}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'value',
      'min',
      'max',
      'color',
      'startColor',
      'backgroundColor',
      'isActive'
    ],
    directives: {
      progressBar (el, binding) {
        binding.value.data.progressBarElement = el
      }
    },
    methods: {
      enableBarAnimation (flag) {
      }
    },
    computed: {
      backgroundImage () {
        let result = {}
        if (this.animatedValue < 50) {
          let nextDeg = 90 + (3.6 * this.animatedValue) + 'deg'
          result = `linear-gradient(90deg, ${this.startColor} 50%, transparent 50%, transparent),
            linear-gradient(${nextDeg}, ${this.color} 50%, ${this.startColor} 50%, ${this.startColor})`
        } else {
          let nextDeg = -90 + (3.6 * (this.animatedValue - 50))
          result = `linear-gradient(${nextDeg}, ${this.color} 50%, transparent 50%, transparent),
            linear-gradient(270deg, ${this.color} 50%, ${this.startColor} 50%, ${this.startColor})`
        }
        return result
      }
//      @each $backgroundColorName in map-keys($colors-map) {
//  &.background-color-#{$backgroundColorName} {
//      .overlay {
//      background-color: map-get($colors-map, $backgroundColorName);
//    }
//  }
//  }
//      @each $progressColorName in map-keys($colors-map) {
//    $progressColor: map-get($colors-map, $progressColorName);
//  @each $startColorName in map-keys($colors-map) {
//    &.color-#{$progressColorName}.start-color-#{$startColorName} {
//        $startColor: map-get($colors-map, $startColorName);
//    &.progress-bar {
//        background-color: $progressColor;
//      .overlay {
//          color: $progressColor;
//        }
//      }
//
//    @for $i from 0 through $loops {
//      &.progress-bar.value-#{$i*$step} {
//          @if $i < $half {
//          $nextdeg: 90deg + ( $increment * $i );
//          background-image: linear-gradient(90deg, $startColor 50%, transparent 50%, transparent),
//          linear-gradient($nextdeg, $progressColor 50%, $startColor 50%, $startColor);
//        }
//      @else {
//          $nextdeg: -90deg + ( $increment * ( $i - $half ) );
//          background-image: linear-gradient($nextdeg, $progressColor 50%, transparent 50%, transparent),
//          linear-gradient(270deg, $progressColor 50%, $startColor 50%, $startColor);
//        }
//      }
//      }
//    }
//    }
//  }
    },
    watch: {
      isActive (flag) {
        this.enableBarAnimation(flag)
      }
    },
    data () {
      return {
        animatedValue: this.value,
        progressBarElement: {}
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../sass/mixins";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .vuestic-progress-bar .circle {
    $step: 1;
    $loops: round(100 / $step);
    $increment: 360 / $loops;
    $half: round($loops / 2);

    &.progress-bar {
      float: left;
      position: relative;
      width: $progress-bar-circle-diameter;
      height: $progress-bar-circle-diameter;
      padding-left: $progress-bar-circle-bw;
      padding-top: $progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
    }

    .overlay {
      width: $progress-bar-circle-overlay-diameter;
      height: $progress-bar-circle-diameter - 2*$progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }


  }
</style>
