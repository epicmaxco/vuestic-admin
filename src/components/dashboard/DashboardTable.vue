<template>
  <va-card :title="$t('dashboard.table.title')">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 sm6">
        <div class="d-flex justify--end">
          <va-button-toggle
            outline
            v-model="mode"
            :options="modeOptions"
            style="max-width: 100%;"
          />
        </div>
      </div>
    </div>

    <va-data-table
      :fields="mode ? detailedFields : fields"
      :data="filteredData"
      :loading="loading"
      hoverable
    >
      <template slot="icon">
        <va-icon name="fa fa-user" color="secondary" />
      </template>
      <template v-slot:starred="props">
        <va-icon
          v-if="props.rowData.starred"
          name="fa fa-star"
          color="warning"
        />
      </template>
      <template v-slot:status="props">
        <va-badge :color="getStatusColor(props.rowData.status)">
          {{ props.rowData.status }}
        </va-badge>
      </template>

      <template v-slot:actions="props">
        <va-button
          small
          outline
          color="success"
          icon="fa fa-check"
          class="ma-0"
          @click="resolveUser(props.rowData)"
        >
          {{ $t('dashboard.table.resolve') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import debounce from 'lodash/debounce'
import data from '../markup-tables/data.json'

export default {
  data () {
    return {
      users: data.slice(),
      loading: false,
      term: null,
      mode: 0,
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:icon',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'name',
        title: this.$t('tables.headings.name'),
        width: '30%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: '__slot:status',
        title: this.$t('tables.headings.status'),
        width: '20%',
        sortField: 'status',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    detailedFields () {
      return [{
        name: '__slot:icon',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'name',
        title: this.$t('tables.headings.name'),
        width: '20%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '20%',
      },
      {
        name: 'country',
        title: this.$t('tables.headings.location'),
        with: '20%',
      },
      {
        name: '__slot:starred',
        width: '20px',
      },
      {
        name: '__slot:status',
        title: this.$t('tables.headings.status'),
        width: '20%',
        sortField: 'status',
      },
      {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    modeOptions () {
      return [{
        value: 0,
        label: this.$t('dashboard.table.brief'),
      }, {
        value: 1,
        label: this.$t('dashboard.table.detailed'),
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.name.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }

      if (status === 'processing') {
        return 'info'
      }

      return 'danger'
    },
    resolveUser (user) {
      this.loading = true

      setTimeout(() => {
        const idx = this.users.findIndex(u => u.id === user.id)
        this.users.splice(idx, 1)
        this.loading = false

        this.showToast(this.$t('dashboard.table.resolved'), {
          icon: 'fa-check',
          position: 'bottom-right',
          duration: 1500,
        })
      }, 500)
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss">
</style>
