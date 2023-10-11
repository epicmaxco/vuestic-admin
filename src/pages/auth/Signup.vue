<template>
  <va-form ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Sign up</h1>
    <p class="text-base mb-4 leading-5">
      Have an account?
      <router-link class="font-semibold text-primary" :to="{ name: 'login' }">Login</router-link>
    </p>
    <va-input
      v-model="formData.email"
      class="mb-4"
      type="email"
      label="Email"
      :rules="[(v) => !!v || 'Email field is required']"
    />
    <va-value v-slot="isPasswordVisible" :default-value="false">
      <va-input
        ref="password1"
        v-model="formData.password"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Password"
        :rules="passwordRules"
        messages="Password should be 8+ characters: letters, numbers, and special characters."
        @click-append-inner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <va-icon
            class="cursor-pointer"
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            color="secondary"
          />
        </template>
      </va-input>
      <va-input
        ref="password2"
        v-model="formData.repeatPassword"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Repeat Password"
        :rules="[
          (v) => !!v || 'Repeat Password field is required',
          (v) => v === formData.password || 'Passwords don\'t match',
        ]"
        @click-append-inner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <va-icon
            class="cursor-pointer"
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            color="secondary"
          />
        </template>
      </va-input>
    </va-value>

    <div class="flex justify-center mt-4">
      <va-button class="w-full" @click="submit"> Create account</va-button>
    </div>
  </va-form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useForm, useToast } from 'vuestic-ui'

  const { validate } = useForm('form')
  const { push } = useRouter()
  const { init } = useToast()

  const formData = reactive({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const submit = () => {
    if (validate()) {
      init({
        message: "You've successfully signed up",
        color: 'success',
      })
      push({ name: 'dashboard' })
    }
  }

  const passwordRules: ((v: string) => boolean | string)[] = [
    (v) => !!v || 'Password field is required',
    (v) => (v && v.length >= 8) || 'Password must be at least 8 characters long',
    (v) => (v && /[A-Za-z]/.test(v)) || 'Password must contain at least one letter',
    (v) => (v && /\d/.test(v)) || 'Password must contain at least one number',
    (v) => (v && /[!@#$%^&*(),.?":{}|<>]/.test(v)) || 'Password must contain at least one special character',
  ]
</script>
