<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="t('forms.inputs.title')">
          <va-card-content>
            <form>
              <div class="row">
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="simple" placeholder="Text Input" />
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="withIcon" placeholder="Input With Icon">
                    <template #prepend>
                      <va-icon color="gray" name="envelope" />
                    </template>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="withButton" placeholder="Input With Button">
                    <template #append>
                      <va-button style="margin-right: 0" small> UPLOAD </va-button>
                    </template>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="successfulEmail" type="email" label="Email (Validated with success)" success>
                  </va-input>
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input v-model="clearableText" placeholder="Input With Clear Button" removable />
                </div>
                <div class="flex md4 sm6 xs12">
                  <va-input
                    v-model="wrongEmail"
                    type="email"
                    label="Email (Validated)"
                    error
                    :error-messages="errorMessages"
                  >
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
          </va-card-content>
        </va-card>
      </div>

      <!-- <div class="flex xs12">
        <va-card :title="t('forms.dateTimePicker.title')">
          <va-card-content>
            <form>
              <div class="row overflow--hidden">
                <div class="flex md8">
                  <div class="row row-inside">
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.basic')"
                        v-model="datepicker.simple"
                      />
                    </div>
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.time')"
                        :config="{enableTime: true}"
                        v-model="datepicker.time"
                      />
                    </div>
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.customFirstDay')"
                        :config="{locale: {firstDayOfWeek: 1}}"
                        v-model="datepicker.customFirstDay"
                        weekDays
                      />
                    </div>
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.disabled')"
                        disabled
                        v-model="datepicker.disabled"
                      />
                    </div>
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.multiple')"
                        :config="{mode: 'multiple'}"
                        v-model="datepicker.multiple"
                      />
                    </div>
                    <div class="flex xs12 sm6">
                      <va-date-picker
                        :label="t('forms.dateTimePicker.customDateFormat')"
                        :config="{dateFormat: 'Y-M-d'}"
                        v-model="datepicker.customDate"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex xs12 md4">
                  <va-date-picker
                    :label="t('forms.dateTimePicker.range')"
                    :config="{mode: 'range', inline: true}"
                    v-model="datepicker.range"
                  />
                </div>
              </div>
            </form>
          </va-card-content>
        </va-card>
      </div> -->

      <div class="flex xs12">
        <va-card :title="t('forms.selects.title')">
          <va-card-content>
            <form>
              <div class="row">
                <div class="flex md6 xs12">
                  <va-select
                    v-model="simpleSelectModel"
                    :label="t('forms.selects.simple')"
                    text-by="description"
                    track-by="id"
                    :options="simpleOptions"
                  />
                </div>
                <div class="flex md6 xs12">
                  <va-select
                    v-model="multiSelectModel"
                    :label="t('forms.selects.multi')"
                    text-by="description"
                    track-by="id"
                    multiple
                    :options="simpleOptions"
                  />
                </div>
                <div class="flex md6 xs12">
                  <va-select v-model="chosenCountry" :label="t('forms.selects.country')" :options="countriesList" />
                </div>
                <div class="flex md6 xs12">
                  <va-select
                    v-model="multiSelectCountriesModel"
                    :label="t('forms.selects.countryMulti')"
                    multiple
                    :options="countriesList"
                  />
                </div>
                <div class="flex md6 xs12">
                  <va-select
                    v-model="searchableSelectModel"
                    :label="t('forms.selects.searchable')"
                    searchable
                    text-by="description"
                    :options="simpleOptions"
                  />
                </div>
                <div class="flex md6 xs12">
                  <va-select
                    v-model="multiSearchableSelectModel"
                    :label="t('forms.selects.searchableMulti')"
                    text-by="description"
                    searchable
                    multiple
                    :options="countriesList"
                  />
                </div>
              </div>
            </form>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card :title="t('forms.controls.title')">
          <va-card-content>
            <form>
              <div class="row">
                <div class="flex md3">
                  <fieldset>
                    <va-checkbox v-model="checkbox.unselected" :label="t('forms.controls.unselected')" class="mb-2" />
                    <va-checkbox v-model="checkbox.selected" :label="t('forms.controls.selected')" class="mb-2" />
                    <va-checkbox
                      v-model="checkbox.readonly"
                      :label="t('forms.controls.readonly')"
                      :readonly="true"
                      class="mb-2"
                    />
                    <va-checkbox
                      v-model="checkbox.disabled"
                      :label="t('forms.controls.disabled')"
                      :disabled="true"
                      class="mb-2"
                    />
                    <va-checkbox v-model="checkbox.error" :label="t('forms.controls.error')" error class="mb-2" />
                    <va-checkbox
                      v-model="checkbox.errorMessages"
                      :label="t('forms.controls.errorMessage')"
                      :error-messages="errorMessages"
                      :error-count="2"
                    />
                  </fieldset>
                </div>
                <div class="flex md3">
                  <fieldset>
                    <va-radio v-model="radioSelectedOption" option="option1" label="Radio" />
                    <va-radio v-model="radioSelectedOption" option="option2" label="Radio" />
                  </fieldset>
                  <fieldset>
                    <va-radio v-model="radioSelectedDisableOption" option="option1" disabled label="Disabled Radio" />
                    <va-radio v-model="radioSelectedDisableOption" option="option2" disabled label="Disabled Radio" />
                  </fieldset>
                </div>
                <div class="flex mb3">
                  <fieldset>
                    <va-switch v-model="toggles.selected" label="Selected toggle" style="padding-right: 10px" />
                    <va-switch v-model="toggles.unselected" label="Unselected toggle" style="padding-right: 10px" />
                    <va-switch
                      v-model="toggles.disabled"
                      disabled
                      label="Disabled toggle"
                      style="padding-right: 10px"
                    />
                    <va-switch v-model="toggles.small" size="small" label="Small toggle" style="padding-right: 10px" />
                    <va-switch v-model="toggles.large" size="large" label="Large toggle" />
                  </fieldset>
                </div>
              </div>
            </form>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import CountriesList from "../data/CountriesList";
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  const countriesList = ref(CountriesList);
  const chosenCountry = ref("");
  const simple = ref("");
  const withIcon = ref("");
  const withButton = ref("");
  const withDescription = ref("");
  const clearableText = ref("Vasili Savitski");
  const successfulEmail = ref("andrei@dreamsupport.io");
  const wrongEmail = ref("andrei@dreamsupport");
  const messages = ref([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua.",
  ]);
  const errorMessages = ref(["Field should contain a valid email"]);
  const simpleOptions = ref([
    {
      id: 1,
      description: "First option",
    },
    {
      id: 2,
      description: "Second option",
    },
    {
      id: 3,
      description: "Third option",
    },
  ]);

  const simpleSelectModel = ref("");
  const multiSelectModel = ref([]);
  const multiSelectCountriesModel = ref([]);
  const searchableSelectModel = ref("");
  const multiSearchableSelectModel = ref([]);
  const radioSelectedOption = ref("option1");
  const radioSelectedDisableOption = ref("option1");
  const checkbox = ref({
    unselected: false,
    selected: true,
    readonly: true,
    disabled: true,
    error: false,
    errorMessages: true,
  });

  const toggles = ref({
    unselected: false,
    selected: true,
    disabled: true,
    small: false,
    large: false,
  });

  const datepicker = ref({
    simple: "2018-05-09",
    time: "2018-05-08 14:10",
    range: "2018-05-08 to 2018-05-23",
    disabled: "2018-05-09",
    multiple: "2018-04-25, 2018-04-27",
    customFirstDay: "2018-05-09",
    customDate: "2017-Dec-06",
  });
</script>

<style lang="scss">
  .row.row-inside {
    max-width: none;
  }

  .va-input-wrapper,
  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
