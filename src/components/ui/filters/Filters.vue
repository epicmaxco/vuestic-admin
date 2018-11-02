<template>
  <div class="filters-page">
    <vuestic-widget>
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
      <vuestic-data-table
        :apiUrl="apiUrl"
        :tableFields="tableFields"
        :onFilterCustom="onFilter"
        :filterInputShown="false"
        :paginationOn="false"
      >
        <spring-spinner
          slot="loading"
          :animation-duration="2500"
          :size="70"
          color="#4ae387"
        />
      </vuestic-data-table>
    </vuestic-widget>
    <vuestic-widget>
      <div class="row filters-page__filter-bar-container">
        <filter-bar
          @filter="onFilter1"
          class="filters-page__filter-bar"
        />
        <filter-bar
          @filter="onFilter1"
          class="filters-page__filter-bar"
        />
        <filter-bar
          @filter="onFilter1"
          class="filters-page__filter-bar"
        />
      </div>
      <div class="filters-page__tags">
        <vuestic-tag
          v-if="carMaker"
          :name="`Car maker: ${ carMaker }`"
          removable
          @remove="onFilterRemove"
        />
        <vuestic-tag
          v-if="user"
          :name="`Car maker: ${ user }`"
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
import FieldsDef
  from 'vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef
  from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import FilterBar from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'filters',
  components: { VuesticWidget, FilterBar, SpringSpinner },
  data () {
    return {
      carMaker: 'o',
      user: 'Nancy',
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams,
      onFilter: ''
    }
  },
  methods: {
    onFilter1 (val) {
      this.carMaker = val
      this.onFilter = val
    },
    onFilterRemove () {
      this.onFilter1('')
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
    margin: 1.5rem;
    width: 300px;
  }
  &__filter-bar-container {
    justify-content: space-between;
  }
}
</style>
