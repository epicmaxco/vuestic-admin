<template>
  <VaCard :title="t('tables.labelsActions')">
    <VaDataTable :data="users" :fields="fields" no-pagination>
      <template #marker="props">
        <VaIcon :color="props.rowData.color" name="fa fa-circle" size="8px" />
      </template>

      <template #actions="props">
        <VaButton class="m-0" color="gray" preset="plain" small @click="edit(props.rowData)">
          {{ t('tables.edit') }}
        </VaButton>

        <VaButton class="m-0" color="danger" preset="plain" small @click="remove(props.rowData)">
          {{ t('tables.delete') }}
        </VaButton>
      </template>
    </VaDataTable>
  </VaCard>
</template>

<script>
import users from '../data/users.json'

export default {
  data() {
    return {
      users: users.slice(0, 6),
    }
  },
  computed: {
    fields() {
      return [
        {
          name: '__slot:marker',
          width: '30px',
          dataClass: 'text-center',
        },
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
        {
          name: '__slot:actions',
          dataClass: 'va-text-right',
        },
      ]
    },
  },
  methods: {
    edit(user) {
      alert('Edit User: ' + JSON.stringify(user))
    },
    remove(user) {
      const idx = this.users.findIndex((u) => u.id === user.id)
      this.users.splice(idx, 1)
    },
  },
}
</script>

<style lang="scss"></style>
