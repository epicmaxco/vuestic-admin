<template>
  <div class="filters-page">
    <vuestic-widget headerText="Show filters">
      <div class="row">
        <div class="col-md-12">
          <div class="filters-page__tags">
            <vuestic-tag
              :name="`Name: ${ name }`"
              removable
              @remove="onFilterRemove(1)"
            />
            <vuestic-tag
              :name="`Email: ${ email }`"
              removable
              @remove="onFilterRemove(2)"
            />
            <vuestic-tag
              :name="`City: ${ city }`"
              removable
              @remove="onFilterRemove(3)"
            />
          </div>
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
          <tr v-for="item in itemsFiltered" v-bind:key="item.itemName">
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
          v-model="name"
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
          :name="`Name: ${ name }`"
          removable
          @remove="onFilterRemove(1)"
        />
        <vuestic-tag
          :name="`Email: ${ email }`"
          removable
          @remove="onFilterRemove(2)"
        />
        <vuestic-tag
          :name="`City: ${ city }`"
          removable
          @remove="onFilterRemove(3)"
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
      CitiesList,
      items: ItemsList,
      sortedList: ItemsList
    }
  },
  methods: {
    onFilterRemove (parameter) {
      if (parameter === 1) {
        this.filterName('')
      }
      if (parameter === 2) {
        this.email = ''
      }
      if (parameter === 3) {
        this.city = ''
      }
    },
    filterName (val) {
      if (val.length <= this.name.length || !this.name) {
        this.name = val
        this.itemsFiltered = this.items.filter(item => item.itemName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      } else {
        this.name = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
      this.checkCriteria(1)
    },
    filterEmail (val) {
      if (val.length <= this.email.length || !this.email) {
        this.email = val
        this.itemsFiltered = this.items.filter(item => item.itemEmail.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      } else {
        this.email = val
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemEmail.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      this.checkCriteria(2)
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
      this.checkCriteria(3)
    },
    checkCriteria (parameter) {
      if (this.city && parameter !== 3) {
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemCity.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
      if (this.email && parameter !== 2) {
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemEmail.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      if (this.name && parameter !== 1) {
        this.itemsFiltered = this.itemsFiltered.filter(item => item.itemName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
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
