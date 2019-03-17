<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-select
        label="Select country"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-simple-select
        label="Select country duplicate"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>

import CountriesList from 'data/CountriesList'
import VuesticSimpleSelect from './VuesticSimpleSelect'

export default {
  components: {
    VuesticSimpleSelect,
  },
  data () {
    return {
      selectedCountry: '',
      CountriesList,
    }
  },
}
</script>
