<template>
  <va-card :title="$t('tables.searchTrendsBadges')">
    <div class="va-row">
      <div class="flex">
        <va-input
          :value="term"
          :placeholder="$t('tables.searchByName')"
          style="minWidth: 260px"
          @input="search"
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex spacer" />

      <div class="flex">
        <span style="marginRight: 4px">
          {{ $t('tables.perPage') }}
        </span>

        <select v-model.number="perPage">
          <option v-for="option in perPageOptions" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <va-table
      :fields="fields"
      :data="filteredData"
      :per-page="perPage"
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
    </va-table>
  </va-card>
</template>

<script>
import { debounce } from 'lodash'
import users from '../../../fixtures/users.json'

export default {
  data () {
    return {
      term: null,
      perPage: 6,
      perPageOptions: [4, 6, 10, 20],
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
    data () {
      return this.users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.data
      }

      return this.data.filter(item => {
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

<style lang="scss">
</style>
