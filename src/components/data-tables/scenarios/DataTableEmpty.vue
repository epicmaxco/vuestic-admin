<template>
  <va-card :title="$t('tables.emptyTable')">
    <va-data-table
      :fields="fields"
      :data="data"
      :no-data-label="$t('tables.noReport')"
      no-pagination
    />
  </va-card>
</template>

<script>
export default {
  data () {
    return {
      data: [],
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
