<template>
  <VbDemo>
    <VbCard title="String options (default)">
      <p>stypes on multiple, searchable, colors</p>
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
      />
    </VbCard>
    <VbCard title="Colors">
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
        color="info"
      />
    </VbCard>
    <VbCard title="error">
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
    <VbCard title="Object options">
      <va-select
        label="Object value"
        v-model="objectSelect.value"
        :options="objectSelect.options"
      />
    </VbCard>
    <VbCard title="Options with icons">
      <va-select
        v-model="iconsSelect.value"
        :options="iconsSelect.options"
      />
      <p>keyBy='value'</p>
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
    </VbCard>
    <VbCard title="No options">
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
    <VbCard>
      <va-select
        v-model="defaultSelect.value"
        clear-value="1"
      />
    </VbCard>
    <VbCard title="Placeholder">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        placeholder="select country"
      />
    </VbCard>
    <VbCard title="Label">
      <va-select
        label="country label"
        v-model="defaultSelect.value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="Label and placeholder">
      <va-select
        label="country label"
        placeholder="select country"
        v-model="defaultSelect.value"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="positions">
      <div v-for="position in positions" :key="position">
        <p>{{position}}</p>
        <va-select
          :position="position"
          v-model="defaultSelect.value"
          :options="CountriesList"
        />
      </div>
    </VbCard>
    <VbCard title="disabled">
      <va-select
        v-model="defaultSelect.value"
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
      <va-select
        label="with custom max"
        v-model="multipleValue"
        multiple
        :max="2"
        :options="CountriesList"
      />
    </VbCard>
    <VbCard title="searchable">
      <va-select
        v-model="defaultSelect.value"
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
        v-model="defaultSelect.value"
        :options="CountriesList"
        max-height="320px"
      />
    </VbCard>
    <VbCard title="custom width (30%)" :style="{'width': '100%'}">
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
    <VbCard title="loading">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        loading
      />
    </VbCard>
    <VbCard title="with ajax">
      <va-select
        searchable
        v-model="defaultSelect.value"
        :options="CountriesList"
        :loading="isLoading"
        @update-search="updateSearch"
      />
    </VbCard>
    <VbCard title="!fixed" style="overflow: hidden">
      <va-select
        v-model="defaultSelect.value"
        :options="defaultSelect.options"
        :fixed="false"
      />
    </VbCard>
    <VbCard :style="{ 'width': '100%' }">
      <p>{{defaultSelect.value}}</p>
      <p>{{objectSelect.value}}</p>
      <p>{{iconsSelect.value}}</p>
      <p>{{multipleValue}}</p>
    </VbCard>
  </VbDemo>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaSelect from './VaSelect'
import VaInputWrapper from '../va-input/VaInputWrapper'

const positions = ['top', 'bottom']

export default {
  components: { VaInputWrapper, VaSelect },
  data () {
    const objectSelectOptions = [{ id: 1, text: 'one' }, { id: 2, text: 'two' }, { id: 3, text: 'three' }]
    const iconsSelectOptions = [
      {
        text: 'item1',
        id: 0,
        value: 0,
        icon: 'fa fa-address-book',
      },
      {
        text: 'item2',
        id: 1,
        value: 1,
        icon: 'fa fa-android',
      },
      {
        text: 'item2',
        id: 2,
        value: 2,
        icon: 'fa fa-android',
      },
      {
        text: 'item2',
        id: 3,
        value: 3,
      },
      {
        text: 'item2',
        id: 4,
        value: 4,
        icon: 'fa fa-android',
      },
    ]
    return {
      defaultSelect: {
        options: ['one', 'two', 'three'],
        value: 'one',
      },
      objectSelect: {
        value: '',
        options: objectSelectOptions,
      },
      iconsSelect: {
        value: '',
        options: iconsSelectOptions,
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
        this.CountriesList = []
      }, 2000)
    },
  },
}
</script>
