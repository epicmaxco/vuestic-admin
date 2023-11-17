<template>
  <VaCard :title="t('tables.searchTrendsBadges')">
    <div class="grid grid-cols-12 items-center">
      <div class="flex col-span-12 md:col-span-6">
        <VaInput :placeholder="t('tables.searchByName')" :value="term" removable @input="search">
          <template #prepend>
            <VaIcon name="search" />
          </template>
        </VaInput>
      </div>

      <div class="flex col-span-12 md:col-span-3 offset--md3">
        <VaSelect v-model="perPage" :label="t('tables.perPage')" :options="perPageOptions" no-clear />
      </div>
    </div>

    <VaDataTable :data="filteredData" :fields="fields" :per-page="parseInt(perPage)" clickable @rowClicked="showUser">
      <template #trend="props">
        <VaIcon :color="getTrendColor(props.rowData)" :name="getTrendIcon(props.rowData)" />
      </template>

      <template #status="props">
        <VaBadge :color="props.rowData.color">
          {{ props.rowData.status }}
        </VaBadge>
      </template>

      <template #actions="props">
        <VaButton v-if="props.rowData.hasReport" class="m-0" color="danger" small>
          {{ t('tables.report') }}
        </VaButton>
      </template>
    </VaDataTable>
  </VaCard>
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
