<template>
  <VaCard :title="t('tables.serverSidePagination')">
    <VaDataTable
      :data="items"
      :fields="fields"
      :loading="loading"
      :total-pages="totalPages"
      api-mode
      @pageSelected="readItems"
    >
      <template #avatar="props">
        <img :src="props.rowData.avatar" class="data-table-server-pagination---avatar" />
      </template>
    </VaDataTable>
  </VaCard>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      perPage: 3,
      totalPages: 0,
      items: [],
      loading: false,
    }
  },
  computed: {
    fields() {
      return [
        {
          name: '__slot:avatar',
          width: '60px',
        },
        {
          name: 'first_name',
          title: this.t('tables.headings.firstName'),
          width: '20%',
        },
        {
          name: 'last_name',
          title: this.t('tables.headings.lastName'),
          width: '20%',
        },
        {
          name: 'email',
          title: this.t('tables.headings.email'),
        },
      ]
    },
  },
  created() {
    this.readItems()
  },
  methods: {
    readItems(page = 0) {
      this.loading = true

      const params = {
        per_page: this.perPage,
        page: page,
      }

      axios.get('https://reqres.in/api/users', { params }).then((response) => {
        this.items = response.data.data
        this.totalPages = response.data.total_pages
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss">
.data-table-server-pagination---avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
