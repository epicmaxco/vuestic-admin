<script setup lang="ts">
import { defineVaDataTableColumns, useModal } from 'vuestic-ui'
import { User, UserRole } from '../types'
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
    type: Array as PropType<User[]>,
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

const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

const emit = defineEmits<{
  (event: 'edit-user', user: User): void
  (event: 'delete-user', user: User): void
}>()

const { confirm } = useModal()

const onUserDelete = async (user: User) => {
  const agreed = await confirm({
    message: `Are you sure you want to delete ${user.fullname}?`,
    okText: 'Delete',
    cancelText: 'Cancel',
    size: 'small',
  })

  if (agreed) {
    emit('delete-user', user)
  }
}
</script>

<template>
  <VaDataTable :columns="columns" :items="users" :loading="$props.loading">
    <template #cell(fullname)="{ rowData }">
      <div class="flex items-center gap-2">
        <UserAvatar :user="rowData" size="small" />
        {{ rowData.fullname }}
      </div>
    </template>

    <template #cell(role)="{ rowData }">
      <VaBadge :text="rowData.role" :color="roleColors[rowData.role as UserRole]" />
    </template>

    <template #cell(actions)="{ rowData }">
      <div v-if="rowData.active" class="flex gap-2 justify-end">
        <VaButton preset="primary" icon="edit" size="small" @click="$emit('edit-user', rowData as User)" />
        <VaButton preset="primary" icon="delete" size="small" color="danger" @click="onUserDelete(rowData as User)" />
      </div>
    </template>

    <template #bodyAppend>
      <tr>
        <td colspan="9999">
          <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
            <div>
              <b>{{ $props.pagination.total }} results.</b>
              Results per page
              <VaSelect v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
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
              <VaPagination
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
  </VaDataTable>
</template>

<style lang="scss" scoped>
.va-data-table {
  ::v-deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);
  }
}
</style>
