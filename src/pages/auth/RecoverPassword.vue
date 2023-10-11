<template>
  <va-form ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Forgot your password?</h1>
    <p class="text-base mb-4 leading-5">
      If you've forgotten your password, don't worry. Simply enter your email address below, and we'll send you an email
      with a temporary password. Restoring access to your account has never been easier.
    </p>
    <va-input
      v-model="email"
      class="mb-4"
      type="email"
      label="Enter your email"
      :rules="[(v) => !!v || 'Email field is required']"
    />
    <va-button class="w-full mb-2" @click="submit">Send password</va-button>
    <va-button class="w-full" preset="secondary" :to="{ name: 'login' }" @click="submit">Go back</va-button>
  </va-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useForm, useToast } from 'vuestic-ui'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const form = useForm('form')
  const router = useRouter()

  const submit = () => {
    if (form.validate()) {
      router.push({ name: 'recover-password-email' })
    }
  }
</script>
