<script setup lang="ts">
  import { defineVaDataTableColumns } from 'vuestic-ui'
  import { InactiveUser, User, UserRole } from '../types'
  import UserAvatar from './UserAvatar.vue'
  import { PropType, computed, toRef } from 'vue'
  import { Filters } from '../../../data/pages/users'

  const columns = defineVaDataTableColumns([
    { label: 'Full Name', key: 'fullname', sortable: true },
    { label: 'Email', key: 'email', sortable: true },
    { label: 'Username', key: 'username', sortable: true },
    { label: 'Role', key: 'role', sortable: true },
    { label: 'Projects', key: 'projects', sortable: true },
    { label: ' ', key: 'actions', align: 'right' },
  ])

  const props = defineProps({
    users: {
      type: Array as PropType<(User | InactiveUser)[]>,
      required: true,
    },
    loading: { type: Boolean, default: false },
    pagination: { type: Object as PropType<Filters['pagination']>, required: true },
  })

  const users = toRef(props, 'users')

  const roleColors: Record<UserRole, string> = {
    admin: 'danger',
    user: 'background-element',
    owner: 'warning',
  }

  defineEmits<{
    (event: 'edit-user', user: User): void
    (event: 'delete-user', user: User): void
  }>()

  const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

  const isActiveUser = (user: User) => !('resignedAt' in user)
</script>

<template>
  <va-data-table :columns="columns" :items="users" :loading="$props.loading">
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
      <div v-if="isActiveUser(rowData)" class="flex gap-2 justify-end">
        <va-button preset="primary" icon="edit" size="small" @click="$emit('edit-user', rowData as User)" />
        <va-button
          preset="primary"
          icon="delete"
          size="small"
          color="danger"
          @click="$emit('delete-user', rowData as User)"
        />
      </div>
    </template>

    <template #bodyAppend>
      <tr>
        <td colspan="9999">
          <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
            <div>
              <b>{{ $props.pagination.total }} results.</b>
              Results per page
              <va-select v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
            </div>

            <div class="flex">
              <!-- <va-button
                preset="secondary"
                icon="va-arrow-left"
                :disabled="$props.pagination.page === 0"
                @click="$props.pagination.page--"
              />
              <va-button
                class="mr-2"
                preset="secondary"
                icon="va-arrow-right"
                :disabled="$props.pagination.page === totalPages - 1"
                @click="$props.pagination.page++"
              /> -->
              <va-pagination
                v-model="$props.pagination.page"
                buttons-preset="secondary"
                :pages="totalPages"
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
