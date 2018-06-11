<template>
  <div class="row justify-content-around">
    <vuestic-simple-select
      style="width: 240px; padding-top: 400px"
      label="Select country"
      v-model="selectedCountry"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select country"
      v-model="selectedCountry"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select country"
      v-model="selectedCountry"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select item"
      v-model="selectedDemoItem"
      :options="demoArray">
    </vuestic-simple-select>
  </div>
</template>

<script>
  import CountriesList from 'data/CountriesList'

  export default {
    data () {
      return {
        selectedCountry: '',
        countriesList: CountriesList,
        selectedDemoItem: '',
        demoArray: ['one', 'two', 'three', 'four', 'five']
      }
    },
  }
</script>
