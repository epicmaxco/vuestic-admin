<template>
  <div class="profile-card">
    <div class="row">
      <div class="col-md-12">
        <widget header-text="Profile Card">
          <vuestic-wizard
            :steps="steps"
            wizard-layout="vertical"
            wizard-type="rich">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}">
                <div class="input-group">
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    v-validate="'required'"
                    required="required"/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">Name</label><i class="bar"></i>
                  <small v-show="errors.has('name')" class="help text-danger">{{ errors.first('name') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="country"
                name="country"
                :required="true"
                ref="countrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>Confirm selection</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>Your Profile Was Completed!</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticWizard from 'components/common/vuestic-wizard/VuesticWizard'
  import CountriesList from 'components/forms/CountriesList'
  import VuesticSimpleSelect from 'components/common/vuestic-simple-select/VuesticSimpleSelect'

  export default {
    name: 'alerts',
    components: {
      Widget,
      VuesticWizard,
      VuesticSimpleSelect
    },
    methods: {
      isFormFieldValid (field) {
        let isValid = false
        if (this.fields[field]) {
          isValid = this.fields[field].validated && this.fields[field].valid
        }
        return isValid
      },
      validateFormField (fieldName) {
        this.$validator.validate(fieldName, this[fieldName])
      }
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
            }
          },
          {
            label: 'Step 2. Country',
            slot: 'page2',
            onNext: () => {
              this.$refs.countrySelect.validate()
            },
            isValid: () => {
              return this.$refs.countrySelect.isValid()
            }
          },
          {
            label: 'Step 3. Confirm',
            slot: 'page3'
          }
        ],
        name: '',
        email: '',
        countriesList: CountriesList,
        chosenCountry: '',
        country: ''
      }
    }
  }
</script>
