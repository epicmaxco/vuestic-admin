<template>
  <div class="tables">
    <div class="va-row">
      <div class="flex xs12 md12">
        <va-card :title="$t('tables.basic')">
          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
              <tr>
                <td>{{ $t('tables.headings.name') }}</td>
                <td>{{ $t('tables.headings.email') }}</td>
                <td>{{ $t('tables.headings.city') }}</td>
                <td align="right">{{ $t('tables.headings.score') }}</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td></td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td></td>
              </tr>
              <tr>
                <td>Frederiko Lopez</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Barcelona</td>
                <td align="right">16</td>
                <td></td>
              </tr>
              <tr>
                <td>Stanley Hummer</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Manchester</td>
                <td align="right">57</td>
                <td></td>
              </tr>
              <tr>
                <td>Lendley Wintz</td>
                <td>9938198146@mailster.io</td>
                <td>Wien</td>
                <td align="right">113</td>
                <td></td>
              </tr>
              <tr>
                <td>Barbara Noz</td>
                <td>barbaranoz@mailster.io</td>
                <td>Brussels</td>
                <td align="right">68</td>
                <td></td>
              </tr>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td></td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card :title="$t('tables.styled')">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>{{ $t('tables.headings.name') }}</td>
                <td>{{ $t('tables.headings.email') }}</td>
                <td>{{ $t('tables.headings.city') }}</td>
                <td align="right">{{ $t('tables.headings.score') }}</td>
                <td align="middle"></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Frederiko Lopez</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Barcelona</td>
                <td align="right">16</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-danger">
                <td>
                  <span class="badge badge-pill badge-danger">DANGER</span>
                </td>
                <td>Stanley Hummer</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Manchester</td>
                <td align="right">57</td>
                <td align="middle">
                  <va-icon icon="fa fa-exclamation-triangle icon-right input-icon error-icon"/>
                </td>
              </tr>
              <tr class="table-success">
                <td>
                  <span class="badge badge-pill badge-primary">SUCCESS</span>
                </td>
                <td>Lendley Wintz</td>
                <td>9938198146@mailster.io</td>
                <td>Wien</td>
                <td align="right">113</td>
                <td align="middle" class="valid">
                  <va-icon icon="fa fa-check success-icon icon-right input-icon"/>
                </td>
              </tr>
              <tr class="table-warning">
                <td>
                  <span class="badge badge-pill badge-warning">WARNING</span>
                </td>
                <td>Barbara Noz</td>
                <td>barbaranoz@mailster.io</td>
                <td>Brussels</td>
                <td align="right">68</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Vancouver</td>
                <td align="right">93</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-info">
                <td>
                  <span class="badge badge-pill badge-info">INFO</span>
                </td>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Washington</td>
                <td align="right">280</td>
                <td align="middle"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card :title="$t('tables.advanced')">
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
        </va-card>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
import FieldsDef
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/query-params'
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner,
  },
  data () {
    return {
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

.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>
