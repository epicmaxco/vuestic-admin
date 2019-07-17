<template>
  <div>
    <va-card title="Labels, Actions as Text">
      <va-table
        :fields="fields"
        :data="data"
        no-pagination
      >
        <template slot="marker" slot-scope="props">
          <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
        </template>

        <template slot="actions" slot-scope="props">
          <va-button flat small color="gray" @click="edit(props.rowData)" class="ma-0">
            Edit
          </va-button>

          <va-button flat small color="danger" @click="remove(props.rowData)" class="ma-0">
            Delete
          </va-button>
        </template>
      </va-table>
    </va-card>
  </div>
</template>

<script>
import users from './users.json'

export default {
  data () {
    return {
      users: users.slice(0, 6),
      fields: [{
        name: '__slot:marker',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'fullName',
        title: 'Name',
      }, {
        name: 'email',
        title: 'Email',
      }, {
        name: 'country',
        title: 'Country',
      }, {
        name: '__slot:actions',
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
  },
  methods: {
    edit (user) {
      alert('Edit User: ' + JSON.stringify(user))
    },
    remove (user) {
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users.splice(idx, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
