<template>
      <div slot="page" class="form-wizard-tab-content">
        <vuestic-simple-select
          style="width: 200px; padding-top: 500px; left: 300px"
          label="Select country"
          v-model="selectedCountry"
          name="country"
          :required="true"
          ref="selectedCountrySelect"
          :options="countriesList">
        </vuestic-simple-select>
        <vuestic-simple-select
          style="width: 200px; left: 600px;"
          label="Select item"
          v-model="selectedDemoItem"
          name="demoitem"
          :required="true"
          ref="selectedDemoSelect"
          :options="demoArray"
          >
        </vuestic-simple-select>
       </div>
</template>

<script>
  import CountriesList from 'data/CountriesList'
  export default {
    props: {
      selectedDemoItem: {
        type: String,
        default: ''
      },
      demoArray: {
        type: Array,
        default: () => ['one', 'two', 'three', 'four', 'five']
      },
      countriesList: {
        type: Array,
        default: () => CountriesList
      },
    },

    data () {
      return {
        steps: [
          {
            slot: 'page',
            onNext: () => {
              this.$refs.selectedCountrySelect.validate()
            }
          },
        ],
        selectedCountry: '',
        countriesArray: CountriesList,
      }
    },
  }
</script>
