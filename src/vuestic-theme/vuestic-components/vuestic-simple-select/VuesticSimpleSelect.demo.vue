<template>
  <div class="row justify-content-around">
    <vuestic-simple-select
      style="width: 240px; padding-top: 400px"
      label="Select country"
      v-model="selectedCountry"
      :options="CountriesList"
    />
    <vuestic-simple-select
      style="width: 240px"
      label="Select country duplicate"
      v-model="selectedCountry"
      :options="CountriesList"
    />
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
