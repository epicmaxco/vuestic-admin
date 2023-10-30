<template>
  <va-modal 
    hideDefaultActions
    model-value
    :mobileFullscreen="false"
    @update:modelValue="emits('cancel')"
  >
    <va-form 
      class="space-y-6"
      ref="form"
      @submit.prevent="submit"
    >
      <va-input 
        class="!w-[326px] md:!w-[292px]"
        requiredMark
        label="Old password"
        placeholder="Old password"
      />
      <div class="flex flex-col md:flex-row md:space-x-6">
        <va-input 
          class="!w-[326px] md:!w-[292px]"
          requiredMark
          label="New password"
          placeholder="New password"
        />
        <va-input 
          class="!w-[326px] md:!w-[292px] mt-6 md:mt-0"
          requiredMark
          label="Repeat new password"
          placeholder="Repeat new password"
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
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <va-button 
          type="submit"
          :style="buttonStyles"
          @click="submit"
        >
          Update Password
        </va-button>
        <va-button 
          preset="plain"
          :style="buttonStyles"
          @click="emits('cancel')"
        >
          Cancel
        </va-button>
      </div>
    </va-form>
    <template #footer>
      <div class="flex flex-1 flex-col p-4 space-y-4 bg-backgroundElement text-[13px] leading-4 -mx-4 -mb-4">
        <div class="flex flex-col md:flex-row md:space-x-1 space-y-4 md:space-y-0">
          <p class="text-textPrimary">
            Can’t remember your current password?
          </p>
          <router-link 
            class="text-primary font-semibold"
            to="/"
          >
            Reset Via Email
          </router-link >
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
import { useForm } from 'vuestic-ui'

import { buttonStyles } from '../styles'

const { validate } = useForm('form')

const emits = defineEmits(['cancel'])

const submit = () => {
  if (validate()) {
    console.log('success')
    emits('cancel')
  }
}
</script>
