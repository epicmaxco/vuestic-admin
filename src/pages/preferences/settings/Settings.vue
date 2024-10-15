<template>
  <div class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Name</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        {{ store.userName }}
      </div>
    </div>
    <VaButton :style="buttonStyles" class="w-fit h-fit" preset="primary" @click="emits('openNameModal')">
      Edit
    </VaButton>
  </div>
  <VaDivider />
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Email</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        {{ store.email }}
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Password</p>
    <div class="flex-1">
      <div class="max-w-[748px]">•••••••••••••</div>
    </div>
    <VaButton :style="buttonStyles" class="w-fit h-fit" preset="primary" @click="emits('openResetPasswordModal')">
      Reset Password
    </VaButton>
  </div>
  <VaDivider />
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Two-factor authentication</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        {{ twoFA.content }}
      </div>
    </div>
    <VaButton :style="buttonStyles" class="w-fit h-fit" preset="primary" :color="twoFA.color" @click="toggle2FA">
      {{ twoFA.button }}
    </VaButton>
  </div>
  <VaDivider />
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Email subscriptions</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        <p>To manage what emails you get, visit the</p>
        <div class="flex space-x-1 w-fit">
          <RouterLink :to="{ name: 'settings' }" class="font-semibold text-primary">Notification settings</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import { useToast } from 'vuestic-ui'

import { useUserStore } from '../../../stores/user-store'

import { buttonStyles } from '../styles'

const store = useUserStore()

const { init } = useToast()

const toastMessage = computed(() => (store.is2FAEnabled ? '2FA successfully enabled' : '2FA successfully disabled'))

const twoFA = computed(() => {
  if (store.is2FAEnabled) {
    return {
      color: 'danger',
      button: 'Disable 2FA',
      content:
        'Two-Factor Authentication (2FA) is now enabled for your account, adding an extra layer of security to your sign-ins.',
    }
  } else {
    return {
      color: 'primary',
      button: 'Set up 2FA',
      content:
        'Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your username and password.',
    }
  }
})

const toggle2FA = () => {
  store.toggle2FA()
  init({ message: toastMessage.value, color: 'success' })
}

const emits = defineEmits(['openNameModal', 'openResetPasswordModal'])
</script>
