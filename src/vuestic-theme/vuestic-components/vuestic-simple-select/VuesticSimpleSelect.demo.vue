<template>
    <vuestic-wizard
      :steps="steps"
      wizard-layout="vertical"
      :wizard-type="wizardType">
      <div slot="page" class="form-wizard-tab-content">
        <h4>Select your country</h4>
        <vuestic-simple-select
          label="Select country"
          v-model="selectedCountry"
          name="country"
          :required="true"
          ref="selectedCountrySelect"
          @check="updateList($event)"
          :options="countriesArray">
        </vuestic-simple-select>
      </div>
    </vuestic-wizard>
</template>

<script>
  import CountriesList from 'data/CountriesList'

  export default {
    name: 'setup-profile-tab',

    props: {
      selectedCountry: {
        type: String,
        default: ''
      },
      countriesArray: {
        type: Array,
        default: () => CountriesList
      }
    },

    data () {
      return {
        steps: [
          {
            slot: 'page',
            onNext: () => {
              this.$refs.selectedCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.selectedCountrySelect.isValid()
            }
          },
        ],
        selectedCountry: '',
        countriesList: CountriesList
      }
    },
    methods: {
      updateList (value) {
        this.countriesArray = this.countriesList.filter(country => country.search(value) === 0)
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .form-group {
    min-width: 400px;
    max-width: 660px;
    width: 80%;
  }

  .form-wizard-tab-content {
    padding-top: 400px;
  }

  .wizard-completed-tab {
    @include media-breakpoint-up(md) {
       margin-top: -$tab-content-pt;
    }
  }

</style>
