<template>
  <VbDemo>
    <VbContainer :style="{ 'width': '100%' }">
      <p>{{value}}</p>
      <p>{{multipleValue}}</p>
    </VbContainer>
    <VbContainer title="basic">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="with placeholder">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
        placeholder="select coutry"
      />
    </VbContainer>
    <VbContainer title="searchable">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
        searchable
      />
    </VbContainer>
    <VbContainer title="positions">
      <vuestic-simple-select
        v-for="position in positions"
        :key="position"
        :position="position"
        v-model="value"
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="multiple">
      <vuestic-simple-select
        v-model="multipleValue"
        multiple
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="sizes">
      <vuestic-simple-select
        v-for="size in sizes"
        :key="size"
        :size="size"
        v-model="value"
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="with label">
      <vuestic-simple-select
        label="country label"
        v-model="value"
        :options="CountriesList"
        />
    </VbContainer>
    <VbContainer title="disabled">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
        disabled
      />
    </VbContainer>
    <VbContainer title="custom width (320px)">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
        width="320px"
      />
    </VbContainer>
  </VbDemo>
</template>

<script>

import CountriesList from 'data/CountriesList'
import VuesticSimpleSelect from './VuesticSimpleSelect'
const positions = ['top', 'top right', 'right', 'right bottom', 'bottom', 'left bottom', 'left', 'left top']
const sizes = ['sm', 'md', 'lg']

export default {
  components: {
    VuesticSimpleSelect,
  },
  data () {
    return {
      value: '',
      multipleValue: [],
      CountriesList,
      positions,
      sizes
    }
  },
}
</script>
