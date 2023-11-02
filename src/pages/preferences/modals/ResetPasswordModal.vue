<template>
  <va-modal 
    hideDefaultActions
    modelValue
    :mobileFullscreen="false"
    @update:modelValue="emits('cancel')"
  >
    <va-form 
      class="space-y-6 w-[326px] md:w-[608px]"
      ref="form"
      @submit.prevent="submit"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <va-input
          requiredMark
          v-model="oldPassowrd"
          label="Old password"
          placeholder="Old password"
          type="password"
          :rules="oldPasswordRules"
        />
        <div class="hidden md:block" />
        <va-input
          requiredMark
          v-model="newPassword"
          label="New password"
          placeholder="New password"
          type="password"
          :rules="newPasswordRules"
        />
        <va-input
          requiredMark
          v-model="repeatNewPassword"
          label="Repeat new password"
          placeholder="Repeat new password"
          type="password"
          :rules="repeatNewPasswordRules"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex space-x-2 items-center">
          <div>
            <va-icon 
              color="secondary"
              size="20px"
              name="mso-check"
            />
          </div>
          <p>
            Must be at least 8 characters long
          </p>
        </div>
        <div class="flex space-x-2 items-center">
          <div>
            <va-icon 
              color="secondary"
              size="20px"
              name="mso-check"
            />
          </div>
          <p>
            Must contain at least 6 unique characters 
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:justify-end md:flex-row md:space-x-4">
        <va-button 
          preset="plain"
          :style="buttonStyles"
          @click="emits('cancel')"
        >
          Cancel
        </va-button>
        <va-button 
          class="mb-4 md:mb-0"
          type="submit"
          :style="buttonStyles"
          @click="submit"
        >
          Update Password
        </va-button>
      </div>
    </va-form>
    <template #footer>
      <div class="flex flex-1 flex-col p-4 space-y-4 bg-backgroundElement text-[13px] leading-4 -mx-4 -mb-4">
        <div class="flex flex-col md:flex-row md:space-x-1 space-y-4 md:space-y-0">
          <p class="text-textPrimary">
            Can’t remember your current password?
          </p>
          <div class="text-primary font-semibold">
            Reset Via Email
          </div>
        </div>
        <div class="flex items-center space-x-1 text-secondary">
          <div>
            <va-icon
              size="16px" 
              name="mso-info"
            />
          </div>
          <p>
            You will be asked to log again.
          </p>
        </div>
      </div>
    </template>
  </va-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vuestic-ui'
import { useGlobalStore } from "../../../stores/global-store"

import { buttonStyles } from '../styles'

const store = useGlobalStore()

const oldPassowrd = ref<string>()
const newPassword = ref<string>()
const repeatNewPassword = ref<string>()

const { validate } = useForm('form')

const emits = defineEmits(['cancel'])

const submit = () => {
  if (validate()) {
    store.changePassword(newPassword.value!)
    emits('cancel')
  }
}

const oldPasswordRules = [
  (v: string) => !!v || 'Old password field is required',
  (v: string) => v === store.password || 'Incorrect password'
]

const newPasswordRules = [
  (v: string) => !!v || 'New password field is required',
  (v: string) => v !== oldPassowrd.value || 'New password cannot be the same',
]

const repeatNewPasswordRules = [
  (v: string) => !!v || 'Repeat new password field is required',
  (v: string) => v === newPassword.value || 'Confirm password does not match New password',
  (v: string) => v !== oldPassowrd.value|| 'New password cannot be the same',
]
</script>
