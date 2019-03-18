<template>
  <VbDemo>
    <VbContainer title="use dropdown">
      <va-select
        :options="CountriesList"
        v-model="value"
      />
    </VbContainer>
    <VbContainer title="with placeholder" class="not-work">
      <va-select
        v-model="value"
        :options="CountriesList"
        placeholder="select coutry"
      />
    </VbContainer>
    <VbContainer title="positions" class="not-work">
      <div v-for="position in positions" :key="position">
        <p>{{position}}</p>
        <va-select
          :position="position"
          v-model="value"
          :options="CountriesList"
        />
      </div>
    </VbContainer>
    <VbContainer title="multiple" class="not-work">
      <va-select
        v-model="multipleValue"
        multiple
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="with label" class="not-work">
      <va-select
        label="country label"
        v-model="value"
        :options="CountriesList"
      />
    </VbContainer>
    <VbContainer title="disabled" class="not-work">
      <va-select
        v-model="value"
        :options="CountriesList"
        disabled
      />
    </VbContainer>
    <VbContainer title="options with icons" class="not-work">
      <va-select
        v-model="value"
        :options="optionsWithIcons"
        width="320px"
      />
    </VbContainer>
    <VbContainer title="sizes" class="not-work">
      <div v-for="size in sizes" :key="size">
        <p>{{size}}</p>
        <va-select
          :size="size"
          v-model="value"
          :options="CountriesList"
        />
      </div>
    </VbContainer>
    <VbContainer title="searchable" class="not-work">
      <va-select
        v-model="value"
        :options="CountriesList"
        searchable
      />
    </VbContainer>
    <VbContainer title="searchable + multiple" class="not-work">
      <va-select
        v-model="multipleValue"
        :options="CountriesList"
        searchable
        multiple
      />
    </VbContainer>
    <VbContainer title="custom width (320px)" class="not-work">
      <va-select
        v-model="value"
        :options="CountriesList"
        width="320px"
      />
    </VbContainer>
    <VbContainer title="custom max-height (320px)" class="not-work">
      <va-select
        v-model="value"
        :options="CountriesList"
        max-height="320px"
      />
    </VbContainer>
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
import VaSelect from './VaSelect'
import VuesticSimpleSelect from './VuesticSimpleSelect'
const positions = ['top', 'bottom']
const sizes = ['sm', 'md', 'lg']

export default {
  components: {
    VaSelect,
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

<style lang="scss">
  .not-work {
    background: rgba(255, 0, 0, 0.3);
  }
</style>
