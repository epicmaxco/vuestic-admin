<template>
  <va-card :title="$t('tables.sortingPaginationActionsAsIcons')">
    <va-data-table
      :fields="fields"
      :data="users"
      :per-page="5"
    >
      <template slot="actions" slot-scope="props">
        <va-popover :message="getStarMessage(props.rowData)" placement="top">
          <va-button
            flat small
            :color="getStarColor(props.rowData)"
            icon="fa fa-star"
            @click="star(props.rowData)"
          />
        </va-popover>

        <va-popover :message="`${$t('tables.edit')} ${props.rowData.fullName}`" placement="top">
          <va-button flat small color="gray" icon="fa fa-pencil" />
        </va-popover>

        <va-popover :message="`${$t('tables.delete')} ${props.rowData.fullName}`" placement="top">
          <va-button flat small color="gray" icon="fa fa-trash" />
        </va-popover>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import users from '../../../data/users.json'

export default {
  data () {
    return {
      users: users.slice(),
    }
  },
  computed: {
    fields () {
      return [{
        name: 'fullName',
        title: this.$t('tables.headings.name'),
        sortField: 'fullName',
        width: '25%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: 'country',
        title: this.$t('tables.headings.country'),
        sortField: 'country',
        width: '25%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
  },
  methods: {
    getStarMessage (user) {
      const actionName = user.starred ? this.$t('tables.unstar') : this.$t('tables.star')
      return `${actionName} ${user.fullName}`
    },
    getStarColor (user) {
      return user.starred ? 'primary' : 'gray'
    },
    star ({ id }) {
      const i = this.users.findIndex(user => user.id === id)
      this.users[i].starred = !this.users[i].starred
    },
  },
}
</script>

<style lang="scss">
</style>
