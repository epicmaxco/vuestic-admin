<script setup lang="ts">
import {ref} from 'vue'
import { defineVaDataTableColumns, useModal } from 'vuestic-ui'
import { User, UserRole } from '../types'
import UserAvatar from './UserAvatar.vue'
import { PropType, computed, toRef } from 'vue'
import { Pagination, Sorting } from '../../../../data/pages/users'
import { useVModel } from '@vueuse/core'
import { Project } from '../../../projects/types'

const columns = defineVaDataTableColumns([
  { label: 'Email', key: 'email', sortable: true },
  { label: 'Username', key: 'username', sortable: true },
  { label: ' ', key: 'actions', align: 'right' },
])

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    required: true,
  },
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
  loading: { type: Boolean, default: false },
  pagination: { type: Object as PropType<Pagination>, required: true },
  sortBy: { type: String as PropType<Sorting['sortBy']>, required: true },
  sortingOrder: { type: String as PropType<Sorting['sortingOrder']>, default: null },
})

const emit = defineEmits<{
  (event: 'edit-user', user: User): void
  (event: 'delete-user', user: User): void
  (event: 'update:sortBy', sortBy: Sorting['sortBy']): void
  (event: 'update:sortingOrder', sortingOrder: Sorting['sortingOrder']): void
}>()

const sortByVModel = ref('id'); // Initial sort by 'id'
const sortingOrderVModel = ref('asc'); // Initial sorting order 'asc'
const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

const { confirm } = useModal()

const onUserDelete = async (user: User) => {
  const agreed = await confirm({
    title: 'Delete user',
    message: `Are you sure you want to delete ${user.username}?`,
    okText: 'Delete',
    cancelText: 'Cancel',
    size: 'small',
    maxWidth: '380px',
  })

  if (agreed) {
    emit('delete-user', user)
  }
}

const formatProjectNames = (projects: Project['id'][]) => {
  const names = projects.reduce((acc, p) => {
    const project = props.projects?.find(({ id }) => p === id)

    if (project) {
      acc.push(project.project_name)
    }

    return acc
  }, [] as string[])
  if (names.length === 0) return 'No projects'
  if (names.length <= 2) {
    return names.map((name) => name).join(', ')
  }

  return (
    names
      .slice(0, 2)
      .map((name) => name)
      .join(', ') +
    ' + ' +
    (names.length - 2) +
    ' more'
  )
}

interface Item {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

const items: Item[] = [
  {
    id: 1,
    username: "sfsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 1,
    username: "sfsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 2,
    username: "vcvbvc",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
  {
    id: 3,
    username: "sfcbcbxbsd",
    email: "rgrowengonzales",
    active: true,
  },
];

const columnss = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'username', title: 'Username', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'active', title: 'Active', sortable: true },
];

</script>

<template>
  <VaDataTable
    v-model:sort-by="sortByVModel"
    v-model:sorting-order="sortingOrderVModel"
    :columns="columnss"
    :items="items"
    :loading="props.loading"
  >
    <template #cell(username)="{ rowData }">
      <div class="max-w-[120px] ellipsis">
        {{ rowData.username }}
      </div>
    </template>

    <template #cell(email)="{ rowData }">
      <div class="ellipsis max-w-[230px]">
        {{ rowData.email }}
      </div>
    </template>



    <template #cell(actions)="{ rowData }">
      <div class="flex gap-2 justify-end">
        <VaButton
          preset="primary"
          size="small"
          icon="mso-edit"
          aria-label="Edit user"
          @click="$emit('edit-user', rowData as User)"
        />
        <VaButton
          preset="primary"
          size="small"
          icon="mso-delete"
          color="danger"
          aria-label="Delete user"
          @click="onUserDelete(rowData as User)"
        />
      </div>
    </template>
  </VaDataTable>

  <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
    <div>
      <b>{{ $props.pagination.total }} results.</b>
      Results per page
      <VaSelect v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
    </div>

    <div v-if="totalPages > 1" class="flex">
      <VaButton
        preset="secondary"
        icon="va-arrow-left"
        aria-label="Previous page"
        :disabled="$props.pagination.page === 1"
        @click="$props.pagination.page--"
      />
      <VaButton
        class="mr-2"
        preset="secondary"
        icon="va-arrow-right"
        aria-label="Next page"
        :disabled="$props.pagination.page === totalPages"
        @click="$props.pagination.page++"
      />
      <VaPagination
        v-model="$props.pagination.page"
        buttons-preset="secondary"
        :pages="totalPages"
        :visible-pages="5"
        :boundary-links="false"
        :direction-links="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.va-data-table {
  ::v-deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);
  }
}
</style>
