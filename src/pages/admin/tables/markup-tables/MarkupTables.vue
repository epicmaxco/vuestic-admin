<template>
  <div class="markup-tables flex">
    <va-card :title="$t('tables.basic')" class="flex mb-4">
      <va-card-content>
        <div class="table-wrapper">
          <table class="va-table">
            <thead>
              <tr>
                <th>{{ $t('tables.headings.name') }}</th>
                <th>{{ $t('tables.headings.email') }}</th>
                <th>{{ $t('tables.headings.country') }}</th>
                <th>{{ $t('tables.headings.status') }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.country }}</td>
                <td>
                  <va-badge :color="getStatusColor(user.status)">
                    {{ user.status }}
                  </va-badge>
                </td>
              </tr>
            </tbody>
          </table>                
        </div>
      </va-card-content>
    </va-card>
  
    <va-card :title="$t('tables.stripedHoverable')">
      <va-card-content>
        <div class="table-wrapper">
          <table class="va-table va-table--striped va-table--hoverable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.country }}</td>
                <td>
                  <va-badge :color="getStatusColor(user.status)">
                    {{ user.status }}
                  </va-badge>
                </td>
              </tr>
            </tbody>
          </table>          
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import data from '@/data/tables/markup-table/data.json'

export default {
  data () {
    return {
      users: data.slice(0, 8),
    }
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }

      if (status === 'processing') {
        return 'info'
      }

      return 'danger'
    },
  },
}
</script>

<style lang="scss">
  .markup-tables {
    .table-wrapper {
      overflow: auto;
    }

    .va-table {
      width: 100%;
    }
  }
</style>
