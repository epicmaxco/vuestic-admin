<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Log in</h1>
    <p class="text-base mb-4 leading-5">
      New to Vuestic?
      <RouterLink class="font-semibold text-primary" :to="{ name: 'signup' }">Sign up</RouterLink>
    </p>
    <VaInput
      v-model="formData.email"
      class="mb-4"
      type="email"
      label="Email"
      :rules="[(v) => !!v || 'Email field is required']"
    />
    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput
        v-model="formData.password"
        class="mb-4"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        label="Password"
        :rules="[(v) => !!v || 'Password field is required']"
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

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <VaCheckbox v-model="formData.keepLoggedIn" class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
      <RouterLink class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary" :to="{ name: 'recover-password' }">
        Forgot password?
      </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Login</VaButton>
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
    keepLoggedIn: false,
  })

  const submit = () => {
    if (validate()) {
      init({ message: "You've successfully logged in", color: 'success' })
      push({ name: 'dashboard' })
    }
  }
</script>
