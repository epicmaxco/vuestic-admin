<template>
  <div class="filters-page">
    <vuestic-widget headerText="Show filters">
      <div class="row">
        <div class="col-md-12">
          <vuestic-collapse noHeader>
            <span slot="header">
              Show filters
            </span>
            <div slot="body">
              Inputs here
            </div>
          </vuestic-collapse>
        </div>
      </div>
    </vuestic-widget>
    <vuestic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td>{{'tables.headings.name' | translate}}</td>
            <td>{{'tables.headings.email' | translate}}</td>
            <td>{{'tables.headings.city' | translate}}</td>
            <td align="right">{{'tables.headings.score' | translate}}</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in itemsFiltered" v-bind:key="item">
            <td>{{ item.itemName }}</td>
            <td>{{ item.itemEmail }}</td>
            <td>{{ item.itemCity }}</td>
            <td align="right">{{ item.itemScore }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>
    <vuestic-widget headerText="Hide filters">
      <div class="row filters-page__filter-bar-container">
        <filter-bar
          @filter="filterName"
          class="filters-page__filter-bar"
          label="Name"
        />
        <filter-bar
          @filter="filterEmail"
          class="filters-page__filter-bar"
          label="Email"
        />
        <vuestic-simple-select
          class="filters-page__filter-bar"
          label="City"
          v-model="city"
          :options="CitiesList"
        />
      </div>
      <div class="filters-page__tags">
        <vuestic-tag
          v-if="name"
          :name="`Name: ${ name }`"
          removable
          @remove="onFilterRemove"
        />
        <vuestic-tag
          v-if="email"
          :name="`Email: ${ email }`"
          removable
          @remove="user = undefined"
        />
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import CitiesList from './CitiesList'
import ItemsList from './ItemsList'

export default {
  name: 'filters',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect, ItemsList
  },
  data () {
    return {
      name: '',
      email: '',
      city: '',
      selectedCity: '',
      CitiesList,
      items: ItemsList,
      sortedList: ItemsList
    }
  },
  methods: {
    onFilterInputName (val) {
    },
    onFilterRemove () {
      this.onFilterInputName('')
    },
    filterName (val) {
      if (val.length <= this.name.length) {
        this.name = val
        this.itemsFiltered = this.items.filter(item => item.itemName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      } else {
        this.name = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
    },
    filterEmail (val) {
      if (val.length < this.email.length) {
        this.email = val
        this.itemsFiltered = this.items.filter(item => item.itemEmail.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      } else {
        this.email = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemEmail.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
    },
    filterCities (val) {
      if (!val) {
        this.city = val
        this.itemsFiltered = this.items.filter(item => item.itemCity.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      } else {
        this.city = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemCity.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
    }
  },
  computed: {
    itemsFiltered: {
      get: function () {
        return this.sortedList
      },
      set: function (sortedList) {
        this.sortedList = sortedList
      }
    }
  },
  watch: {
    city: function (val) {
      this.city = val
      this.filterCities(val)
    }
  }
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    width: 300px;
  }
  &__filter-bar-container {
    margin: 0;
    justify-content: space-between;
  }
}
</style>
