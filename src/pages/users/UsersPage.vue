
<script setup lang="ts">
import { reactive, ref } from 'vue';
import UsersTable from './widgets/UsersTable.vue';
import EditUserForm from './widgets/EditUserForm.vue';
import { User } from './types';

const filters = reactive({
  isActive: true,
  searchText: '',
})

const showEditUserModal = ref(false)

const userToEdit = ref<User | null>(null)

const editUser = (user: User) => {
  userToEdit.value = user
  showEditUserModal.value = true
}
</script>

<template>
  <h1 class="page-title">Users</h1>

  <va-card>
    <va-card-content>
      <h2 class="va-h4 mb-2">Users</h2>

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
        <va-button @click="showEditUserModal = true">Add User</va-button>
      </div>

      <UsersTable
        @edit-user="editUser"
      />
    </va-card-content>
  </va-card>

  <va-modal v-model="showEditUserModal" hide-default-actions #default="{ hide }">
    <EditUserForm
      :user="userToEdit"
      @close="hide"
    />
  </va-modal>
</template>
