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
          @check="updateList()"
          :options="countriesList"
          :tempOptions="countriesList">
        </vuestic-simple-select>
        <!--<div class="test">-->
        <!--<h4>Select something</h4>-->
        <!--<vuestic-simple-select-->
          <!--label="Select item"-->
          <!--v-model="selectedDemoItem"-->
          <!--name="demoitem"-->
          <!--:required="true"-->
          <!--ref="selectedDemoSelect"-->
          <!--@check="updateList1($event)"-->
          <!--:options="demoArray"-->
          <!--:tempOptions="demoArray">-->
        <!--</vuestic-simple-select>-->
        <!--</div>-->
        <!--<vuestic-simple-select-->
          <!--label="Select item2"-->
          <!--v-model="selectedDemoItem1"-->
          <!--name="demo item"-->
          <!--:required="true"-->
          <!--@check="updateList2($event)"-->
          <!--:options="demoArray1"-->
          <!--:tempOptions="demoArray1">-->
        <!--</vuestic-simple-select>-->
      </div>
    </vuestic-wizard>
</template>

<script>
  import CountriesList from 'data/CountriesList'
  // import DemoList from 'data/DemoList'
  export default {
    name: 'setup-profile-tab',

    props: {
      // selectedDemoItem: {
      //   type: String,
      //   default: ''
      // },
      // demoArray: {
      //   type: Array,
      //   default: () => DemoList
      // },
      countriesList: {
        type: Array,
        default: () => CountriesList
      },
      // demoArray1: {
      //   type: Array,
      //   default: () => ['lala', 'qwera', 'lalla', 'bbbba']
      // }
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
              return this.$refs.selectedDemoSelect.isValid()
            }
          },
        ],
        selectedCountry: '',
        // selectedDemoItem: '',
        countriesList: CountriesList,
        countriesArray: CountriesList,
        // demoArray: DemoList
      }
    },
    // methods: {
    //   updateList () {
    //     console.log(this.countriesList, this.countriesArray)
    //   },
    //   updateList1 (value) {
    //     if (value === '') {
    //       this.demoArray = ['aaa', 'bbb', 'cccc', 'dddd', 'eeee', 'fffff', 'abcd', 'aabbccdd']
    //     } else {
    //       this.demoArray = DemoList.filter(item => item.search(value) === 0)
    //       console.log(value)
    //       console.log(this.demoArray.filter(item => item.search(value) === 0))
    //     }
    //   },
    //   updateList2 (value) {
    //     this.demoArray1 = this.demoArray1.filter(item => item.search(value) === 0)
    //   }
    // }
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
