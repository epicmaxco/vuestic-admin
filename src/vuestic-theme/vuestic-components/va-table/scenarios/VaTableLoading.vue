<template>
  <div>
    <va-card title="Loading">
      <va-table
        :fields="fields"
        :data="data"
        loading
      />
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
      }, {
        name: 'email',
        title: 'Email',
      }, {
        name: 'country',
        title: 'Country',
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
}
</script>

<style lang="scss" scoped>
</style>
