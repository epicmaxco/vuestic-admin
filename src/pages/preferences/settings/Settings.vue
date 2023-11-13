<template>
  <Row class="md:items-center" name="Name" hasButton buttonName="Edit" @click="emits('openNameModal')">
    {{ store.userName }}
  </Row>
  <va-divider />
  <Row name="Email">{{ store.email }}</Row>
  <Row name="Password" hasButton buttonName="Reset Password" @click="emits('openResetPasswordModal')">
    •••••••••••••
  </Row>
  <va-divider />
  <Row name="Two-factor authentication" hasButton :enabled="store.is2FAEnabled" buttonName="Set Up 2FA" @click="toggle2FA">
    Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your
    username and password.
  </Row>
  <va-divider />
  <Row name="Email subscriptions">
    <p>To manage what emails you get, visit the</p>
    <div class="flex space-x-1 w-fit">
      <p class="font-semibold text-primary">Subscriptions Preferences Center</p>
      <div>
        <va-icon size="14px" color="primary" name="mso-arrow_outward" />
      </div>
    </div>
  </Row>
</template>
<script setup lang="ts">
import { useToast } from 'vuestic-ui/web-components'

import Row from '../components/Row.vue'

import { useGlobalStore } from '../../../stores/global-store'
import { computed } from 'vue'

const store = useGlobalStore()

const { init } = useToast()

const message = computed(() => store.is2FAEnabled ? '2FA successfully enabled' : '2FA successfully disabled')
const color = computed(() => store.is2FAEnabled ? 'success' : 'danger')

const toggle2FA = () => {
  store.toggle2FA()
  init({ message: message.value, color: color.value })
}

const emits = defineEmits(['openNameModal', 'openResetPasswordModal'])
</script>