<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-multi-select
        label="Select country"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <va-multi-select
        label="Select country duplicate"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaMultiSelect from './VaMultiSelect'

export default {
  components: {
    VaMultiSelect,
  },
  data () {
    return {
      selectedCountries: [],
      CountriesList,
    }
  },
}
</script>
