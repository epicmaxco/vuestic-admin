<template>
  <div>
    <va-card title="Server Side Pagination">
      <va-table
        :fields="fields"
        :data="items"
        :loading="loading"
        :totalPages="totalPages"
        @page-selected="readItems"
        api-mode
      >
        <template slot="avatar" slot-scope="props">
          <img :src="props.rowData.avatar" class="item-avatar">
        </template>
      </va-table>
    </va-card>
  </div>
</template>

<script>
import axios from 'axios'
import VaCard from '../../va-card/VaCard.vue'
import VaTable from '../VaTable.vue'

export default {
  components: {
    VaCard,
    VaTable,
  },
  data () {
    return {
      perPage: 3,
      totalPages: 0,
      items: [],
      loading: false,
      fields: [{
        name: '__slot:avatar',
        width: '60px',
      }, {
        name: 'first_name',
        title: 'First Name',
        width: '20%',
      }, {
        name: 'last_name',
        title: 'Last Name',
        width: '20%',
      }, {
        name: 'email',
        title: 'Email',
      }],
    }
  },
  created () {
    this.readItems()
  },
  methods: {
    readItems (page = 0) {
      this.loading = true

      const params = {
        per_page: this.perPage,
        page: page,
      }

      axios.get('https://reqres.in/api/users', { params })
        .then(response => {
          this.items = response.data.data
          this.totalPages = response.data.total_pages
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
  .item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
