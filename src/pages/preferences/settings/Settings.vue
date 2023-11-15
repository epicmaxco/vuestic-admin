<template>
  <div class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Name</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        {{ store.userName }}
      </div>
    </div>
    <va-button class="w-fit h-fit" preset="primary" :style="buttonStyles" @click="emits('openNameModal')">
      Edit
    </va-button>
  </div>
  <va-divider />
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
    <va-button class="w-fit h-fit" preset="primary" :style="buttonStyles" @click="emits('openResetPasswordModal')">
      Reset Password
    </va-button>
  </div>
  <va-divider />
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Two-factor authentication</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        {{ twoFA.content }}
      </div>
    </div>
    <va-button class="w-fit h-fit" preset="primary" :style="buttonStyles" @click="toggle2FA">
      {{ twoFA.button }}
    </va-button>
  </div>
  <va-divider />
  <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5">
    <p class="font-bold w-[200px]">Email subscriptions</p>
    <div class="flex-1">
      <div class="max-w-[748px]">
        <p>To manage what emails you get, visit the</p>
        <div class="flex space-x-1 w-fit">
          <p class="font-semibold text-primary">Subscriptions Preferences Center</p>
          <div>
            <va-icon size="14px" color="primary" name="mso-arrow_outward" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'

  import { useToast } from 'vuestic-ui/web-components'

  import { useUserStore } from '../../../stores/user-store'

  import { buttonStyles } from '../styles'

  const store = useUserStore()

  const { init } = useToast()

  const toastMessage = computed(() => (store.is2FAEnabled ? '2FA successfully enabled' : '2FA successfully disabled'))

  const twoFA = computed(() => {
    if (store.is2FAEnabled) {
      return {
        button: 'Disable 2FA',
        content:
          'Two-Factor Authentication (2FA) is now enabled for your account, adding an extra layer of security to your sign-ins.',
      }
    } else {
      return {
        button: 'Set Up 2FA',
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
