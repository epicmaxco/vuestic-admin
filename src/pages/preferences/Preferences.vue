<template>
  <h1 class="page-title">Preferences</h1>
  <div class="flex flex-col p-4 space-y-10 bg-backgroundSecondary rounded-lg">
    <div class="flex space-x-5">
      <PreferencesHeader />
    </div>
    <div class="space-y-4 md:space-y-6">
      <Settings />
    </div>
  </div>
  <EditNameModal v-if="store.isEditNameModalOpen" @cancel="store.toggleEditNameModal" />
  <ResetPasswordModal v-if="store.isResetPasswordModalOpen" @cancel="store.toggleResetPasswordModal" />
</template>
<script setup lang="ts">
  import { useGlobalStore } from '../../stores/global-store'

  import PreferencesHeader from './preferences-header/PreferencesHeader.vue'
  import Settings from './settings/Settings.vue'
  import EditNameModal from './modals/EditNameModal.vue'
  import ResetPasswordModal from './modals/ResetPasswordModal.vue'

  const store = useGlobalStore()
</script>
