<template>
  <div>
    <va-card title="Selectable">
      <va-table
        :fields="fields"
        :data="data"
        :per-page="4"
      >
        <template slot="select" slot-scope="props">
          <va-checkbox :value="props.rowData.checked" @input="select(props.rowData)" />
        </template>

        <template slot="graph" slot-scope="props">
          TODO fancy graph
        </template>
      </va-table>
    </va-card>

    <small>
      {{ selected }}
    </small>
  </div>
</template>

<script>
import VaTable from '../VaTable.vue'
import VaCard from '../../va-card/VaCard.vue'
import VaCheckbox from '../../va-checkbox/VaCheckbox.vue'

import users from './users.json'

export default {
  components: {
    VaTable,
    VaCard,
    VaCheckbox,
  },
  data () {
    return {
      users: users,
      fields: [{
        name: '__slot:select',
      }, {
        name: 'fullName',
        title: 'Name',
        width: '30%',
      }, {
        name: 'email',
        title: 'Email',
        sortField: 'email',
        width: '30%',
      }, {
        name: 'country',
        title: 'Country',
        width: '20%',
      }, {
        name: '__slot:graph',
        dataClass: 'text-right',
      }],
    }
  },
  computed: {
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

<style lang="scss" scoped>
  .no-margin {
    margin: 0;
  }
</style>
