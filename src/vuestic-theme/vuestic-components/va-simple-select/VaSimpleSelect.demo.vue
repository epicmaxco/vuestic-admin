<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-simple-select
        label="Select country"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <va-simple-select
        label="Select country duplicate"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>

import CountriesList from '../../../data/CountriesList'
import VaSimpleSelect from './VaSimpleSelect'

export default {
  components: {
    VaSimpleSelect,
  },
  data () {
    return {
      selectedCountry: '',
      CountriesList,
    }
  },
}
</script>
