<template>
  <va-card :title="t('tables.selectable')">
    <va-data-table :fields="fields" :data="users" :per-page="5">
      <template #select="props">
        <va-checkbox :value="props.rowData.checked" @input="select(props.rowData)" />
      </template>

      <template #graph="props">
        <svg width="100" height="40" xmlns="http://www.w3.org/2000/svg">
          <path :d="props.rowData.graph" :stroke="props.rowData.graphColor" fill="transparent" />
        </svg>
      </template>
    </va-data-table>

    <p v-if="selected.length">{{ t('tables.selected') }}: {{ selected.map((user) => user.fullName).join(', ') }}.</p>
  </va-card>
</template>

<script>
  import users from '../data/users.json'

  export default {
    data() {
      return {
        users: users.slice(),
      }
    },
    computed: {
      fields() {
        return [
          {
            name: '__slot:select',
          },
          {
            name: 'fullName',
            title: this.t('tables.headings.name'),
            width: '20%',
          },
          {
            name: 'email',
            title: this.t('tables.headings.email'),
            width: '30%',
          },
          {
            name: 'country',
            title: this.t('tables.headings.country'),
            width: '30%',
          },
          {
            name: '__slot:graph',
            dataClass: 'va-text-right',
          },
        ]
      },
      selected() {
        return this.users.filter((user) => user.checked)
      },
    },
    methods: {
      select(user) {
        const idx = this.users.findIndex((u) => u.id === user.id)
        this.users[idx].checked = !this.users[idx].checked
      },
    },
  }
</script>
