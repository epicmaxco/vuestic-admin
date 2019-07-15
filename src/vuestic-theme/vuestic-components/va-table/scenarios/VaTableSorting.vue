<template>
  <div>
    <va-card title="Sorting, Actions as Icons">
      <va-table
        :fields="fields"
        :data="data"
      >
        <template slot="actions" slot-scope="props">
          <va-popover :message="`Star ${props.rowData.fullName}`" placement="top">
            <va-button flat small color="gray" icon="fa fa-star" class="no-margin" />
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
      fields: [{
        name: 'fullName',
        title: 'Name',
      }, {
        name: 'email',
        title: 'Email',
        sortField: 'email',
      }, {
        name: 'country',
        title: 'Country',
      }, {
        name: '__slot:actions',
      }],
    }
  },
  computed: {
    data () {
      return users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .no-margin {
    margin: 0;
  }

  .va-card {
    margin-bottom: 8px;
  }
</style>
