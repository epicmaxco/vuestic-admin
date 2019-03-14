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
    <VbContainer title="searchable + multiple">
      <vuestic-simple-select
        v-model="multipleValue"
        :options="CountriesList"
        searchable
        multiple
      />
    </VbContainer>
    <VbContainer title="positions">
      <div v-for="position in positions" :key="position">
        <p>{{position}}</p>
        <vuestic-simple-select
          :position="position"
          v-model="value"
          :options="CountriesList"
        />
      </div>
    </VbContainer>
    <VbContainer title="multiple">
      <vuestic-simple-select
        v-model="multipleValue"
        multiple
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="sizes">
      <div v-for="size in sizes" :key="size">
        <p>{{size}}</p>
        <vuestic-simple-select
          :size="size"
          v-model="value"
          :options="CountriesList"
        />
      </div>
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
    <VbContainer title="custom max-height (320px)">
      <vuestic-simple-select
        v-model="value"
        :options="CountriesList"
        max-height="320px"
      />
    </VbContainer>
    <VbContainer title="options with icons">
      <vuestic-simple-select
        v-model="value"
        :options="optionsWithIcons"
        width="320px"
      />
    </VbContainer>
  </VbDemo>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VuesticSimpleSelect from './VuesticSimpleSelect'
const positions = ['top', 'bottom']
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
      optionsWithIcons: [
        {
          text: 'item1',
          value: 1,
          icon: 'fa-address-book'
        },
        {
          text: 'item2',
          value: 2,
          icon: 'fa-android'
        }
      ],
      positions,
      sizes
    }
  },
}
</script>
