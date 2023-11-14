<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import UsersTable from './widgets/UsersTable.vue'
  import InactiveUsersTable from './widgets/InactiveUsersTable.vue'
  import EditUserForm from './widgets/EditUserForm.vue'
  import { User } from './types'
  import { useUsersStore } from '../../stores/users'

  const filters = reactive({
    isActive: true,
    searchText: '',
  })

  const doShowEditUserModal = ref(false)

  const userToEdit = ref<User | null>(null)

  const showEditUserModal = (user: User) => {
    userToEdit.value = user
    doShowEditUserModal.value = true
  }

  const showAddUserModal = () => {
    userToEdit.value = null
    doShowEditUserModal.value = true
  }

  const users = useUsersStore()

  const onUserSaved = (user: User) => {
    if (userToEdit.value) {
      users.updateUser(user)
    } else {
      users.addNewUser(user)
    }
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
          <va-input v-model="filters.searchText" placeholder="Search">
            <template #prependInner>
              <va-icon name="search" color="secondary" size="small" />
            </template>
          </va-input>
        </div>
        <va-spacer />
        <va-button @click="showAddUserModal">Add User</va-button>
      </div>

      <UsersTable
        v-if="filters.isActive"
        @edit-user="showEditUserModal"
        @delete-user="(user) => users.removeUser(user)"
      />
      <InactiveUsersTable v-else />
    </va-card-content>
  </va-card>

  <va-modal v-slot="{ hide }" v-model="doShowEditUserModal" hide-default-actions>
    <EditUserForm :user="userToEdit" @close="hide" @save="onUserSaved" />
  </va-modal>
</template>
