<template>
  <va-form ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Log in</h1>
    <p class="text-base mb-4 leading-5">
      New to Vuestic?
      <router-link class="font-semibold text-primary" :to="{ name: 'signup' }">Sign up</router-link>
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
        v-model="formData.password"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Password"
        :rules="[(v) => !!v || 'Password field is required']"
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

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <va-checkbox v-model="formData.keepLoggedIn" class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
      <router-link class="mt-2 sm:mt-0 sm:ml-1 va-link" :to="{ name: 'recover-password' }">
        Forgot password?
      </router-link>
    </div>

    <div class="flex justify-center mt-4">
      <va-button class="w-full" @click="submit"> Login</va-button>
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
    keepLoggedIn: false,
  })

  const submit = () => {
    if (validate()) {
      init({ message: "You've successfully logged in", color: 'success' })
      push({ name: 'dashboard' })
    }
  }
</script>
