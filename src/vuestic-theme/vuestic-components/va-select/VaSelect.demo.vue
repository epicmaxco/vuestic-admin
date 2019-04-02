<template>
  <VbDemo>
    <VbContainer title="String options">
      <va-select
        :options="defaultSelect.options"
        v-model="defaultSelect.value"
      />
      {{defaultSelect.value}}
    </VbContainer>
    <VbContainer title="No options">
      <div :style="{color: $themes.danger}">Doesn't trigger chevron turn</div>
      <va-select :value="defaultSelect"/>
      <va-select :value="{id: 1, text: 'two'}"/>
    </VbContainer>
    <VbContainer title="Object options">
      <va-select
        label="Clone value"
        :options="objectSelect.options"
        :value="objectSelect.cloneValue"
      />
      <!--<va-select-->
        <!--label="Object with only id"-->
        <!--:options="objectSelect.options"-->
        <!--:value="objectSelect.idOnly"-->
      <!--/>-->
      <!--<va-select-->
        <!--label="Exact value"-->
        <!--:options="objectSelect.options"-->
        <!--:value="objectSelect.exactValue"-->
      <!--/>-->
    </VbContainer>
    <!--<VbContainer title="use dropdown">-->
      <!--<va-select-->
        <!--:options="CountriesList"-->
        <!--v-model="value"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="with placeholder">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--placeholder="select coutry"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="with label">-->
      <!--<va-select-->
        <!--label="country label"-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="with label and placeholder">-->
      <!--<va-select-->
        <!--label="country label"-->
        <!--placeholder="select country"-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="positions">-->
      <!--<div v-for="position in positions" :key="position">-->
        <!--<p>{{position}}</p>-->
        <!--<va-select-->
          <!--:position="position"-->
          <!--v-model="value"-->
          <!--:options="CountriesList"-->
        <!--/>-->
      <!--</div>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="options with icons">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="optionsWithIcons"-->
        <!--width="320px"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="disabled">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--disabled-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="disabled + searchable">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--disabled-->
        <!--searchable-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="multiple">-->
      <!--<va-select-->
        <!--v-model="multipleValue"-->
        <!--multiple-->
        <!--:options="CountriesList"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="searchable">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--searchable-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="searchable + multiple">-->
      <!--<va-select-->
        <!--v-model="multipleValue"-->
        <!--:options="CountriesList"-->
        <!--searchable-->
        <!--multiple-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="custom max-height (320px)">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--max-height="320px"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="custom width (320px)" :style="{'width': '100%'}" class="not-work">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--width="30%"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="loading">-->
      <!--<va-select-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--loading-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer title="with ajax">-->
      <!--<va-select-->
        <!--searchable-->
        <!--v-model="value"-->
        <!--:options="CountriesList"-->
        <!--:loading="isLoading"-->
        <!--@update-search="updateSearch"-->
      <!--/>-->
    <!--</VbContainer>-->
    <!--<VbContainer :style="{ 'width': '100%' }">-->
      <!--<p>{{value}}</p>-->
      <!--<p>{{multipleValue}}</p>-->
    <!--</VbContainer>-->
  </VbDemo>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaSelect from './VaSelect'

const positions = ['top', 'bottom']
const sizes = ['sm', 'md', 'lg']

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
        cloneValue: { id: 1, text: 'one' },
        idOnly: objectSelectOptions[0],
        exactValue: objectSelectOptions[0],
        options: objectSelectOptions,
      },
      value: '',
      multipleValue: [],
      CountriesList,
      optionsWithIcons: [
        {
          text: 'item1',
          value: 1,
          icon: 'fa-address-book',
        },
        {
          text: 'item2',
          value: 2,
          icon: 'fa-android',
        },
      ],
      positions,
      sizes,
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

<style lang="scss">
.not-work {
  background: rgba(255, 0, 0, 0.3);
}
</style>
