<template>
  <va-card :title="t('tables.searchTrendsBadges')">
    <div class="grid grid-cols-12 items-center">
      <div class="flex col-span-12 md:col-span-6">
        <va-input :value="term" :placeholder="t('tables.searchByName')" removable @input="search">
          <template #prepend>
            <va-icon name="search" />
          </template>
        </va-input>
      </div>

      <div class="flex col-span-12 md:col-span-3 offset--md3">
        <va-select v-model="perPage" :label="t('tables.perPage')" :options="perPageOptions" no-clear />
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
      clickable
      @row-clicked="showUser"
    >
      <template #trend="props">
        <va-icon :name="getTrendIcon(props.rowData)" :color="getTrendColor(props.rowData)" />
      </template>

      <template #status="props">
        <va-badge :color="props.rowData.color">
          {{ props.rowData.status }}
        </va-badge>
      </template>

      <template #actions="props">
        <va-button v-if="props.rowData.hasReport" small color="danger" class="m-0">
          {{ t('tables.report') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
  import { debounce } from 'lodash'
  import users from '../data/users.json'

  export default {
    data() {
      return {
        term: null,
        perPage: '6',
        perPageOptions: ['4', '6', '10', '20'],
        users: users,
      }
    },
    computed: {
      fields() {
        return [
          {
            name: '__slot:trend',
            width: '30px',
            height: '45px',
            dataClass: 'text-center',
          },
          {
            name: 'fullName',
            title: this.t('tables.headings.name'),
            width: '30%',
          },
          {
            name: '__slot:status',
            title: this.t('tables.headings.status'),
            width: '20%',
          },
          {
            name: 'email',
            title: this.t('tables.headings.email'),
            width: '30%',
          },
          {
            name: '__slot:actions',
            dataClass: 'va-text-right',
          },
        ]
      },
      filteredData() {
        if (!this.term || this.term.length < 1) {
          return this.users
        }

        return this.users.filter((item) => {
          return item.fullName.toLowerCase().startsWith(this.term.toLowerCase())
        })
      },
    },
    methods: {
      getTrendIcon(user) {
        if (user.trend === 'up') {
          return 'fa fa-caret-up'
        }

        if (user.trend === 'down') {
          return 'fa fa-caret-down'
        }

        return 'fa fa-minus'
      },
      getTrendColor(user) {
        if (user.trend === 'up') {
          return 'primary'
        }

        if (user.trend === 'down') {
          return 'danger'
        }

        return 'gray'
      },
      showUser(user) {
        alert(JSON.stringify(user))
      },
      search: debounce(function (term) {
        this.term = term
      }, 400),
    },
  }
</script>
