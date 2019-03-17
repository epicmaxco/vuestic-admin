<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-multi-select
        label="Select country"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-multi-select
        label="Select country duplicate"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>

import CountriesList from 'data/CountriesList'
import VuesticMultiSelect from './VuesticMultiSelect'

export default {
  components: {
    VuesticMultiSelect,
  },
  data () {
    return {
      selectedCountries: [],
      CountriesList,
    }
  },
}
</script>
