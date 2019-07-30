<template>
  <VbDemo>
    <VbCard title="String options (default)" style="width: 400px;">
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
      />
    </VbCard>
    <VbCard title="error" style="width: 400px;">
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
        error
      />
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
        success
      />
      <va-input-wrapper
        error
        :errorMessages="['error message']"
      >
        <va-select
          :options="defaultSelect.options"
          v-model="defaultSelect.value"
          error
        />
      </va-input-wrapper>
    </VbCard>
    <VbCard title="Object options" style="width: 400px;">
      <va-select
        label="Object value"
        v-model="objectSelect.value"
        :options="objectSelect.options"
      />
      <p>key-by='value'</p>
      <va-select
        v-model="iconsSelect.value"
        :options="iconsSelect.options"
        key-by="value"
      />
      <p>textBy='icon'</p>
      <va-select
        text-by="icon"
        v-model="iconsSelect.value"
        :options="iconsSelect.options"
      />
      <p>key-by='value' (multiple)</p>
      <va-select
        key-by="value"
        v-model="multipleValue"
        :options="iconsSelect.options"
        multiple
      />
    </VbCard>
    <VbCard title="Options with icons" style="width: 400px;">
      <va-select
        v-model="iconsSelect.value"
        :options="iconsSelect.options"
      />
    </VbCard>
    <VbCard title="No options" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="[]"
      />
      <va-select
        label="custom no options text"
        v-model="defaultSelect.value"
        :options="[]"
        no-options-text="Sorry..."
      />
    </VbCard>
    <VbCard title="Custom clear value" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        clear-value="1"
        :options="defaultSelect.options"
      />
    </VbCard>
    <VbCard title="No clear" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="defaultSelect.options"
        no-clear
      />
    </VbCard>
    <VbCard title="Placeholder" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        placeholder="select country"
      />
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
      />
    </VbCard>
    <VbCard title="Label" style="width: 400px;">
      <va-select
        label="country label"
        v-model="defaultSelect.value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="Label and placeholder" style="width: 400px;">
      <va-select
        label="country label"
        placeholder="select country"
        v-model="defaultSelect.value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="positions" style="width: 400px;">
      <div v-for="position in positions" :key="position">
        <p>{{position}}</p>
        <va-select
          :position="position"
          v-model="defaultSelect.value"
          :options="CountriesList"
        />
      </div>
    </VbCard>
    <VbCard title="disabled" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        disabled
      />
    </VbCard>
    <VbCard title="multiple" style="width: 400px;">
      <va-select
        v-model="multipleValue"
        multiple
        :options="CountriesList"
      />
      <va-select
        label="with custom tag-max"
        v-model="multipleValue"
        multiple
        :tagMax="8"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="searchable" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        searchable
      />
    </VbCard>
    <VbCard title="searchable + multiple" style="width: 400px;">
      <va-select
        v-model="multipleValue"
        :options="CountriesList"
        searchable
        multiple
      />
    </VbCard>
    <VbCard title="custom max-height (320px)" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        max-height="320px"
      />
    </VbCard>
    <VbCard title="custom width (30%)" :style="{'width': '100%'}" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        width="30%"
      />
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        width="120px"
      />
    </VbCard>
    <VbCard title="loading" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        loading
      />
    </VbCard>
    <VbCard title="with ajax" style="width: 400px;">
      <va-select
        searchable
        v-model="defaultSelect.value"
        :options="CountriesList"
        :loading="isLoading"
        @update-search="updateSearch"
      />
    </VbCard>
    <VbCard title="long textes" style="width: 400px">
      <va-select
        searchable
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        v-model="longSelect.value"
        :options="longSelect.options"
      />
    </VbCard>
    <VbCard :style="{ 'width': '100%' }">
      <p>{{defaultSelect.value}}</p>
      <p>{{objectSelect.value}}</p>
      <p>{{iconsSelect.value}}</p>
      <p>{{multipleValue}}</p>
      <p>{{longSelect.value}}</p>
    </VbCard>
  </VbDemo>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaSelect from './VaSelect'
import VaInputWrapper from '../va-input/VaInputWrapper'
import { objectOptionsList, iconOptionsList } from './getDemoData'

const positions = ['top', 'bottom']

export default {
  components: { VaInputWrapper, VaSelect },
  data () {
    return {
      defaultSelect: {
        options: ['one', 'two', 'three'],
        value: 'one',
      },
      objectSelect: {
        value: '',
        options: objectOptionsList,
      },
      iconsSelect: {
        value: '',
        options: iconOptionsList,
      },
      longSelect: {
        value: '1st long long long long option sit amet, consectetur adipiscing elit,',
        options: [
          '1st long long long long option sit amet, consectetur adipiscing elit,',
          '2nd long  sit amet, consectetur adipiscing elit, long long long long long option',
        ],
      },
      multipleValue: [],
      CountriesList,
      positions,
      isLoading: false,
    }
  },
  methods: {
    updateSearch (val) {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // eslint-disable-next-line no-console
        console.log(val)
      }, 2000)
    },
  },
}
</script>
