<template>
  <div class="wizard">
    <ul class="wizard-steps">
      <li class="wizard-step" :class="{'active': currentStep >= index, 'current': currentStep === index}" :style="{ width: 100/steps.length + '%' }" v-for="(step, index) of steps">
        <span class="wizard-step-line"></span>
        <span class="wizard-step-label">{{step.label}}</span>
        <span class="wizard-step-indicator"></span>
      </li>
    </ul>
    <div class="wizard-body">
      <div class="wizard-body-step"><slot :name="currentSlot"></slot></div>
      <div class="wizard-body-actions clearfix">
        <button v-if="backEnabled" class="btn btn-secondary wizard-back pull-left" @click="goBack()"> <span>Back</span> </button>
        <button v-if="currentStep != steps.length - 1" class="btn btn-primary wizard-next pull-right" @click="goNext()">
          <span>Next</span>
        </button>
        <button v-if="currentStep == steps.length - 1" class="btn btn-primary wizard-next pull-right final-step" @click="goNext()">
          {{finalStepLabel}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-wizard',
    props: {
      steps: {},
      finalStepLabel: {default: 'Save'},
      onNext: {},
      onBack: {}
    },
    data () {
      return {
        currentStep: 0
      }
    },
    computed: {
      currentSlot () {
        return this.steps[this.currentStep].slot
      },
      backEnabled () {
        return this.currentStep !== 0
      }
    },
    methods: {
      goNext (skipFunction) {
        if (!skipFunction && typeof this.onNext === 'function') {
          if (!this.onNext(this.currentStep)) {
            return
          }
        }
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++
        }
      },
      goBack (skipFunction) {
        if (!skipFunction && typeof this.onBack === 'function') {
          if (!this.onBack(this.currentStep)) {
            return
          }
        }
        if (this.currentStep > 0) {
          this.currentStep--
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";

  $wizard-step-height: 3.75rem;
  $wizard-step-indicator-height: 1rem;
  $wizard-step-label-font-size: $font-size-h4;

  .wizard {
    position: relative;
    width:  100%;
  }
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
      color:  $lighter-gray;
      font-size: $wizard-step-label-font-size;
      font-weight: bold;
      transition: color 300ms linear;
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
  /* Wizard body
  *******************************/
  .wizard-body{
    margin-top:  30px;
    min-height:  400px;
    margin-left:  50px;
    margin-right:  50px;
    position: relative;
    border-radius: 5px;
    padding-bottom: 50px;
  }
  .wizard-body-step{
    padding:  16px;
  }
  /* Wizard body
  *******************************/
  .wizard-body-actions{
    position:  absolute;
    bottom:  0px;
    height:  50px;
    width:  100%;
  }
</style>
