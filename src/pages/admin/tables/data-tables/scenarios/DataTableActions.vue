<template>
  <VaCard :title="t('tables.labelsActions')">
    <VaDataTable :fields="fields" :data="users" no-pagination>
      <template #marker="props">
        <VaIcon name="fa fa-circle" :color="props.rowData.color" size="8px" />
      </template>

      <template #actions="props">
        <VaButton preset="plain" small color="gray" class="m-0" @click="edit(props.rowData)">
          {{ t('tables.edit') }}
        </VaButton>

        <VaButton preset="plain" small color="danger" class="m-0" @click="remove(props.rowData)">
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
