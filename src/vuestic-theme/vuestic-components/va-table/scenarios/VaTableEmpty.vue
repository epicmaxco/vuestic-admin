<template>
  <div>
    <va-card title="Empty Table">
      <va-table
        :fields="fields"
        :data="data"
        no-data-label="There is no data to display. Report will be available on November 3, 2018."
        no-pagination
      />
    </va-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
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
      }],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
