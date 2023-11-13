<template>
  <Row class="md:items-center" name="Name" hasButton buttonName="Edit" @click="emits('OpenNameModal')">
    {{ store.userName }}
  </Row>
  <va-divider />
  <Row name="Email">{{ store.email }}</Row>
  <Row name="Password" hasButton buttonName="Reset Password" @click="emits('OpenResetPasswordModal')">
    •••••••••••••
  </Row>
  <va-divider />
  <Row name="Two-factor authentication" hasButton buttonName="Set Up 2FA">
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
import Row from '../components/Row.vue'

import { useGlobalStore } from '../../../stores/global-store'

const emits = defineEmits(['OpenNameModal', 'OpenResetPasswordModal'])

const store = useGlobalStore()
</script>