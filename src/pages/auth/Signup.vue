<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Sign up</h1>
    <p class="text-base mb-4 leading-5">
      Have an account?
      <RouterLink class="font-semibold text-primary" :to="{ name: 'login' }">Login</RouterLink>
    </p>
    <VaInput
      v-model="formData.email"
      class="mb-4"
      type="email"
      label="Email"
      :rules="[(v) => !!v || 'Email field is required', (v) => /.+@.+\..+/.test(v) || 'Email should be valid']"
    />
    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput
        ref="password1"
        v-model="formData.password"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Password"
        :rules="passwordRules"
        messages="Password should be 8+ characters: letters, numbers, and special characters."
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <VaIcon
            class="cursor-pointer"
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            color="secondary"
          />
        </template>
      </VaInput>
      <VaInput
        ref="password2"
        v-model="formData.repeatPassword"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Repeat Password"
        :rules="[
          (v) => !!v || 'Repeat Password field is required',
          (v) => v === formData.password || 'Passwords don\'t match',
        ]"
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <VaIcon
            class="cursor-pointer"
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            color="secondary"
          />
        </template>
      </VaInput>
    </VaValue>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Create account</VaButton>
    </div>
  </VaForm>
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
