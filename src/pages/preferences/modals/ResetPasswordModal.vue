<template>
  <VaModal
    max-width="530px"
    :mobile-fullscreen="false"
    hide-default-actions
    model-value
    close-button
    @update:modelValue="emits('cancel')"
  >
    <h1 class="va-h5 mb-4">Reset password</h1>
    <VaForm ref="form" class="space-y-6" @submit.prevent="submit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VaInput
          v-model="oldPassowrd"
          :rules="oldPasswordRules"
          label="Old password"
          placeholder="Old password"
          required-mark
          type="password"
        />
        <div class="hidden md:block" />
        <VaInput
          v-model="newPassword"
          :rules="newPasswordRules"
          label="New password"
          placeholder="New password"
          required-mark
          type="password"
        />
        <VaInput
          v-model="repeatNewPassword"
          :rules="repeatNewPasswordRules"
          label="Repeat new password"
          placeholder="Repeat new password"
          required-mark
          type="password"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-2 items-center">
          <div>
            <VaIcon :name="newPassword?.length! >= 8 ? 'mso-check' : 'mso-close'" color="secondary" size="20px" />
          </div>
          <p>Must be at least 8 characters long</p>
        </div>
        <div class="flex space-x-2 items-center">
          <div>
            <VaIcon :name="new Set(newPassword).size >= 6 ? 'mso-check' : 'mso-close'" color="secondary" size="20px" />
          </div>
          <p>Must contain at least 6 unique characters</p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:justify-end md:flex-row md:space-x-4">
        <VaButton :style="buttonStyles" preset="secondary" color="secondary" @click="emits('cancel')"> Cancel</VaButton>
        <VaButton :style="buttonStyles" class="mb-4 md:mb-0" type="submit" @click="submit"> Update Password</VaButton>
      </div>
    </VaForm>
  </VaModal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useForm, useToast } from 'vuestic-ui'

import { buttonStyles } from '../styles'

const oldPassowrd = ref<string>()
const newPassword = ref<string>()
const repeatNewPassword = ref<string>()

const { validate } = useForm('form')
const { init } = useToast()

const emits = defineEmits(['cancel'])

const submit = () => {
  if (validate()) {
    init({ message: "You've successfully changed your password", color: 'success' })
    emits('cancel')
  }
}

const oldPasswordRules = [(v: string) => !!v || 'Old password field is required']

const newPasswordRules = [
  (v: string) => !!v || 'New password field is required',
  (v: string) => v?.length >= 8 || 'Must be at least 8 characters long',
  (v: string) => new Set(v).size >= 6 || 'Must contain at least 6 unique characters',
  (v: string) => v !== oldPassowrd.value || 'New password cannot be the same',
]

const repeatNewPasswordRules = [
  (v: string) => !!v || 'Repeat new password field is required',
  (v: string) => v === newPassword.value || 'Confirm password does not match new password',
]
</script>

<style lang="scss">
// TODO temporary before https://github.com/epicmaxco/vuestic-ui/issues/4020 fix
.va-modal__inner {
  min-width: 326px;
}
</style>
