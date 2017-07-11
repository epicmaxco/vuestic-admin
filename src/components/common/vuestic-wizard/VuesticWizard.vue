<template>
  <div class="wizard" :class="wizardLayout">

    <div v-if="wizardLayout === 'horizontal'" class="indicator-container">
      <simple-horizontal-indicator v-if="wizardType === 'simple'" :steps="steps" :currentStep="currentStep"></simple-horizontal-indicator>
      <rich-horizontal-indicator v-if="wizardType === 'rich'" :steps="steps" :currentStep="currentStep"></rich-horizontal-indicator>
    </div>

    <div v-if="wizardLayout === 'vertical'" class="indicator-container">
      <rich-vertical-indicator v-if="wizardType === 'rich'" :steps="steps" :currentStep="currentStep"></rich-vertical-indicator>
      <simple-vertical-indicator v-if="wizardType === 'simple'" :steps="steps" :currentStep="currentStep"></simple-vertical-indicator>
    </div>

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
  import RichHorizontalIndicator from './indicators/RichHorizontalIndicator.vue'
  import RichVerticalIndicator from './indicators/RichVerticalIndicator.vue'
  import SimpleVerticalIndicator from './indicators/SimpleVerticalIndicator.vue'

  export default {
    name: 'vuestic-wizard',
    props: {
      steps: {},
      wizardType: {
        type: String,
        default: 'simple'
      },
      wizardLayout: {
        type: String,
        default: 'horizontal'
      },
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
      SimpleHorizontalIndicator,
      RichHorizontalIndicator,
      RichVerticalIndicator,
      SimpleVerticalIndicator
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

  $wizard-body-vl-step-h-padding: 7%;
  $wizard-indicator-vl-width: 20rem;
  $wizard-body-vl-min-height: 20rem;

  $wizard-body-hl-step-h-padding: 15%;

  $wizard-body-step-v-padding: 2.25rem;
  $wizard-body-step-item-margin-bottom: $wizard-body-step-v-padding;



  .wizard {
    position: relative;
    width:  100%;
    display: flex;

    &.horizontal {
      flex-direction: column;
    }

    &.vertical {
      flex-direction: row;
    }
  }


  .wizard-body{
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

  .vertical {
    .wizard-body {
      min-height: $wizard-body-vl-min-height;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: $wizard-body-step-v-padding  $wizard-body-vl-step-h-padding;
    }

    .indicator-container {
      flex-basis: $wizard-indicator-vl-width;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  .horizontal {
    .wizard-body {
      padding: $wizard-body-step-v-padding $wizard-body-hl-step-h-padding;
    }
  }
</style>
