<template>
  <VaCard :title="t('tables.emptyTable')">
    <VaDataTable :data="data" :fields="fields" :no-data-label="t('tables.noReport')" no-pagination />
  </VaCard>
</template>

<script>
export default {
  data() {
    return {
      data: [],
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
