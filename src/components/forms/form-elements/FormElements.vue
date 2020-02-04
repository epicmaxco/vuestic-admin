<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('forms.inputs.title')">
          <form>
            <div class="row">
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="simple"
                  placeholder="Text Input"
                />
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="withIcon"
                  placeholder="Input With Icon"
                >
                  <va-icon
                    slot="prepend"
                    color="gray"
                    name="fa fa-envelope-o"
                  />
                </va-input>
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="withButton"
                  placeholder="Input With Button"
                >
                  <va-button slot="append" style="margin-right: 0;" small>
                    UPLOAD
                  </va-button>
                </va-input>
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="successfulEmail"
                  type="email"
                  label="Email (Validated with success)"
                  success>
                </va-input>
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="clearableText"
                  placeholder="Input With Clear Button"
                  removable
                />
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="wrongEmail"
                  type="email"
                  label="Email (Validated)"
                  error
                  :error-messages="errorMessages">
                </va-input>
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="withDescription"
                  placeholder="Text Input (with description)"
                  :messages="messages"
                />
              </div>
            </div>
          </form>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="$t('forms.dateTimePicker.title')">
          <form>
            <div class="row overflow--hidden">
              <div class="flex md8">
                <div class="row row-inside">
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.basic')"
                      v-model="datepicker.simple"
                    />
                  </div>
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.time')"
                      :config="{enableTime: true}"
                      v-model="datepicker.time"
                    />
                  </div>
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.customFirstDay')"
                      :config="{locale: {firstDayOfWeek: 1}}"
                      v-model="datepicker.customFirstDay"
                      weekDays
                    />
                  </div>
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.disabled')"
                      disabled
                      v-model="datepicker.disabled"
                    />
                  </div>
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.multiple')"
                      :config="{mode: 'multiple'}"
                      v-model="datepicker.multiple"
                    />
                  </div>
                  <div class="flex xs12 sm6">
                    <va-date-picker
                      :label="$t('forms.dateTimePicker.customDateFormat')"
                      :config="{dateFormat: 'Y-M-d'}"
                      v-model="datepicker.customDate"
                    />
                  </div>
                </div>
              </div>

              <div class="flex xs12 md4">
                <va-date-picker
                  :label="$t('forms.dateTimePicker.range')"
                  :config="{mode: 'range', inline: true}"
                  v-model="datepicker.range"
                />
              </div>
            </div>
          </form>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="$t('forms.selects.title')">
          <form>
            <div class="row">
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.simple')"
                  v-model="simpleSelectModel"
                  textBy="description"
                  :options="simpleOptions"
                />
              </div>
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.multi')"
                  v-model="multiSelectModel"
                  textBy="description"
                  multiple
                  :options="simpleOptions"
                />
              </div>
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.country')"
                  v-model="chosenCountry"
                  :options="countriesList"
                />
              </div>
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.countryMulti')"
                  v-model="multiSelectCountriesModel"
                  multiple
                  :options="countriesList"
                />
              </div>
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.searchable')"
                  v-model="searchableSelectModel"
                  searchable
                  textBy="description"
                  :options="simpleOptions"
                />
              </div>
              <div class="flex md6 xs12">
                <va-select
                  :label="$t('forms.selects.searchableMulti')"
                  v-model="multiSearchableSelectModel"
                  textBy="description"
                  searchable
                  multiple
                  :options="countriesList"
                />
              </div>
            </div>
          </form>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="$t('forms.controls.title')">
          <form>
            <div class="row">
              <div class="flex md3">
                <fieldset>
                  <va-checkbox
                    :label="$t('forms.controls.unselected')"
                    v-model="checkbox.unselected"
                  />
                  <va-checkbox
                    :label="$t('forms.controls.selected')"
                    v-model="checkbox.selected"
                  />
                  <va-checkbox
                    :label="$t('forms.controls.readonly')"
                    v-model="checkbox.readonly"
                    :readonly="true"
                  />
                  <va-checkbox
                    :label="$t('forms.controls.disabled')"
                    :disabled="true"
                    v-model="checkbox.disabled"
                  />
                  <va-checkbox
                    :label="$t('forms.controls.error')"
                    error
                    v-model="checkbox.error"
                  />
                  <va-checkbox
                    :label="$t('forms.controls.errorMessage')"
                    :error-messages="errorMessages"
                    :errorCount="2"
                    v-model="checkbox.errorMessages"
                  />
                </fieldset>
              </div>
              <div class="flex md3">
                <fieldset>
                  <va-radio-button
                    option="option1"
                    v-model="radioSelectedOption"
                    label="Radio"
                  />
                  <va-radio-button
                    option="option2"
                    v-model="radioSelectedOption"
                    label="Radio"
                  />
                </fieldset>
                <fieldset>
                  <va-radio-button
                    option="option1"
                    disabled
                    v-model="radioSelectedDisableOption"
                    label="Disabled Radio"
                  />
                  <va-radio-button
                    option="option2"
                    disabled
                    v-model="radioSelectedDisableOption"
                    label="Disabled Radio"
                  />
                </fieldset>
              </div>
              <div class="flex mb3">
                <fieldset>
                  <va-toggle
                    v-model="toggles.selected"
                    label="Selected toggle"
                  />
                  <va-toggle
                    v-model="toggles.unselected"
                    label="Unselected toggle"
                  />
                  <va-toggle
                    v-model="toggles.disabled"
                    disable
                    label="Disabled toggle"
                  />
                  <va-toggle
                    v-model="toggles.disabled"
                    small
                    label="Small toggle"
                  />
                  <va-toggle
                    v-model="toggles.disabled"
                    large
                    label="Large toggle"
                  />
                </fieldset>
              </div>
            </div>
          </form>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from '../../../data/CountriesList'

export default {
  name: 'form-elements',
  data () {
    return {
      isMale: true,
      countriesList: CountriesList,
      chosenCountry: '',
      simple: '',
      withIcon: '',
      withButton: '',
      withDescription: '',
      clearableText: 'Vasili Savitski',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua.'],
      errorMessages: ['Field should contain a valid email'],
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
      searchableSelectModel: '',
      multiSearchableSelectModel: [],
      radioSelectedOption: 'option1',
      radioSelectedDisableOption: 'option1',
      checkbox: {
        unselected: false,
        selected: true,
        readonly: true,
        disabled: true,
        error: false,
        errorMessages: true,
      },
      toggles: {
        unselected: false,
        selected: true,
        disabled: true,
        small: false,
        large: false,
      },
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2017-Dec-06',
      },
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
  },
}
</script>

<style>
  .row.row-inside {
    max-width: none;
  }
</style>
