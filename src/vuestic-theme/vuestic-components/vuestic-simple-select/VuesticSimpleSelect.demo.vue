<template>
  <div class="row justify-content-around">
    <vuestic-simple-select
      style="width: 240px; padding-top: 400px"
      label="Select country"
      v-model="valueProxy"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select country"
      v-model="valueProxy"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select country"
      v-model="valueProxy"
      :options="countriesList">
    </vuestic-simple-select>
    <vuestic-simple-select
      style="width: 240px"
      label="Select item"
      v-model="valueProxy"
      :options="demoArray">
    </vuestic-simple-select>
  </div>
</template>

<script>
  import CountriesList from 'data/CountriesList'
  import VuesticSimpleSelect from './VuesticSimpleSelect'

  export default {
    components: {
      VuesticSimpleSelect
    },
    data () {
      return {
        selectedCountry: '',
        countriesList: CountriesList,
        selectedDemoItem: '',
        demoArray: ['one', 'two', 'three', 'four', 'five']
      }
    },
    computed: {
      valueProxy: {
        get () {
          return this.selectedCountry
        },
        set (value) {
          console.log(value)
          return value
        }
      }
    }
  }
</script>
