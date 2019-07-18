<template>
  <div>
    <va-card title="Basic Markup Table" class="mb-2">
      <table class="va-table">
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
    </va-card>

    <va-card title="Striped, Hoverable">
      <table class="va-table striped hoverable">
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

<style lang="scss" scoped>
  .va-card {
    max-width: 1200px;
  }

  .va-table {
    width: 100%;
  }
</style>
