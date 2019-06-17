<template>
  <VbDemo>
    <VbCard title="String options (default)">
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
      />
    </VbCard>
    <VbCard title="Object options -">
      <va-select
        label="Clone value"
        @input="input"
        :options="objectSelect.options"
        :value="objectSelect.value"
      />
      <va-select
        label="Object with only id"
        :options="objectSelect.options"
        :value="objectSelect.idOnly"
      />
      <va-select
        label="Exact value"
        :options="objectSelect.options"
        :value="objectSelect.exactValue"
      />
    </VbCard>
    <VbCard title="No options">
      <va-select :value="value" :options="[]"/>
    </VbCard>
    <VbCard title="placeholder">
      <va-select
        v-model="value"
        :options="CountriesList"
        placeholder="select coutry"
      />
    </VbCard>
    <VbCard title="positions">
      <div v-for="position in positions" :key="position">
        <p>{{position}}</p>
        <va-select
          :position="position"
          v-model="value"
          :options="CountriesList"
        />
      </div>
    </VbCard>
    <VbCard title="label">
      <va-select
        label="country label"
        v-model="value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="label and placeholder">
      <va-select
        label="country label"
        placeholder="select country"
        v-model="value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="options with icons">
      <va-select
        v-model="iconValue"
        :options="optionsWithIcons"
      />
    </VbCard>
    <VbCard title="disabled">
      <va-select
        v-model="value"
        :options="CountriesList"
        disabled
      />
    </VbCard>
    <VbCard title="multiple">
      <va-select
        v-model="multipleValue"
        multiple
        :options="CountriesList"
      />
      {{multipleValue}}
    </VbCard>
    <VbCard title="searchable">
      <va-select
        v-model="value"
        :options="CountriesList"
        searchable
      />
    </VbCard>
    <VbCard title="searchable + multiple">
      <va-select
        v-model="multipleValue"
        :options="CountriesList"
        searchable
        multiple
      />
    </VbCard>
    <VbCard title="custom max-height (320px)">
      <va-select
        v-model="value"
        :options="CountriesList"
        max-height="320px"
      />
    </VbCard>
    <VbCard title="custom width (320px)" :style="{'width': '100%'}">
      <va-select
        v-model="value"
        :options="CountriesList"
        width="30%"
      />
    </VbCard>
    <VbCard title="loading">
      <va-select
        v-model="value"
        :options="CountriesList"
        loading
      />
    </VbCard>
    <VbCard title="with ajax">
      <va-select
        searchable
        v-model="value"
        :options="CountriesList"
        :loading="isLoading"
        @update-search="updateSearch"
      />
    </VbCard>
    <VbCard :style="{ 'width': '100%' }">
      <p>{{value}}</p>
      <p>{{multipleValue}}</p>
    </VbCard>
  </VbDemo>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaSelect from './VaSelect'

const positions = ['top', 'bottom']

export default {
  components: {
    VaSelect,
  },
  data () {
    const objectSelectOptions = [{ id: 1, text: 'one' }, { id: 2, text: 'two' }, { id: 3, text: 'three' }]

    return {
      defaultSelect: {
        options: ['one', 'two', 'three'],
        value: 'one',
      },
      objectSelect: {
        value: '',
        options: objectSelectOptions,
      },
      value: '',
      multipleValue: [],
      iconValue: {},
      CountriesList,
      optionsWithIcons: [
        {
          text: 'item1',
          value: 0,
          icon: 'fa fa-address-book',
        },
        {
          text: 'item2',
          value: 1,
          icon: 'fa fa-android',
        },
        {
          text: 'item2',
          value: 2,
          icon: 'fa fa-android',
        },
        {
          text: 'item2',
          value: 3,
        },
        {
          text: 'item2',
          value: 4,
          icon: 'fa fa-android',
        },
      ],
      positions,
      isLoading: false,
    }
  },
  methods: {
    updateSearch (val) {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.CountriesList = []
      }, 2000)
    },
    input (val) {
      console.log(val)
    },
  },
}
</script>
