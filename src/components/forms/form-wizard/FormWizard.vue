<template>
  <div class="form-wizard-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="no-h-padding" :headerText="$t('forms.wizard.simple')">
          <vuestic-wizard
            :steps="hsSteps">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('hsName'), 'valid': isFormFieldValid('hsName')}">
                <div class="input-group">
                  <input
                    name="hsName"
                    v-model="hsName"
                    v-validate="'required'"
                    required title=""/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">{{'forms.wizard.name' | translate}}</label><i class="bar"></i>
                  <small v-show="errors.has('hsName')" class="help text-danger">{{ errors.first('hsName') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="hsCountry"
                name="country"
                :required="true"
                ref="hsCountrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.completed' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="no-h-padding" :headerText="$t('forms.wizard.rich')">
          <vuestic-wizard
            :steps="hrSteps"
            wizard-type="rich">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('hrName'), 'valid': isFormFieldValid('hrName')}">
                <div class="input-group">
                  <input
                    name="hrName"
                    v-model="hrName"
                    v-validate="'required'"
                    required title=""/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">{{'forms.wizard.name' | translate}}</label><i class="bar"></i>
                  <small v-show="errors.has('hrName')" class="help text-danger">{{ errors.first('hrName') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="hrCountry"
                name="country"
                :required="true"
                ref="hrCountrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.completed' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('forms.wizard.verticalRich')">
          <vuestic-wizard
            :steps="vrSteps"
            wizard-layout="vertical"
            wizard-type="rich">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('vrName'), 'valid': isFormFieldValid('vrName')}">
                <div class="input-group">
                  <input
                    name="vrName"
                    v-model="vrName"
                    v-validate="'required'"
                    required title=""/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">{{'forms.wizard.name' | translate}}</label><i class="bar"></i>
                  <small v-show="errors.has('vrName')" class="help text-danger">{{ errors.first('vrName') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="vrCountry"
                name="country"
                :required="true"
                ref="vrCountrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.completed' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="simple-vertical-wizard-widget" :headerText="$t('forms.wizard.verticalSimple')">
          <vuestic-wizard
            :steps="vsSteps"
            wizard-layout="vertical"
            wizard-type="simple">
            <div slot="page1" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <div class="form-group with-icon-right" :class="{'has-error': errors.has('vsName'), 'valid': isFormFieldValid('vsName')}">
                <div class="input-group">
                  <input
                    name="vsName"
                    v-model="vsName"
                    v-validate="'required'"
                    required title=""/>
                  <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">{{'forms.wizard.name' | translate}}</label><i class="bar"></i>
                  <small v-show="errors.has('vsName')" class="help text-danger">{{ errors.first('vsName') }}</small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <p>Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"</p>
              <vuestic-simple-select
                label="Select country"
                v-model="vsCountry"
                name="country"
                :required="true"
                ref="vsCountrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.completed' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticWizard from '../../vuestic-components/vuestic-wizard/VuesticWizard'
  import CountriesList from '../CountriesList'
  import VuesticSimpleSelect from '../../vuestic-components/vuestic-simple-select/VuesticSimpleSelect'

  export default {
    name: 'form-wizard',
    components: {
      VuesticWizard,
      VuesticSimpleSelect
    },
    computed: {
      hsSteps () {
        return [
          {
            label: this.$t('forms.wizard.stepOne'),
            slot: 'page1',
            onNext: () => {
              this.validateFormField('hsName')
            },
            isValid: () => {
              return this.isFormFieldValid('hsName')
            }
          },
          {
            label: this.$t('forms.wizard.stepTwo'),
            slot: 'page2',
            onNext: () => {
              this.$refs.hsCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.hsCountrySelect.isValid()
            }
          },
          {
            label: this.$t('forms.wizard.stepThree'),
            slot: 'page3'
          }
        ]
      },
      hrSteps () {
        return [
          {
            label: this.$t('forms.wizard.stepOne'),
            slot: 'page1',
            onNext: () => {
              this.validateFormField('hrName')
            },
            isValid: () => {
              return this.isFormFieldValid('hrName')
            }
          },
          {
            label: this.$t('forms.wizard.stepTwo'),
            slot: 'page2',
            onNext: () => {
              this.$refs.hrCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.hrCountrySelect.isValid()
            }
          },
          {
            label: this.$t('forms.wizard.stepThree'),
            slot: 'page3'
          }
        ]
      },
      vrSteps () {
        return [
          {
            label: this.$t('forms.wizard.stepOne'),
            slot: 'page1',
            onNext: () => {
              this.validateFormField('vrName')
            },
            isValid: () => {
              return this.isFormFieldValid('vrName')
            }
          },
          {
            label: this.$t('forms.wizard.stepTwo'),
            slot: 'page2',
            onNext: () => {
              this.$refs.vrCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.vrCountrySelect.isValid()
            }
          },
          {
            label: this.$t('forms.wizard.stepThree'),
            slot: 'page3'
          }
        ]
      },
      vsSteps () {
        return [
          {
            label: this.$t('forms.wizard.stepOne'),
            slot: 'page1',
            onNext: () => {
              this.validateFormField('vsName')
            },
            isValid: () => {
              return this.isFormFieldValid('vsName')
            }
          },
          {
            label: this.$t('forms.wizard.stepTwo'),
            slot: 'page2',
            onNext: () => {
              this.$refs.vsCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.vsCountrySelect.isValid()
            }
          },
          {
            label: this.$t('forms.wizard.stepThree'),
            slot: 'page3'
          }
        ]
      }
    },
    data () {
      return {
        hsName: '',
        hsCountry: '',
        hrName: '',
        hrCountry: '',
        vrName: '',
        vrCountry: '',
        vsName: '',
        vsCountry: '',
        email: '',
        countriesList: CountriesList,
        chosenCountry: ''
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
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .widget.simple-vertical-wizard-widget {
    .widget-body {
      padding: 0 $widget-padding;
      @include media-breakpoint-down(sm) {
        padding: $widget-padding 0;
      }
    }
  }

  .form-wizard-page {
    .form-group {
      min-width: 200px;
      max-width: 360px;
      width: 80%;
    }
  }
</style>
