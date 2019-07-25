<template>
  <div>
    <va-table
      :fields="fields"
      :data="filteredUsers"
      :per-page="perPage"
    >
      <template slot="header">
        <input type="text" v-model="term" placeholder="Search" class="mr-2">

        <select v-model.number="perPage">
          <option v-for="option in perPageOptions" :key="option">
            {{ option }}
          </option>
        </select>

      </template>

      <template slot="select" slot-scope="props">
        <va-checkbox :value="props.rowData.checked" @input="select(props.rowData)" />
      </template>

      <template slot="actions" slot-scope="props">
        <va-button small @click="show(props.rowData)">
          View User JSON
        </va-button>
      </template>
    </va-table>
    Selected: {{ selected }}
  </div>
</template>

<script>
import users from '../../../fixtures/users.json'

export default {
  data () {
    return {
      term: '',
      perPage: 4,
      perPageOptions: [4, 6, 10],
      users: users.slice(),
      fields: [{
        name: '__slot:select',
        width: '30px',
      }, {
        name: 'firstName',
        label: 'First Name',
        sortField: 'firstName',
        width: '30%',
      }, {
        name: 'lastName',
        label: 'Last Name',
        sortField: 'lastName',
        width: '30%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }],
    }
  },
  computed: {
    selected () {
      return this.users.filter(user => user.checked)
    },
    filteredUsers () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(user => {
        return user.firstName.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    select (user) {
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users[idx].checked = !this.users[idx].checked
    },
    show (user) {
      window.alert(JSON.stringify(user))
    },
  },
}
</script>

<style lang="scss">
</style>
