<template>
    <ul class="wizard-steps horizontal-steps simple-steps">
      <li class="wizard-step" :class="{'active': currentStep >= index, 'current': currentStep === index}" :style="{ height: 100/steps.length + '%' }" v-for="(step, index) of steps">
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

  $wizard-steps-height: 100%;
  $wizard-steps-p-v: 2.5rem;
  $wizard-steps-p-h: 0;
  $wizard-step-indicator-height: 1rem;

  $wizard-step-label-font-size: $font-size-h4;
  $wizard-step-label-m-l: 2rem;
  $wizard-label-width: 100%;


  .wizard-steps{
    list-style-type:  none;
    padding: $wizard-steps-p-v $wizard-steps-p-h;
    height:  $wizard-steps-height;
    position:  absolute;
    top: 0;
    bottom: 0;
  }
  .wizard-step{
    vertical-align: bottom;
    display: flex;
    flex-direction: row;
    align-items: center;
    position:  relative;

    .wizard-step-line{
      position: absolute;
      height:  100%;
      width:  2px;
      left:  0;
      top: -50%;
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
      left:  0;
      top: calc(50% - #{$wizard-step-indicator-height}/2);
      margin-left:  -7px;
      bottom:  5px;
      z-index: 1;
      transition: background-color 300ms linear;

    }

    .wizard-step-label{
      color:  $lighter-gray;
      display: inline-block;
      width: $wizard-label-width;
      font-size: $wizard-step-label-font-size;
      font-weight: bold;
      margin-left: $wizard-step-label-m-l;
      transition: color 300ms linear;
    }

    &:first-child {
      .wizard-step-line {
        height: calc(50% + #{$wizard-steps-p-v});
        top: -$wizard-steps-p-v;
      }
    }

    &:last-child {
      .wizard-step-line {
        height: calc(150% + #{$wizard-steps-p-v});
        top: -50%;
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
