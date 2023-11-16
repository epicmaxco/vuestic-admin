<template>
  <VaCard :title="t('tables.sortingPaginationActionsAsIcons')">
    <VaDataTable :data="users" :fields="fields" :per-page="5">
      <template #actions="props">
        <VaPopover :message="getStarMessage(props.rowData)" placement="top">
          <VaButton
            :color="getStarColor(props.rowData)"
            icon="fa fa-star"
            preset="plain"
            small
            @click="star(props.rowData)"
          />
        </VaPopover>

        <VaPopover :message="`${t('tables.edit')} ${props.rowData.fullName}`" placement="top">
          <VaButton color="gray" icon="fa fa-pencil" preset="plain" small />
        </VaPopover>

        <VaPopover :message="`${t('tables.delete')} ${props.rowData.fullName}`" placement="top">
          <VaButton color="gray" icon="fa fa-trash" preset="plain" small />
        </VaPopover>
      </template>
    </VaDataTable>
  </VaCard>
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
          name: 'fullName',
          title: this.t('tables.headings.name'),
          sortField: 'fullName',
          width: '25%',
        },
        {
          name: 'email',
          title: this.t('tables.headings.email'),
          width: '30%',
        },
        {
          name: 'country',
          title: this.t('tables.headings.country'),
          sortField: 'country',
          width: '25%',
        },
        {
          name: '__slot:actions',
          dataClass: 'va-text-right',
        },
      ]
    },
  },
  methods: {
    getStarMessage(user) {
      const actionName = user.starred ? this.t('tables.unstar') : this.t('tables.star')
      return `${actionName} ${user.fullName}`
    },
    getStarColor(user) {
      return user.starred ? 'primary' : 'gray'
    },
    star({ id }) {
      const i = this.users.findIndex((user) => user.id === id)
      this.users[i].starred = !this.users[i].starred
    },
  },
}
</script>

<style lang="scss"></style>
