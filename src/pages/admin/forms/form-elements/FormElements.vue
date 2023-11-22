<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('forms.inputs.title') }}</VaCardTitle>
      <VaCardContent>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="simple" placeholder="Text Input" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="withIcon" placeholder="Input With Icon">
                <template #prepend>
                  <VaIcon color="gray" name="envelope" />
                </template>
              </VaInput>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="withButton" placeholder="Input With Button">
                <template #append>
                  <VaButton small style="margin-right: 0"> UPLOAD</VaButton>
                </template>
              </VaInput>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="successfulEmail" label="Email (Validated with success)" success type="email"></VaInput>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="clearableText" clearable placeholder="Input With Clear Button" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput
                v-model="wrongEmail"
                :error-messages="errorMessages"
                error
                label="Email (Validated)"
                type="email"
              >
              </VaInput>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaInput v-model="withDescription" :messages="messages" placeholder="Text Input (with description)" />
            </div>
          </div>
        </form>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('forms.dateTimePicker.title') }}</VaCardTitle>
      <VaCardContent>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput v-model="dateInput.simple" :label="t('forms.dateTimePicker.basic')" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput v-model="dateInput.simple" :label="t('forms.dateTimePicker.manualInput')" manual-input />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput v-model="dateInput.disabled" :label="t('forms.dateTimePicker.disabled')" disabled />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput
                v-model="dateInput.multiple"
                :label="t('forms.dateTimePicker.multiple')"
                clearable
                mode="multiple"
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput v-model="dateInput.range" :label="t('forms.dateTimePicker.range')" clearable mode="range" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaDateInput
                v-model="dateInput.simple"
                :label="t('forms.dateTimePicker.customFirstDay')"
                first-weekday="Monday"
                highlight-weekend
              />
            </div>
          </div>
        </form>
      </VaCardContent>

      <VaDivider />

      <VaCardContent>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaTimeInput v-model="dateInput.simple" :label="t('forms.dateTimePicker.basic')" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaTimeInput v-model="dateInput.simple" :label="t('forms.dateTimePicker.manualInput')" manual-input />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <VaTimeInput v-model="dateInput.simple" :label="t('forms.dateTimePicker.disabled')" disabled />
            </div>
          </div>
        </form>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('forms.selects.title') }}</VaCardTitle>
      <VaCardContent>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect
                v-model="simpleSelectModel"
                :label="t('forms.selects.simple')"
                :options="simpleOptions"
                text-by="description"
                track-by="id"
              />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect
                v-model="multiSelectModel"
                :label="t('forms.selects.multi')"
                :options="simpleOptions"
                multiple
                text-by="description"
                track-by="id"
              />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect v-model="chosenCountry" :label="t('forms.selects.country')" :options="countriesList" />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect
                v-model="multiSelectCountriesModel"
                :label="t('forms.selects.countryMulti')"
                :options="countriesList"
                multiple
              />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect
                v-model="searchableSelectModel"
                :label="t('forms.selects.searchable')"
                :options="simpleOptions"
                searchable
                text-by="description"
                track-by="id"
              />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <VaSelect
                v-model="multiSearchableSelectModel"
                :label="t('forms.selects.searchableMulti')"
                :options="countriesList"
                multiple
                searchable
                text-by="description"
              />
            </div>
          </div>
        </form>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('forms.controls.title') }}</VaCardTitle>
      <VaCardContent>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <fieldset class="md:col-span-6 col-span-12 grid grid-cols-1 md:grid-cols-3 gap-2">
              <VaCheckbox v-model="checkbox.unselected" :label="t('forms.controls.unselected')" />
              <VaCheckbox v-model="checkbox.selected" :label="t('forms.controls.selected')" />
              <VaCheckbox v-model="checkbox.readonly" :label="t('forms.controls.readonly')" readonly />
              <VaCheckbox v-model="checkbox.disabled" :label="t('forms.controls.disabled')" disabled />
              <VaCheckbox v-model="checkbox.error" :label="t('forms.controls.error')" error />
              <VaCheckbox
                v-model="checkbox.errorMessages"
                :error-count="2"
                :error-messages="errorMessages"
                :label="t('forms.controls.errorMessage')"
                error
              />
            </fieldset>

            <div class="md:col-span-6 col-span-12 grid grid-cols-2">
              <fieldset class="flex flex-col">
                <VaRadio v-model="radioSelectedOption" label="Radio-1" option="option1" />
                <VaRadio v-model="radioSelectedOption" label="Radio-2" option="option2" />
              </fieldset>
              <fieldset class="flex flex-col">
                <VaRadio v-model="radioSelectedDisableOption" disabled label="Disabled Radio-1" option="option1" />
                <VaRadio v-model="radioSelectedDisableOption" disabled label="Disabled Radio-2" option="option2" />
              </fieldset>
            </div>

            <div class="col-span-full md:col-span-8 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <VaSwitch v-model="toggles.selected" class="mr-8 mb-2" label="Selected toggle" />
                <VaSwitch v-model="toggles.unselected" class="mr-8 mb-2" label="Unselected toggle" />
              </fieldset>
              <fieldset class="flex flex-col">
                <VaSwitch v-model="toggles.disabled" class="mr-8 mb-2" disabled label="Disabled toggle" />
                <VaSwitch v-model="toggles.disabled" class="mr-8 mb-2" label="Readonly toggle" readonly />
              </fieldset>
              <fieldset class="flex flex-col">
                <VaSwitch v-model="toggles.small" class="mr-8 mb-2" label="Small toggle" size="small" />
                <VaSwitch v-model="toggles.large" class="mr-8 mb-2" label="Large toggle" size="large" />
              </fieldset>
            </div>
          </div>
        </form>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CountriesList from '../data/CountriesList'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const countriesList = ref(CountriesList)
const chosenCountry = ref('')
const simple = ref('')
const withIcon = ref('')
const withButton = ref('')
const withDescription = ref('')
const clearableText = ref('Vasili Savitski')
const successfulEmail = ref('andrei@dreamsupport.io')
const wrongEmail = ref('andrei@dreamsupport')
const messages = ref([
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua.',
])
const errorMessages = ref(['Field should contain a valid email'])
const simpleOptions = ref([
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
])

const simpleSelectModel = ref('')
const multiSelectModel = ref([])
const multiSelectCountriesModel = ref([])
const searchableSelectModel = ref('')
const multiSearchableSelectModel = ref([])
const radioSelectedOption = ref('option1')
const radioSelectedDisableOption = ref('option1')
const checkbox = ref({
  unselected: false,
  selected: true,
  readonly: true,
  disabled: true,
  error: false,
  errorMessages: true,
})

const toggles = ref({
  unselected: false,
  selected: true,
  disabled: true,
  small: false,
  large: false,
})

const datePlusDay = (date: Date, days: number) => {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

const dateInput = ref({
  simple: new Date(),
  disabled: '2018-05-09',
  range: { start: new Date(), end: datePlusDay(new Date(), 7) },
  multiple: ['2018-04-25', '2018-04-27'],
})
</script>

<style lang="scss" scoped>
fieldset {
  margin-bottom: 0.5rem;
}
</style>
