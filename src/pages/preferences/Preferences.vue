<template>
  <h1 class="page-title">Preferences</h1>
  <div class="flex flex-col mt-4 p-4 space-y-10 bg-backgroundSecondary rounded-lg">
    <div class="flex space-x-5">
      <va-avatar size="large" />
      <div class="flex flex-col justify-center">
        <h2 class="text-[28px] md:text-[32px] leading-10 font-bold">Salma Fadel</h2>
        <div class="flex space-x-1 text-[13px] leading-4">
          <p>Member since</p>
          <p>8/12/2020</p>
        </div>
      </div>
    </div>
    <div class="space-y-4 md:space-y-6">
      <Row class="md:items-center" name="Name" has-button button-name="Edit" @click="isEditNameModalOpen = true">
        Salma Fadel
      </Row>
      <va-divider />
      <Row name="Email"> salma.fadel@vuestic.dev </Row>
      <Row name="Password" has-button button-name="Reset Password" @click="isResetPasswordModalOpen = true">
        •••••••••••••
      </Row>
      <va-divider />
      <Row name="Two-factor authentication" has-button button-name="Set Up 2FA">
        Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your
        username and password.
      </Row>
      <va-divider />
      <Row name="Email subscriptions">
        <p>To manage what emails you get, visit the</p>
        <router-link class="flex space-x-1 w-fit" to="/">
          <p class="font-semibold text-primary">Subscriptions Preferences Center</p>
          <div>
            <va-icon size="14px" color="primary" name="mso-arrow_outward" />
          </div>
        </router-link>
      </Row>
    </div>
  </div>
  <EditNameModal v-if="isEditNameModalOpen" @cancel="isEditNameModalOpen = false" />
  <ResetPasswordModal v-if="isResetPasswordModalOpen" @cancel="isResetPasswordModalOpen = false" />
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  import Row from './components/Row.vue'

  import EditNameModal from './modals/EditNameModal.vue'
  import ResetPasswordModal from './modals/ResetPasswordModal.vue'

  const isEditNameModalOpen = ref<boolean>(false)
  const isResetPasswordModalOpen = ref<boolean>(false)
</script>
