<template>
  <va-table
    :fields="fields"
    :data="users"
    :loading="loading"
    :totalPages="totalPages"
    api-mode
    @page-selected="readPage"
  />
</template>

<script>
import users from '../../../fixtures/users.json'

export default {
  data () {
    return {
      loading: false,
      perPage: 4,
      users: [],
      fields: [{
        name: 'firstName',
        label: 'First Name',
        width: '30%',
      }, {
        name: 'lastName',
        label: 'Last Name',
        width: '30%',
      }, {
        name: 'country',
        label: 'Country',
      }],
    }
  },
  computed: {
    totalPages () {
      return Math.floor(users.length / this.perPage)
    },
  },
  created () {
    this.readPage()
  },
  methods: {
    readPage (page = 1) {
      const sliceFrom = (page - 1) * this.perPage

      this.loading = true

      setTimeout(() => {
        this.users = users.slice(sliceFrom, sliceFrom + this.perPage)
        this.loading = false
      }, 450)
    },
  },
}
</script>

<style lang="scss">
</style>
