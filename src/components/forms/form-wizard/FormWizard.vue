<template>
  <div class="form-wizard">
    <div class="row">
      <div class="col-md-12">
        <widget class="no-h-padding" header-text="Simple Wizard">
          <vuestic-wizard
            :steps="steps">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('email'), 'valid': isFormFieldValid('email')}">
                <div class="input-group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    v-model="email"
                    v-validate="'required|email'"
                    required="required"/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label" for="email">Email</label><i class="bar"></i>
                  <small v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="chosenCountry"
                name="country"
                :required="true"
                ref="countrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>Wizard Successfully Completed!</h4>
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

    <div class="row">
      <div class="col-md-12">
        <widget class="no-h-padding" header-text="Rich Wizard">
          <vuestic-wizard
            :steps="steps"
            wizard-type="rich">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('email'), 'valid': isFormFieldValid('email')}">
                <div class="input-group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    v-model="email"
                    v-validate="'required|email'"
                    required="required"/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label" for="email">Email</label><i class="bar"></i>
                  <small v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="chosenCountry"
                name="country"
                :required="true"
                ref="countrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>Wizard Successfully Completed!</h4>
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
  import CountriesList from '../CountriesList'
  import VuesticSimpleSelect from 'components/common/vuestic-simple-select/VuesticSimpleSelect'

  export default {
    name: 'form-wizard',
    components: {
      Widget,
      VuesticWizard,
      VuesticSimpleSelect
    },
    data () {
      return {
        steps: [
          {
            label: 'Step 1. Email',
            slot: 'page1',
            onNext: () => {
              this.$validator.validate('email')
            },
            isValid: () => {
              return this.isFormFieldValid('email')
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
            label: 'Step 3. Completed',
            slot: 'page3'
          }
        ],
        email: '',
        countriesList: CountriesList,
        chosenCountry: ''
      }
    },
    methods: {
      isFormFieldValid (field) {
        let isValid = false
        if (this.fields[field]) {
          isValid = this.fields[field].validated && this.fields[field].valid
        }
        return isValid
      }
    }
  }
</script>

<style lang="scss">

</style>
