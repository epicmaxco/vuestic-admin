<template>
    <ul class="wizard-steps horizontal-steps simple-steps">
      <li class="wizard-step" :class="{'active': currentStep >= index, 'current': currentStep === index}" :style="{ width: 100/steps.length + '%' }" v-for="(step, index) of steps">
        <span class="wizard-step-line"></span>
        <span class="wizard-step-label ellipsis">{{step.label}}</span>
        <span class="wizard-step-indicator"></span>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'vuestic-wizard-simple-horizontal-indicator',
    props: {
      steps: {
        type: Array,
        default: []
      },
      currentStep: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../sass/_variables.scss";
  @import "../../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  $wizard-step-height: 3.75rem;
  $wizard-step-indicator-height: 1rem;
  $wizard-step-label-font-size: $font-size-h4;
  $wizard-label-width: 100%;
  $wizard-label-padding: 0 0.6rem;

  .wizard-steps{
    list-style-type:  none;
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    padding:  0;
    height:  $wizard-step-height;
    position:  relative;
  }
  .wizard-step{
    height: $wizard-step-height;
    vertical-align: bottom;
    display: inline-block;
    text-align: center;
    position:  relative;

    .wizard-step-line{
      position: absolute;
      width:  100%;
      left:  -50%;
      bottom:  12px;
      height:  2px;
      background-color: $lighter-gray;
      transition: background-color 300ms linear;
    }

    .wizard-step-indicator{
      box-sizing: content-box;
      display:  block;
      width:  $wizard-step-indicator-height;
      height:  $wizard-step-indicator-height;
      background-color: $lighter-gray;
      border-radius: 50%;
      position:  absolute;
      left:  50%;
      margin-left:  -7px;
      bottom:  5px;
      z-index: 1;
      transition: background-color 300ms linear;

    }

    .wizard-step-label{
      display: inline-block;
      width: $wizard-label-width;
      padding: $wizard-label-padding;
      color:  $lighter-gray;
      font-size: $wizard-step-label-font-size;
      font-weight: bold;
      transition: color 300ms linear;

        @include media-breakpoint-only(sm) {
          font-size: $font-size-larger;
        }

        @include media-breakpoint-only(xs) {
          font-size: $font-size-base;
        }
    }

    &:first-child {
      .wizard-step-line {
        width: 50%;
        left: 0;
      }
    }

    &:last-child {
      .wizard-step-line {
        width: 150%;

      }
    }

    &.active {
      .wizard-step-indicator{
        background-color: $brand-primary;
      }
      .wizard-step-line{
        background-color: $brand-primary;
      }

      .wizard-step-label {
        color: $brand-primary;
      }

      &.current:not(:last-child) .wizard-step-label {
        color: $vue-darkest-blue;
      }
    }
  }
</style>
