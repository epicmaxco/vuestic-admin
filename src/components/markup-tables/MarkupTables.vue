<template>
  <div class="markup-tables">
    <va-card class="mb-2">
      <va-card-title>{{ $t('tables.basic') }}</va-card-title>
      <va-card-content>
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
                <va-badge :color="getStatusColor(user.status)" :text="user.status" />
              </td>
            </tr>
          </tbody>
        </table>
      </va-card-content>
    </va-card>

    <va-card>
      <va-card-title>{{ $t('tables.stripedHoverable') }}</va-card-title>
      <va-card-content>
        <table class="va-table va-table--striped va-table--hoverable">
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
                <va-badge :color="getStatusColor(user.status)" :text="user.status" />
              </td>
            </tr>
          </tbody>
        </table>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import data from './data.json'

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
    .va-table {
      width: 100%;
    }

    .va-card {
      max-width: 1200px;
    }
  }
</style>
