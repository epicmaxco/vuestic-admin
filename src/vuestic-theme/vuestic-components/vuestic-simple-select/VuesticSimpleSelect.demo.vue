<template>
    <vuestic-wizard
      :steps="steps"
      wizard-layout="vertical">
      <div slot="page" class="form-wizard-tab-content">
        <h4>Select your country</h4>
        <vuestic-simple-select
          label="Select country"
          v-model="selectedCountry"
          name="country"
          :required="true"
          ref="selectedCountrySelect"
          @check="updateList()"
          :options="countriesList"
          :tempOptions="countriesList">
        </vuestic-simple-select>
        <div class="test">
        <h4>Select something</h4>
        <vuestic-simple-select
          label="Select item"
          v-model="selectedDemoItem"
          name="demoitem"
          :required="true"
          ref="selectedDemoSelect"
          @check="updateList1($event)"
          :options="demoArray"
          :tempOptions="demoArray">
        </vuestic-simple-select>
        </div>
      </div>
    </vuestic-wizard>
</template>

<script>
  import CountriesList from 'data/CountriesList'
  // import DemoList from 'data/DemoList'
  export default {
    props: {
      selectedDemoItem: {
        type: String,
        default: ''
      },
      demoArray: {
        type: Array,
        default: () => ['aa', 'bbaba', 'caav', 'aabba', 'qwrrty']
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

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .test {
    padding-right: 1200px;
  }
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
