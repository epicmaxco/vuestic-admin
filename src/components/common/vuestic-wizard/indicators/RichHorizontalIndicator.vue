<template>
    <ul class="wizard-steps horizontal-steps rich-steps" :class="{'completed': completed}">
      <li class="wizard-step" :class="{'active': currentStep >= index, 'current': currentStep === index}" :style="{ width: 100/steps.length + '%' }" v-for="(step, index) of steps">
        <i class="ion ion-android-close step-icon icon-cross"></i>
        <i class="ion ion-android-done step-icon icon-check"></i>
        <span class="wizard-step-label ellipsis">{{step.label}}</span>
        <span class="wizard-step-line"></span>
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
  @import "../../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  $wizard-step-height: 5.5rem;
  $wizard-step-label-font-size: $font-size-h4;
  $wizard-step-padding-v: 0;
  $wizard-step-padding-h: 0.315rem;
  $wizard-step-icon-height: 2.25rem;
  $wizard-step-icon-fs: 3.125rem;
  $wizard-step-ion-icon-alignment: 0.5rem;

  $wizard-label-width: 100%;
  $wizard-label-padding: 0 0.6rem;

  .wizard-steps{
    list-style-type:  none;
    padding: $wizard-step-padding-v $wizard-step-padding-h;
    height:  $wizard-step-height;
    position:  relative;
  }
  .wizard-step{
    height: $wizard-step-height;
    padding: $wizard-step-padding-v $wizard-step-padding-h;
    color:  $lighter-gray;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: color 300ms linear;

    .wizard-step-line{
      width:  100%;
      height:  2px;
      background-color: $lighter-gray;
      transition: background-color 300ms linear;
    }

    .wizard-step-label{
      display: inline-block;
      width: $wizard-label-width;
      padding: $wizard-label-padding;
      text-align: center;
      font-size: $wizard-step-label-font-size;
      font-weight: bold;

      @include media-breakpoint-only(sm) {
        font-size: $font-size-larger;
      }

      @include media-breakpoint-only(xs) {
        font-size: $font-size-base;
      }
    }

    .step-icon {
      font-size: $wizard-step-icon-fs;
      height: $wizard-step-icon-height;
      position: relative;
      top: $wizard-step-ion-icon-alignment;

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
