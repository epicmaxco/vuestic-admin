<template>
  <div>
    <va-card title="Sorting, Pagination, Actions as Icons">
      <va-table
        :fields="fields"
        :data="data"
        :per-page="4"
      >
        <template slot="actions" slot-scope="props">
          <va-popover :message="getStarMessage(props.rowData)" placement="top">
            <va-button
              flat small
              :color="getStarColor(props.rowData)"
              icon="fa fa-star"
              class="no-margin"
              @click="star(props.rowData)"
            />
          </va-popover>

          <va-popover :message="`Edit ${props.rowData.fullName}`" placement="top">
            <va-button flat small color="gray" icon="fa fa-edit" class="no-margin" />
          </va-popover>

          <va-popover :message="`Remove ${props.rowData.fullName}`" placement="top">
            <va-button flat small color="gray" icon="fa fa-trash" class="no-margin" />
          </va-popover>
        </template>
      </va-table>
    </va-card>
  </div>
</template>

<script>
import VaTable from '../VaTable.vue'
import VaButton from '../../va-button/VaButton.vue'
import VaCard from '../../va-card/VaCard.vue'
import VaPopover from '../../va-popover/VaPopover.vue'

import users from './users.json'

export default {
  components: {
    VaTable,
    VaButton,
    VaCard,
    VaPopover,
  },
  data () {
    return {
      users: users,
      fields: [{
        name: 'fullName',
        title: 'Name',
        width: '30%',
      }, {
        name: 'email',
        title: 'Email',
        sortField: 'email',
        width: '30%',
      }, {
        name: 'country',
        title: 'Country',
        width: '30%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }],
    }
  },
  computed: {
    data () {
      return this.users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
  },
  methods: {
    getStarMessage (user) {
      const actionName = user.starred ? 'Unstar' : 'Star'
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

<style lang="scss" scoped>
  .no-margin {
    margin: 0;
  }
</style>
