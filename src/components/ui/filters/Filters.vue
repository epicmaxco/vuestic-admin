<template>
  <div class="filters">
    <va-card title="Show filters">
      <div class="va-row">
        <div class="flex md3">
          <filter-bar
            v-model="name"
            label="Name"
          />
        </div>
        <div class="flex md3 offset--md1">
          <filter-bar
            v-model="email"
            label="Email"
          />
        </div>
        <div class="flex md3 offset--md1">
          <vuestic-simple-select
            label="City"
            v-model="city"
            :options="cityList"
          />
        </div>
        <div class="filters-page__tags d-flex align--center">
          <vuestic-tag
            v-if="name"
            :name="`Name: ${ name }`"
            removable
            @remove="name = ''"
          />
          <vuestic-tag
            v-if="email"
            :name="`Email: ${ email }`"
            removable
            @remove="email = ''"
          />
          <vuestic-tag
            v-if="city"
            :name="`City: ${ city }`"
            removable
            @remove="city = ''"
          />
          <va-button
            v-if="this.city || this.name || this.email"
            flat
            @click="clearAll">
            Clear all filters
          </va-button>
        </div>
      </div>
    </va-card>
    <va-card>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="title">{{ $t('tables.headings.name') }}</td>
            <td class="title">{{ $t('tables.headings.email') }}</td>
            <td class="title">{{ $t('tables.headings.city') }}</td>
            <td align="right" class="title">{{ $t('tables.headings.score') }}</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" v-bind:key="item.email">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.city }}</td>
            <td align="right">{{ item.score }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </va-card>
  </div>
</template>

<script>
import VaCard from '../../../vuestic-theme/vuestic-components/va-card/VaCard'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import { cityList, itemList } from './filtersData'

export default {
  name: 'filters',
  components: {
    VaCard, FilterBar, SpringSpinner, VuesticSimpleSelect,
  },
  data () {
    return {
      name: '',
      email: '',
      city: '',
      cityList: cityList,
      itemList: itemList,
    }
  },
  methods: {
    clearAll () {
      this.name = ''
      this.email = ''
      this.city = ''
    },
  },
  computed: {
    filteredItems () {
      let filteredItems = this.itemList
      if (this.name) {
        filteredItems = filteredItems.filter(item => item.name.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
      if (this.email) {
        filteredItems = filteredItems.filter(item => item.email.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      if (this.city) {
        filteredItems = filteredItems.filter(item => item.city.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
      return filteredItems
    },
  },
}
</script>
