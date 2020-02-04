<template>
  <va-card :title="$t('tables.searchTrendsBadges')">
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          :label="$t('tables.perPage')"
          :options="perPageOptions"
          noClear
        />
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
      @row-clicked="showUser"
      clickable
    >
      <template slot="trend" slot-scope="props">
        <va-icon :name="getTrendIcon(props.rowData)" :color="getTrendColor(props.rowData)" />
      </template>

      <template slot="status" slot-scope="props">
        <va-badge :color="props.rowData.color">
          {{ props.rowData.status }}
        </va-badge>
      </template>

      <template slot="actions" slot-scope="props">
        <va-button v-if="props.rowData.hasReport" small color="danger" class="ma-0">
          {{ $t('tables.report') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import { debounce } from 'lodash'
import users from '../../../data/users.json'

export default {
  data () {
    return {
      term: null,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      users: users,
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:trend',
        width: '30px',
        height: '45px',
        dataClass: 'text-center',
      }, {
        name: 'fullName',
        title: this.$t('tables.headings.name'),
        width: '30%',
      }, {
        name: '__slot:status',
        title: this.$t('tables.headings.status'),
        width: '20%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.fullName.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getTrendIcon (user) {
      if (user.trend === 'up') {
        return 'fa fa-caret-up'
      }

      if (user.trend === 'down') {
        return 'fa fa-caret-down'
      }

      return 'fa fa-minus'
    },
    getTrendColor (user) {
      if (user.trend === 'up') {
        return 'primary'
      }

      if (user.trend === 'down') {
        return 'danger'
      }

      return 'grey'
    },
    showUser (user) {
      alert(JSON.stringify(user))
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>
