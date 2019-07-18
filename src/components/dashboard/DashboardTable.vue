<template>
  <div>
    <va-card title="Awesome Table">
      <va-table
        :fields="fields"
        :data="filteredData"
        hoverable
      >
        <div slot="header" class="va-row">
          <div class="flex pb-0">
            <va-input
              :value="term"
              placeholder="Search by name"
              style="minWidth: 260px"
              @input="search"
            >
              <va-icon name="fa fa-search" slot="prepend" />
            </va-input>
          </div>

          <div class="spacer" />

          <div class="flex">
            <va-button-toggle
              outline
              v-model="mode"
              :options="modeOptions"
            />
          </div>
        </div>

        <template slot="icon" slot-scope="props">
          <va-icon name="fa fa-user" color="secondary" />
        </template>

        <template slot="status" slot-scope="props">
          <va-badge :color="getStatusColor(props.rowData.status)">
            {{ props.rowData.status }}
          </va-badge>
        </template>

        <template slot="actions" slot-scope="props">
          <va-button
            small
            outline
            color="success"
            icon="fa fa-check"
            class="ma-0"
            @click="resolveUser(props.rowData)"
          >
            Resolve
          </va-button>
        </template>
      </va-table>
    </va-card>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import data from '../markup-tables/data.json'

export default {
  data () {
    return {
      users: data,
      term: null,
      mode: 0,
      modeOptions: [{
        value: 0,
        label: 'Brief',
      }, {
        value: 1,
        label: 'Detailed',
      }],
      fields: [{
        name: '__slot:icon',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'name',
        title: 'Name',
        width: '30%',
      }, {
        name: 'email',
        title: 'Email',
        width: '30%',
      }, {
        name: '__slot:status',
        title: 'Status',
        width: '20%',
        sortField: 'status',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }],
    }
  },
  computed: {
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
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users.splice(idx, 1)
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss" scoped>
</style>
