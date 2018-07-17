<template>
  <div class="circle-bar circle-bar__progress-bar" :class="circleBarType" :style="'background-image: ' + backgroundImage">
    <div class="circle-bar__overlay" :style="circleBarStyle">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0,
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
        type: String
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      backgroundImage () {
        let result = {}
        if (this.value < 50) {
          let nextDeg = 90 + (3.6 * this.value) + 'deg'
          result = `linear-gradient(90deg, ${this.backgroundColor} 50%, transparent 50%, transparent), linear-gradient(${nextDeg}, ${this.color} 50%, ${this.backgroundColor} 50%, ${this.backgroundColor})`
        } else {
          let nextDeg = -90 + (3.6 * (this.value - 50)) + 'deg'
          result = `linear-gradient(${nextDeg}, ${this.color} 50%, transparent 50%, transparent), linear-gradient(270deg, ${this.color} 50%, ${this.backgroundColor} 50%, ${this.backgroundColor})`
        }
        return result
      },
      circleBarStyle: function () {
        return {
          backgroundColor: this.backgroundColor,
          color: this.color
        }
      },
      circleBarType: function () {
        return {
          'circle-bar--disabled': this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .circle-bar {
    $step: 1;
    $loops: round(100 / $step);
    $increment: 360 / $loops;
    $half: round($loops / 2);

    font-size: $progress-bar-value-font-size;
    font-weight: $font-weight-bold;

    &.circle-bar__progress-bar {
      float: left;
      position: relative;
      width: $progress-bar-circle-diameter;
      height: $progress-bar-circle-diameter;
      padding-left: $progress-bar-circle-bw;
      padding-top: $progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
    }

    .circle-bar__overlay {
      width: $progress-bar-circle-overlay-diameter;
      height: $progress-bar-circle-diameter - 2*$progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.circle-bar--disabled {
      opacity: 0.5
    }
  }
</style>
