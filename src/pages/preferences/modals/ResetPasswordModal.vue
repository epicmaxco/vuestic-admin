<template>
  <va-modal hide-default-actions model-value :mobile-fullscreen="false" @update:modelValue="emits('cancel')">
    <va-form ref="form" class="space-y-6 w-[326px] md:w-[608px]" @submit.prevent="submit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <va-input
          v-model="oldPassowrd"
          required-mark
          label="Old password"
          placeholder="Old password"
          type="password"
          :rules="oldPasswordRules"
        />
        <div class="hidden md:block" />
        <va-input
          v-model="newPassword"
          required-mark
          label="New password"
          placeholder="New password"
          type="password"
          :rules="newPasswordRules"
        />
        <va-input
          v-model="repeatNewPassword"
          required-mark
          label="Repeat new password"
          placeholder="Repeat new password"
          type="password"
          :rules="repeatNewPasswordRules"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-2 items-center">
          <div>
            <va-icon color="secondary" size="20px" :name="newPassword?.length! >= 8 ? 'mso-check' : 'mso-close'" />
          </div>
          <p>Must be at least 8 characters long</p>
        </div>
        <div class="flex space-x-2 items-center">
          <div>
            <va-icon color="secondary" size="20px" :name="new Set(newPassword).size >= 6 ? 'mso-check' : 'mso-close'" />
          </div>
          <p>Must contain at least 6 unique characters</p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:justify-end md:flex-row md:space-x-4">
        <va-button preset="plain" :style="buttonStyles" @click="emits('cancel')"> Cancel </va-button>
        <va-button class="mb-4 md:mb-0" type="submit" :style="buttonStyles" @click="submit">
          Update Password
        </va-button>
      </div>
    </va-form>
  </va-modal>
</template>
<script setup lang="ts">
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
