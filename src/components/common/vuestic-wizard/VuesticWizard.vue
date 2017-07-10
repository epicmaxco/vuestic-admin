<template>
  <div class="wizard">
    <ul class="wizard-steps">
      <li class="wizard-step" :class="{'active': currentStep >= index}" :style="{ width: 100/steps.length + '%' }" v-for="(step, index) of steps">
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

<style lang="css" scoped>
  /* Utilities
  *******************************/
  .pull-left{
    float:  left !important;
  }
  .pull-right{
    float:  right !important;
  }
  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
  /* Header Steps
  *******************************/
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
    height:  70px;
    position:  relative;
  }
  .stretch {
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 0
  }
  .wizard-step{
    height: 70px;
    vertical-align: bottom;
    display: inline-block;
    text-align: center;
    position:  relative;
  }
  .wizard-step:not(:first-child) .wizard-step-line{
    position: absolute;
    width:  100%;
    left:  -50%;
    bottom:  12px;
    height:  3px;
    background-color: #b9c7d2;
  }
  .wizard-step-indicator{
    box-sizing: content-box;
    display:  block;
    width:  16px;
    height:  16px;
    background-color: #51abe4;
    border-radius: 50%;
    border: 3px solid #fff;
    position:  absolute;
    left:  50%;
    margin-left:  -10px;
    bottom:  2px;
    z-index: 1;
  }
  .wizard-step.active .wizard-step-indicator{
    background-color: #6eb165;
  }
  .wizard-step.active:not(:first-child) .wizard-step-line{
    background-color: #6eb165; /* green */
  }
  .wizard-step-label{
    color:  #98a4af;
    font-weight: bold;
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
