<template>
  <div>
    <va-card title="Labels, Actions as Text">
      <va-table
        :fields="fields"
        :data="data"
      >
        <template slot="marker" slot-scope="props">
          <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
        </template>

        <template slot="actions" slot-scope="props">
          <va-button flat small color="gray" @click="edit(props.rowData)" class="no-margin">
            Edit
          </va-button>

          <va-button flat small color="danger" @click="edit(props.rowData)" class="no-margin">
            Delete
          </va-button>
        </template>
      </va-table>
    </va-card>
  </div>
</template>

<script>
import VaTable from './VaTable.vue'
import VaButton from '../va-button/VaButton.vue'
import VaCard from '../va-card/VaCard.vue'
import VaIcon from '../va-icon/VaIcon.vue'

import users from './users.json'

export default {
  components: {
    VaTable,
    VaButton,
    VaCard,
    VaIcon,
  },
  data () {
    return {
      fields: [{
        name: '__slot:marker',
        width: '30px',
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
  computed: {
    data () {
      return users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
  },
  methods: {
    edit (user) {
      alert('Edit User: ' + JSON.stringify(user))
    },
    remove (user) {
      alert('Remove User: ' + JSON.stringify(user))
    },
  },
}
</script>

<style lang="scss" scoped>
  .no-margin {
    margin: 0;
  }
</style>
