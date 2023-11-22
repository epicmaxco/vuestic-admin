<script setup lang="ts">
  import { ref } from 'vue'
  import UsersTable from './widgets/UsersTable.vue'
  import EditUserForm from './widgets/EditUserForm.vue'
  import { User } from './types'
  import { useUsers } from './composables/useUsers'
  import { Filters } from '../../data/pages/users'
  import { useToast } from 'vuestic-ui'

  const filters = ref<Filters>({
    isActive: true,
    search: '',
    pagination: {
      page: 1,
      perPage: 10,
      total: 250,
    },
  })

  const doShowEditUserModal = ref(false)

  const { users, isLoading, ...usersApi } = useUsers(filters)

  const userToEdit = ref<User | null>(null)

  const showEditUserModal = (user: User) => {
    userToEdit.value = user
    doShowEditUserModal.value = true
  }

  const showAddUserModal = () => {
    userToEdit.value = null
    doShowEditUserModal.value = true
  }

  const { init: notify } = useToast()

  const onUserSaved = async (user: User) => {
    if (userToEdit.value) {
      await usersApi.update(user)
      notify({
        message: `${user.fullname} has been updated`,
        color: 'success',
      })
    } else {
      usersApi.add(user)
      notify({
        message: `${user.fullname} has been updated`,
        color: 'success',
      })
    }
  }

  const onUserDelete = async (user: User) => {
    await usersApi.remove(user)
    notify({
      message: `${user.fullname} has been deleted`,
      color: 'success',
    })
  }
</script>

<template>
  <h1 class="page-title">Users</h1>

  <va-card>
    <va-card-content>
      <div class="flex flex-col md:flex-row gap-2 mb-2">
        <div class="flex flex-col md:flex-row gap-2 justify-start">
          <va-button-toggle
            v-model="filters.isActive"
            color="background-element"
            border-color="background-element"
            :options="[
              { label: 'Active', value: true },
              { label: 'Inactive', value: false },
            ]"
          />
          <va-input v-model="filters.search" placeholder="Search">
            <template #prependInner>
              <va-icon name="search" color="secondary" size="small" />
            </template>
          </va-input>
        </div>
        <va-spacer />
        <va-button @click="showAddUserModal">Add User</va-button>
      </div>

      <UsersTable
        :users="users"
        :loading="isLoading"
        :pagination="filters.pagination"
        @edit-user="showEditUserModal"
        @delete-user="onUserDelete"
      />
    </va-card-content>
  </va-card>

  <va-modal v-slot="{ hide }" v-model="doShowEditUserModal" hide-default-actions>
    <EditUserForm :user="userToEdit" @close="hide" @save="onUserSaved" />
  </va-modal>
</template>
