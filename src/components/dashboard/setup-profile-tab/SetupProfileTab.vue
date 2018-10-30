<template>
  <div class="setup-profile-tab dashboard-tab">
    <vuestic-wizard
      :steps="steps"
      wizard-layout="vertical"
      :wizard-type="wizardType">
      <div slot="page1" class="form-wizard-tab-content">
        <h4>Type your name</h4>
        <p>Zebras communicate with facial expressions and sounds. They make loud
          braying or barking sounds and
          soft snorting sounds. The position of their ears, how wide open their
          eyes are, and whether they show
          their teeth all send a signal. For example, ears flat back means
          trouble, or "you better follow orders!"</p>
        <div class="form-group with-icon-right"
             :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}">
          <div class="input-group">
            <input
              type="text"
              name="name"
              v-model="name"
              v-validate="'required'"
              required="required"/>
            <i
              class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
            <i class="fa fa-check valid-icon icon-right input-icon"></i>
            <label class="control-label">Name</label><i class="bar"></i>
            <small v-show="errors.has('name')" class="help text-danger">{{
              errors.first('name') }}
            </small>
          </div>
        </div>
      </div>
      <div slot="page2" class="form-wizard-tab-content">
        <h4>Select your country</h4>
        <p>Zebras communicate with facial expressions and sounds. They make loud
          braying or barking sounds and
          soft snorting sounds. The position of their ears, how wide open their
          eyes are, and whether they show
          their teeth all send a signal. For example, ears flat back means
          trouble, or "you better follow orders!"</p>

        <vuestic-simple-select
          label="Select country"
          v-model="selectedCountry"
          name="country"
          :required="true"
          ref="selectedCountrySelect"
          :options="countriesList">
        </vuestic-simple-select>
      </div>
      <div slot="page3" class="form-wizard-tab-content">
        <h4>Confirm selection</h4>
        <p>
          Zebras communicate with facial expressions and sounds. They make loud
          braying or barking sounds and
          soft snorting sounds. The position of their ears, how wide open their
          eyes are, and whether they show
          their teeth all send a signal. For example, ears flat back means
          trouble, or "you better follow orders!"
        </p>
      </div>
      <div slot="wizardCompleted"
           class="form-wizard-tab-content wizard-completed-tab">
        <h4>Wizard completed!</h4>
        <p>
          Zebras communicate with facial expressions and sounds. They make loud
          braying or barking sounds and
          soft snorting sounds. The position of their ears, how wide open their
          eyes are, and whether they show
          their teeth all send a signal. For example, ears flat back means
          trouble, or "you better follow orders!"
        </p>
      </div>
    </vuestic-wizard>
  </div>
</template>

<script>
import CountriesList from 'data/CountriesList'

export default {
  name: 'setup-profile-tab',
  props: {
    wizardType: {
      default: 'rich',
    },
  },
  data () {
    return {
      steps: [
        {
          label: 'Step 1. Name',
          slot: 'page1',
          onNext: () => {
            this.validateFormField('name')
          },
          isValid: () => {
            return this.isFormFieldValid('name')
          },
        },
        {
          label: 'Step 2. Country',
          slot: 'page2',
          onNext: () => {
            this.$refs.selectedCountrySelect.validate()
          },
          isValid: () => {
            return this.$refs.selectedCountrySelect.isValid()
          },
        },
        {
          label: 'Step 3. Confirm',
          slot: 'page3',
        },
      ],
      selectedCountry: '',
      name: '',
      countriesList: CountriesList,
    }
  },
  methods: {
    isFormFieldValid (field) {
      let isValid = false
      if (this.formFields[field]) {
        isValid = this.formFields[field].validated && this.formFields[field].valid
      }
      return isValid
    },
    validateFormField (fieldName) {
      this.$validator.validate(fieldName, this[fieldName])
    },
  },
}
</script>

<style lang="scss" scoped>
.form-group {
  min-width: 200px;
  max-width: 360px;
  width: 80%;
}

.wizard-completed-tab {
  @include media-breakpoint-up(md) {
    margin-top: -$tab-content-pt;
  }
}

</style>
