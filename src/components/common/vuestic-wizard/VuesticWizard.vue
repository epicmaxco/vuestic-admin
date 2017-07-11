<template>
  <div class="wizard">
    <simple-horizontal-indicator :steps="steps" :currentStep="currentStep"></simple-horizontal-indicator>
    
    <div class="wizard-body">
      <div class="wizard-body-step"><slot :name="currentSlot" class="step-content"></slot></div>
      <div class="wizard-body-actions clearfix">
        <button v-if="backEnabled" class="btn btn-secondary wizard-back pull-left" @click="goBack()">
          Back
        </button>
        <button v-if="!isLastStep()" class="btn btn-primary wizard-next pull-right" @click="goNext()">
          Next
        </button>
        <button v-if="currentStep == steps.length - 1" class="btn btn-primary wizard-next pull-right final-step" @click="goNext()">
          {{finalStepLabel}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import SimpleHorizontalIndicator from './indicators/SimpleHorizontalIndicator.vue'

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
    components: {
      SimpleHorizontalIndicator
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
      goNext () {
        this.currentStepOnNext()
        if (!this.isLastStep() && this.isCurrentStepValid()) {
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
      },
      isLastStep () {
        return this.currentStep === this.steps.length - 1
      },
      currentStepOnNext () {
        let step = this.steps[this.currentStep]
        if (step.onNext) {
          step.onNext()
        }
      },
      isCurrentStepValid () {
        return this.steps[this.currentStep].isValid()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";

  $wizard-body-step-h-padding: 15%;
  $wizard-body-step-v-padding: 2.25rem;

  $wizard-body-step-item-margin-bottom: $wizard-body-step-v-padding;

  .wizard {
    position: relative;
    width:  100%;
  }


  .wizard-body{
    padding: $wizard-body-step-v-padding  $wizard-body-step-h-padding;
    position: relative;
  }
  .wizard-body-step{
    > * {
      display: flex;
      flex-direction: column;
      align-items: center;

      > * {
        margin-bottom: $wizard-body-step-item-margin-bottom;
      }
    }
  }

  .wizard-body-actions{
    display: flex;
    flex-direction: row;
    justify-content: center;

    .btn:first-child:not(:last-child) {
      margin-right: $wizard-body-step-item-margin-bottom;
    }
  }
</style>
