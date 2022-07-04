<template>
  <va-card :title="t('tables.labelsActions')">
    <va-data-table :fields="fields" :data="users" no-pagination>
      <template #marker="props">
        <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
      </template>

      <template #actions="props">
        <va-button flat small color="gray" class="ma-0" @click="edit(props.rowData)">
          {{ t('tables.edit') }}
        </va-button>

        <va-button flat small color="danger" class="ma-0" @click="remove(props.rowData)">
          {{ t('tables.delete') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
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
            dataClass: 'text-right',
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
