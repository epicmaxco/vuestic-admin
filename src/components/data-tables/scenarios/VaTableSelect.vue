<template>
  <va-card :title="$t('tables.selectable')">
    <va-table
      :fields="fields"
      :data="data"
      :per-page="5"
    >
      <template slot="select" slot-scope="props">
        <va-checkbox :value="props.rowData.checked" @input="select(props.rowData)" />
      </template>

      <template slot="graph" slot-scope="props">
        <svg width="100" height="40" xmlns="http://www.w3.org/2000/svg">
          <path :d="props.rowData.graph" :stroke="props.rowData.graphColor" fill="transparent"/>
        </svg>
      </template>
    </va-table>

    <small>
      {{ $t('tables.selected') }}: {{ selected }}
    </small>
  </va-card>
</template>

<script>
import users from '../../../fixtures/users.json'

export default {
  data () {
    return {
      users: users,
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:select',
      }, {
        name: 'fullName',
        title: this.$t('tables.headings.name'),
        width: '20%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: 'country',
        title: this.$t('tables.headings.country'),
        width: '30%',
      }, {
        name: '__slot:graph',
        dataClass: 'text-right',
      }]
    },
    data () {
      return this.users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
    selected () {
      return this.users.filter(user => user.checked)
    },
  },
  methods: {
    select (user) {
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users[idx].checked = !this.users[idx].checked
    },
  },
}
</script>

<style lang="scss">
</style>
