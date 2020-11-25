<template>
  <va-card>
    <va-card-title>{{ $t('tables.loading') }}</va-card-title>
    <va-card-content>
      <va-data-table
        :fields="fields"
        :data="users"
        loading
      />
    </va-card-content>
  </va-card>
</template>

<script>
import users from '../../../data/users.json'

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
  },
}
</script>

<style lang="scss">
</style>
