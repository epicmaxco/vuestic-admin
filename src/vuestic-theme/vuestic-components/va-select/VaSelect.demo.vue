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
    <VbCard title="Placeholder" style="width: 400px;">
      <va-select
        v-model="defaultSelect.value"
        :options="CountriesList"
        placeholder="select country"
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
        label="with custom max"
        v-model="multipleValue"
        multiple
        :max="8"
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
        this.CountriesList = this.CountriesList.slice(0, Math.round(this.CountriesList.length / 2))
      }, 2000)
    },
  },
}
</script>
