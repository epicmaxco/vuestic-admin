<template>
  <va-card :title="$t('tables.infiniteScroll')">
    <div class="va-table-infinite-scroll--container" ref="scrollable" @scroll="onScroll">
      <va-table
        :fields="fields"
        :data="data"
        api-mode
        no-pagination
      >
        <template slot="marker" slot-scope="props">
          <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
        </template>
      </va-table>

      <div class="flex-center ma-3">
        <spring-spinner
          v-if="loading"
          :animation-duration="2000"
          :size="60"
          :color="$themes.primary"
        />
      </div>
    </div>
  </va-card>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'
import users from '../../../fixtures/users.json'

export default {
  components: {
    SpringSpinner,
  },
  data () {
    return {
      users: [],
      loading: false,
      offset: 0,
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:marker',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'fullName',
        title: this.$t('tables.headings.name'),
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
      }, {
        name: 'country',
        title: this.$t('tables.headings.country'),
      }]
    },
    data () {
      return this.users.map(user => {
        user.fullName = user.firstName + ' ' + user.lastName
        return user
      })
    },
  },
  created () {
    this.loadMore()
  },
  methods: {
    loadMore () {
      this.loading = true

      this.readUsers()
        .then(users => {
          this.users = this.users.concat(users)
          this.loading = false
        })
    },
    readUsers () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(users.slice(0, 10))
        }, 600)
      })
    },
    onScroll (e) {
      if (this.loading) {
        return
      }

      const { target } = e

      if (target.offsetHeight + target.scrollTop === target.scrollHeight) {
        this.loadMore()
      }
    },
  },
}
</script>

<style lang="scss">
  .va-table-infinite-scroll--container {
    height: 300px;
    overflow-y: auto;
  }
</style>
