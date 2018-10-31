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
        :itemsPerPage="itemsPerPage"
        :defaultPerPage="defaultTablePerPage"
        :sortFunctions="sortFunctions"
        :apiMode="apiMode"
        :paginationPath="paginationPath"
        :queryParams="queryParams"
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
      <div class="filters-page__tags">
        <vuestic-tag
          v-if="carMaker"
          :name="`Car maker: ${ carMaker }`"
          removable
          @remove="carMaker = undefined"
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
export default {
  name: 'filters',
  components: { VuesticWidget },
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
    }
  },
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
}
</style>
