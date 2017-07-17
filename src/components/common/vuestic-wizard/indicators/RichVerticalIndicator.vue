<template>
    <ul class="wizard-steps horizontal-steps rich-steps" :class="{'completed': completed}">
      <li class="wizard-step" :class="{'active': currentStep >= index, 'current': currentStep === index}" :style="{ height: 100/steps.length + '%' }" v-for="(step, index) of steps">
        <span class="wizard-step-line"></span>
        <i class="ion ion-android-close step-icon icon-cross"></i>
        <i class="ion ion-android-done step-icon icon-check"></i>
        <span class="wizard-step-label ellipsis">{{step.label}}</span>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'vuestic-wizard-rich-horizontal-indicator',
    props: {
      steps: {
        type: Array,
        default: []
      },
      currentStep: {
        type: Number,
        default: 0
      },
      completed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../sass/_variables.scss";

  $wizard-steps-height: 100%;
  $wizard-steps-width: 100%;
  $wizard-step-label-font-size: $font-size-h4;
  $wizard-steps-padding: 0;
  $wizard-step-padding: 0.625rem 0;
  $wizard-step-icon-height: 2.25rem;
  $wizard-step-icon-fs: 3.125rem;
  $wizard-step-ion-icon-alignment: 0.5rem;
  $wizard-step-inner-item-ml: 1.25rem;

  .wizard-steps{
    list-style-type:  none;
    padding: $wizard-steps-padding;
    height: $wizard-steps-height;
    width: $wizard-steps-width;
    position:  absolute;
    top: 0;
    bottom: 0;
  }
  .wizard-step{
    padding: $wizard-step-padding;
    color:  $lighter-gray;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: color 300ms linear;

    .wizard-step-line{
      width:  2px;
      height:  100%;
      background-color: $lighter-gray;
      transition: background-color 300ms linear;
    }

    .wizard-step-label{
      margin-left: $wizard-step-inner-item-ml;
      font-size: $wizard-step-label-font-size;
      font-weight: bold;
    }

    .step-icon {
      font-size: $wizard-step-icon-fs;
      height: $wizard-step-icon-height;
      margin-left: $wizard-step-inner-item-ml;

      &.icon-cross {
        display: block;
      }

      &.icon-check {
        display: none;
      }

      &::before {
        position: relative;
        top: -$wizard-step-ion-icon-alignment;
      }
    }

    &.active {
      color: $brand-primary;

      .wizard-step-line{
        background-color: $brand-primary;
      }

      &:not(.current), .completed &.current {
        .step-icon.icon-cross {
          display: none;
        }

        .step-icon.icon-check {
          display: block;
        }
      }

      &.current {
        color: $vue-darkest-blue;
      }

      .completed &.current {
        color: $brand-primary;
      }
    }
  }
</style>
