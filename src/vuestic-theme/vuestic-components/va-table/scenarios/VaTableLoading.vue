<template>
  <div>
    <va-card :title="$t('tables.loading')">
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
    }
  },
  computed: {
    fields () {
      return [{
        name: 'fullName',
        title: this.$t('tables.headings.name'),
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
      }, {
        name: 'country',
        title: this.$t('tables.headings.country'),
      }]
    },
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
