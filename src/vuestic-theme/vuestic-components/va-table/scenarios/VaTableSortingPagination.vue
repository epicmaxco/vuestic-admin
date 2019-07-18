<template>
  <div>
    <va-card title="Sorting, Pagination, Actions as Icons">
      <va-table
        :fields="fields"
        :data="data"
        :per-page="5"
      >
        <template slot="actions" slot-scope="props">
          <va-popover :message="getStarMessage(props.rowData)" placement="top">
            <va-button
              flat small
              :color="getStarColor(props.rowData)"
              icon="fa fa-star"
              @click="star(props.rowData)"
            />
          </va-popover>

          <va-popover :message="`Edit ${props.rowData.fullName}`" placement="top">
            <va-button flat small color="gray" icon="fa fa-pencil" />
          </va-popover>

          <va-popover :message="`Remove ${props.rowData.fullName}`" placement="top">
            <va-button flat small color="gray" icon="fa fa-trash" />
          </va-popover>
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
      users: users,
      fields: [{
        name: 'fullName',
        title: 'Name',
        sortField: 'fullName',
        width: '25%',
      }, {
        name: 'email',
        title: 'Email',
        width: '30%',
      }, {
        name: 'country',
        title: 'Country',
        sortField: 'country',
        width: '25%',
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
    getStarMessage (user) {
      const actionName = user.starred ? 'Unstar' : 'Star'
      return `${actionName} ${user.fullName}`
    },
    getStarColor (user) {
      return user.starred ? 'primary' : 'gray'
    },
    star ({ id }) {
      const i = this.users.findIndex(user => user.id === id)
      this.users[i].starred = !this.users[i].starred
    },
  },
}
</script>

<style lang="scss" scoped>
  .va-button {
    margin: 0 2px;
  }
</style>
