<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'forms.inputs.title' | translate">
          <form>

            <div class="va-row">
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">{{'forms.inputs.textInput'
                        | translate}}</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right"
                       :class="{'has-error': errors.has('successfulEmail'), 'valid': isSuccessfulEmailValid}">
                    <div class="input-group">
                      <input
                        id="successfulEmail"
                        name="successfulEmail"
                        v-model="successfulEmail"
                        v-validate="'required|email'"
                        required/>
                      <i
                        class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                      <i
                        class="fa fa-check valid-icon icon-right input-icon"></i>
                      <label class="control-label" for="successfulEmail">{{'forms.inputs.emailValidatedSuccess'
                        | translate}} </label><i
                      class="bar"></i>
                      <small v-show="errors.has('successfulEmail')"
                             class="help text-danger">
                        {{ errors.first('successfulEmail') }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group with-icon-right"
                       :class="{'has-error': errors.has('wrongEmail')}">
                    <div class="input-group">
                      <input
                        id="wrongEmail"
                        name="wrongEmail"
                        v-model="wrongEmail"
                        v-validate="'required|email'"
                        required/>
                      <i
                        class="fa fa-exclamation-triangle icon-right input-icon"
                        v-show="errors.has('wrongEmail')"></i>
                      <label class="control-label" for="wrongEmail">{{'forms.inputs.emailValidated'
                        | translate}}</label><i class="bar"></i>
                      <small v-show="errors.has('wrongEmail')"
                             class="help text-danger">{{
                        errors.first('wrongEmail')
                        }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <textarea type="text" id="simple-textarea"
                                required></textarea>
                      <label class="control-label" for="simple-textarea">{{'forms.inputs.textArea'
                        | translate}}</label><i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="flex md4">
                <fieldset>
                  <div class="form-group with-icon-left">
                    <div class="input-group">
                      <input id="input-icon-left" name="input-icon-left"
                             required/>
                      <i class="fa fa-envelope-o icon-left input-icon"></i>
                      <label class="control-label" for="input-icon-left">{{'forms.inputs.inputWithIcon'
                        | translate}}</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="clearableText" id="clear-input"
                             name="clear-input" required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                         @click="clear('clearableText')"></i>
                      <label class="control-label" for="clear-input"
                             role="button">{{'forms.inputs.inputWithClearButton'
                        | translate}}</label><i
                      class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="inputWithDescription" required title=""/>
                      <label class="control-label" for="simple-input">{{'forms.inputs.textInputWithDescription'
                        | translate}}</label><i
                      class="bar"></i>
                      <small class="help text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="flex md4">
                <fieldset>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn" required/>
                      <label class="control-label" for="input-w-btn">{{'forms.inputs.inputWithButton'
                        | translate}}</label><i class="bar"></i>
                    </div>
                    <div class="btn btn-micro btn-primary">
                      {{'forms.inputs.upload' | translate}}
                    </div>
                  </div>
                  <div class="form-group form-group-w-btn">
                    <div class="input-group">
                      <input id="input-w-btn-round" required/>
                      <label class="control-label" for="input-w-btn-round">{{'forms.inputs.inputWithRoundButton'
                        | translate }}</label><i
                      class="bar"></i>
                    </div>
                    <div
                      class="btn btn-primary btn-with-icon btn-micro rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-md-cloud-outline ion"></i>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="$t('forms.dateTimePicker.title')">
          <form>
            <div class="va-row">
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-basic"
                        v-model="datepicker.simple"
                      />
                      <label class="control-label" for="date-picker-basic">
                        {{ $t('forms.dateTimePicker.basic') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-time"
                        :config="{enableTime: true}"
                        v-model="datepicker.time"
                      />
                      <label class="control-label" for="date-picker-time">
                        {{ $t('forms.dateTimePicker.time') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-first-day"
                        :config="{locale: {firstDayOfWeek: 1}}"
                        v-model="datepicker.customFirstDay"
                      />
                      <label class="control-label" for="date-picker-custom-first-day">
                        {{ $t('forms.dateTimePicker.customFirstDay') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-disabled"
                        :config="{disable: datePickerDisabled}"
                        v-model="datepicker.disabled"
                      />
                      <label class="control-label" for="date-picker-disabled">
                        {{ $t('forms.dateTimePicker.disabled') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-multiple"
                        :config="{mode: 'multiple'}"
                        v-model="datepicker.multiple"
                      />
                      <label class="control-label" for="date-picker-multiple">
                        {{ $t('forms.dateTimePicker.multiple') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-date-format"
                        :config="{altInput: true, altFormat: 'F j, Y'}"
                        v-model="datepicker.customDate"
                      />
                      <label class="control-label" for="date-picker-custom-date-format">
                        {{ $t('forms.dateTimePicker.customDateFormat') }}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-range"
                        :config="{mode: 'range', inline: true}"
                        v-model="datepicker.range"
                      />
                      <label class="control-label" for="date-picker-range">
                        {{ $t('forms.dateTimePicker.range') }}
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'forms.selects.title' | translate">
          <form>
            <div class="va-row">
              <div class="flex md4">
                <fieldset>
                  <vuestic-simple-select
                    :label="'forms.selects.simple' | translate"
                    v-model="simpleSelectModel"
                    option-key="description"
                    v-bind:options="simpleOptions"
                  />
                  <vuestic-simple-select
                    :label="'forms.selects.country' | translate"
                    v-model="chosenCountry"
                    v-bind:options="countriesList"
                  />
                </fieldset>
              </div>
              <div class="flex md4">
                <fieldset>
                  <vuestic-multi-select
                    :label="'forms.selects.multi' | translate"
                    v-model="multiSelectModel"
                    option-key="description"
                    v-bind:options="simpleOptions"
                  />
                  <vuestic-multi-select
                    :label="'forms.selects.countryMulti' | translate"
                    v-model="multiSelectCountriesModel"
                    v-bind:options="countriesList"
                  />
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'forms.controls.title' | translate">
          <form>
            <div class="va-row">
              <div class="flex md3">
                <fieldset>
                  <vuestic-checkbox
                    :label="$t('forms.controls.unselected')"
                    v-model="checkbox.unselected"
                  />
                  <vuestic-checkbox
                    :label="$t('forms.controls.selected')"
                    v-model="checkbox.selected"
                  />
                  <vuestic-checkbox
                    :label="$t('forms.controls.readonly')"
                    v-model="checkbox.readonly"
                    :readonly="true"
                  />
                  <vuestic-checkbox
                    :label="$t('forms.controls.disabled')"
                    :disabled="true"
                    v-model="checkbox.disabled"
                  />
                  <vuestic-checkbox
                    :label="$t('forms.controls.error')"
                    error
                    v-model="checkbox.error"
                  />
                  <vuestic-checkbox
                    :label="$t('forms.controls.errorMessage')"
                    :error-messages="errorMessages"
                    :errorCount="2"
                    v-model="checkbox.errorMessages"
                  />
                </fieldset>
              </div>
              <div class="flex md3">
                <fieldset>
                  <vuestic-radio-button
                    option="option1"
                    v-model="radioSelectedOption"
                    label="Radio"
                  />
                  <vuestic-radio-button
                    option="option2"
                    v-model="radioSelectedOption"
                    label="Radio"
                  />
                </fieldset>
                <fieldset>
                  <vuestic-radio-button
                    option="option1"
                    disabled
                    v-model="radioSelectedDisableOption"
                    label="Disabled Radio"
                  />
                  <vuestic-radio-button
                    option="option2"
                    disabled
                    v-model="radioSelectedDisableOption"
                    label="Disabled Radio"
                  />
                </fieldset>
              </div>
              <div class="flex md3">
                <fieldset>
                  <vuestic-switch v-model="isMale">
                    <span
                      slot="trueTitle">{{'forms.controls.male' | translate}}</span>
                    <span slot="falseTitle">{{'forms.controls.female' | translate}}</span>
                  </vuestic-switch>
                </fieldset>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from 'data/CountriesList'

export default {
  name: 'form-elements',
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
      }
      return isValid
    },
  },
  data () {
    return {
      isMale: true,
      countriesList: CountriesList,
      chosenCountry: '',
      clearableText: '',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: [],
      radioSelectedOption: 'option1',
      radioSelectedDisableOption: 'option1',
      checkbox: {
        unselected: false,
        selected: true,
        readonly: true,
        disabled: true,
        error: false,
        errorMessages: true
      },
      errorMessages: ['error message 1', 'error message 2'],
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2018-05-09',
      },
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
  },
  created () {
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  },
}
</script>
