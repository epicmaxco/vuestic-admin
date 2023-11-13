<script setup lang="ts">
  import { defineVaDataTableColumns } from 'vuestic-ui'
  import { User, UserRole } from '../types'
  import { useUsersStore } from '../../../stores/users'
  import UserAvatar from './UserAvatar.vue'

  const columns = defineVaDataTableColumns([
    { label: 'Full Name', key: 'fullname', sortable: true },
    { label: 'Email', key: 'email', sortable: true },
    { label: 'Username', key: 'username', sortable: true },
    { label: 'Role', key: 'role', sortable: true },
    { label: 'Projects', key: 'projects', sortable: true },
    { label: ' ', key: 'actions', align: 'right' },
  ])

  const users = useUsersStore()

  const roleColors: Record<UserRole, string> = {
    admin: 'danger',
    user: 'background-element',
    owner: 'warning',
  }

  defineEmits<{
    (event: 'edit-user', user: User): void
  }>()
</script>

<template>
  <va-data-table :columns="columns" :items="users.users" :loading="users.loading">
    <template #cell(fullname)="{ rowData }">
      <div class="flex items-center gap-2">
        <user-avatar :user="rowData" size="small" />
        {{ rowData.fullname }}
      </div>
    </template>

    <template #cell(role)="{ rowData }">
      <va-badge :text="rowData.role" :color="roleColors[rowData.role as UserRole]" />
    </template>

    <template #cell(actions)="{ rowData }">
      <va-button preset="primary" icon="edit" size="small" @click="$emit('edit-user', rowData as User)" />
    </template>

    <template #bodyAppend>
      <tr>
        <td colspan="9999">
          <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
            <div>
              <b>{{ users.pagination.total }} results.</b>
              Results per page
              <va-select v-model="users.pagination.perPage" class="w-16" :options="[10, 50, 100]" />
            </div>

            <div class="flex">
              <!-- <va-button preset="secondary" icon="va-arrow-left" :disabled="users.pagination.page === 0" />
              <va-button preset="secondary" icon="va-arrow-right" :disabled="users.pagination.page === users.totalPages - 1" /> -->
              <va-pagination
                v-model="users.pagination.page"
                buttons-preset="secondary"
                :pages="users.totalPages"
                :visible-pages="5"
                boundary-numbers
              />
            </div>
          </div>
        </td>
      </tr>
    </template>
  </va-data-table>
</template>

<style lang="scss" scoped>
  .va-data-table {
    ::v-deep(.va-data-table__table-tr) {
      border-bottom: 1px solid var(--va-background-border);
    }
  }
</style>
