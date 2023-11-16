<template>
  <VaCard :title="t('tables.loading')">
    <VaDataTable :data="users" :fields="fields" loading />
  </VaCard>
</template>

<script>
import users from '../data/users.json'

export default {
  data() {
    return {
      users: users,
    }
  },
  computed: {
    fields() {
      return [
        {
          name: 'fullName',
          title: this.t('tables.headings.name'),
        },
        {
          name: 'email',
          title: this.t('tables.headings.email'),
        },
        {
          name: 'country',
          title: this.t('tables.headings.country'),
        },
      ]
    },
  },
}
</script>

<style lang="scss"></style>
