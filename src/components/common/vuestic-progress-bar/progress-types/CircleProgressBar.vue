<template>
  <div class="circle progress-bar" :style="'background-image: ' + backgroundImage">
    <div class="overlay" :style="'background-color: ' + backgroundColor + '; color: ' + color">
      <span>{{animatedValue+'%'}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'value',
      'animatedValue',
      'min',
      'max',
      'color',
      'startColor',
      'backgroundColor',
      'isActive'
    ],
    computed: {
      backgroundImage () {
        let result = {}
        if (this.animatedValue < 50) {
          let nextDeg = 90 + (3.6 * this.animatedValue) + 'deg'
          result = `linear-gradient(90deg, ${this.startColor} 50%, transparent 50%, transparent), linear-gradient(${nextDeg}, ${this.color} 50%, ${this.startColor} 50%, ${this.startColor})`
        } else {
          let nextDeg = -90 + (3.6 * (this.animatedValue - 50)) + 'deg'
          result = `linear-gradient(${nextDeg}, ${this.color} 50%, transparent 50%, transparent), linear-gradient(270deg, ${this.color} 50%, ${this.startColor} 50%, ${this.startColor})`
        }
        return result
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
